import React, { useState } from 'react';
import './style.css';
import { toast } from 'react-hot-toast';
import { redirect, useLoaderData, useNavigate } from 'react-router-dom';
import { cancelTheOrderFromStoreByIdAPI, getOrderDetailsByIdAPI, setUserOrderDeliveredByIdAPI } from '../../apis/common';
import OrderDetailsProductCard from './../../components/OrderDetailsProductCard';


export const loader = async ({ params }) => {
    let data;
    await getOrderDetailsByIdAPI(params.orderId).then(res=>{
        if(res.data.status === "success"){
            data = res.data.data;
        }else toast.error(res.data.message);
    }).catch(err=>toast.error(err.message));
    if(!!data) return {data};
    return redirect('/orders');
}

function OrderDetails() {

    let color = 'var(--user-primary)';
    const history = useNavigate();
    const { data } = useLoaderData();
    const [is_delivered, set_is_delivered] = useState(data.is_delivered)

    const setOrderDeliveredById = async () => {
        if(is_delivered){
            toast.error("The product is already delivered.");
            return;
        }
        if(!data.is_confirmed){
            toast.error("Products are just in client's bag.");
            return;
        }
        await setUserOrderDeliveredByIdAPI(data.id).then(res=>{
            if(res.data.status === "success"){
                toast.success(res.data.message);
                set_is_delivered(true);
            }else toast.error(res.data.message);
        }).catch(err=>toast.error(err.message));
    }

    const cancelOrderById = async () => {
        if(data.is_delivered){
            toast.error("The product is delivered.");
            return;
        }
        if(!data.is_confirmed){
            toast.error("Products are just in the client's bag.");
            return;
        }
        await cancelTheOrderFromStoreByIdAPI(data.id).then(res=>{
            if(res.data.status === "success"){
                toast.success("Order Canceled.")
                history('/orders');
            }else toast.error(res.data.message);
        }).catch(err=>toast.error(err.message));
    }

    return (
        <div className='OrderDetails'>
            <div className='OrderDetails-total-div-container'>
                <h5 className='OrderDetails-head'  style={{color: `${color}`}}>Order Id: {data.id}</h5>
                {/* <h5 className='OrderDetails-head'  style={{color: `${color}`}}>Order Id: {data.id}</h5> */}
            </div>
            {data.products.map((product, index)=><OrderDetailsProductCard key={index} product={product} />)}
            <div className='OrderDetails-total-div-container'>
                <p style={{color: `${color}`}}>Payment Method</p>
                <p className={" "+(!!data.payment_method ? '' : 'text-warning')}>{!!data.payment_method ? data.payment_method : "NOT YET"}</p>
            </div>
            <div className='OrderDetails-total-div-container'>
                <p style={{color: `${color}`}}>Subtotal</p>
                <p style={{color: `${color}`}}>Rs. {data.subtotal_in_paisa/100}</p>
            </div>
            <div className='OrderDetails-total-div-container'>
                <p style={{color: `${color}`}}>Delivery Cost</p>
                <p style={{color: `${color}`}}>Rs. {data.delievery_charges_in_paisa/100}</p>
            </div>
            <div className='OrderDetails-total-div-container'>
                <p style={{color: `${color}`}}>Total</p>
                <p style={{color: `${color}`}}>Rs. {data.total_in_paisa/100}</p>
            </div>
            <div className='OrderDetails-total-div-container'>
                <p style={{color: `${color}`}}>Order Status</p>
                <p style={{color: `${is_delivered? 'green': 'orange'}`}}>{is_delivered ? "ORDERED": "PENDING"}</p>
            </div>

            <div className='OrderDetails-total-div-container-incompeteOrderMessage'>
                <p style={{color: `${color}`}}>ACTIONS</p>
                <hr style={{width: `100%`}} />
                <div className='OrderDetails-extra-btn-inline'>
                    <p className={`user-submit-button1-dark btn-success ${!data.customer_contact?"btn-disabled":""}`}><a style={{fontWeight: 'bold', color: 'white', textDecoration: 'none'}} href={`https://wa.me/${data.customer_contact}`} target='blank'>{!!data.customer_contact? "Whatsapp" : "No Phone"}</a></p>
                    <p className={`user-submit-button1-dark ${!data.customer_contact?"btn-disabled":""}`}><a style={{fontWeight: 'bold', color: 'white', textDecoration: 'none'}} href={`sms:+91${data.customer_contact}`} target='blank'>{!!data.customer_contact? ("SMS: ..."+data.customer_contact?.substring(6)) : "No SMS"}</a></p>
                    <p onClick={cancelOrderById} className={`user-submit-button1-dark btn-danger ${(is_delivered || !data.is_confirmed) ? "btn-disabled" : ""}`}>Cancel</p>
                </div>
            </div>

            <div className='OrderDetails-total-div-container'>
                <p style={{color: `${color}`}}>Delivery Status</p>
                <p style={{color: `${is_delivered? 'green': 'orange'}`}}>{is_delivered ? "DELIVERED":  "PENDING"}</p>
            </div>

            <div className='OrderDetails-total-div-container-incompeteOrderMessage'>
                <div className='OrderDetails-extra-btn-inline'>
                    <p className={`user-submit-button1-dark btn-success ${(is_delivered || !data.is_confirmed) ? "btn-disabled" : ""}`} onClick={setOrderDeliveredById} >Mark As Delivered</p>                    
                </div>
            </div>

            {/* <div className='OrderDetails-total-div-container-address'>
                <h4 style={{color: `${color}`}}>Pick head</h4>
                <table>
                    <tbody>

                        {data.products.length>0 && !!data.products[0].pick_address && <>
                            <tr>
                                <td><p style={{color: `${color}`}}>{t("address.country")}:</p></td>
                                <td><p style={{color: `${color}`}}>{data.products[0].pick_address.country}</p></td>
                            </tr>
                            <tr>
                                <td><p style={{color: `${color}`}}>{t("address.state")}:</p></td>
                                <td><p style={{color: `${color}`}}>{data.products[0].pick_address.state}</p></td>
                            </tr>
                            <tr>
                                <td><p style={{color: `${color}`}}>{t("address.city")}:</p></td>
                                <td><p style={{color: `${color}`}}>{data.products[0].pick_address.city}</p></td>
                            </tr>
                            <tr>
                                <td><p style={{color: `${color}`}}>{t("address.zip")}:</p></td>
                                <td><p style={{color: `${color}`}}>{data.products[0].pick_address.cep_or_pincode}</p></td>
                            </tr>
                            <tr>
                                <td><p style={{color: `${color}`}}>{t("address.landmark")}:</p></td>
                                <td><p style={{color: `${color}`}}>{data.products[0].pick_address.landmark}</p></td>
                            </tr>
                            <tr>
                                <td><p style={{color: `${color}`}}>{t("address.street")}:</p></td>
                                <td><p style={{color: `${color}`}}>{data.products[0].pick_address.street}</p></td>
                            </tr>
                            <tr>
                                <td><p style={{color: `${color}`}}>{t("address.h_no")}:</p></td>
                                <td><p style={{color: `${color}`}}>{data.products[0].pick_address.house_number}</p></td>
                            </tr>
                        </>}
                        <tr>
                            <td><p style={{color: `${color}`}}>7999009898:</p></td>
                            <td>
                                {data.store_contacts.map(contact=>
                                    <p key={contact.id} style={{color: `${color}`}}>
                                        <a href={`tel:${contact?.number}`}>{contact?.number}</a>,
                                    </p>
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div> */}
            
            <div className='OrderDetails-total-div-container-address'>
                <h4 style={{color: `${color}`}}>Drop Address</h4>
                <table>
                    <tbody>

                        {!!data.drop_address && <>
                            <tr>
                                <td><p style={{color: `${color}`}}>Country:</p></td>
                                <td><p style={{color: `${color}`}}>{data.drop_address.country}</p></td>
                            </tr>
                            <tr>
                                <td><p style={{color: `${color}`}}>State:</p></td>
                                <td><p style={{color: `${color}`}}>{data.drop_address.state}</p></td>
                            </tr>
                            <tr>
                                <td><p style={{color: `${color}`}}>City:</p></td>
                                <td><p style={{color: `${color}`}}>{data.drop_address.city}</p></td>
                            </tr>
                            <tr>
                                <td><p style={{color: `${color}`}}>Pincode:</p></td>
                                <td><p style={{color: `${color}`}}>{data.drop_address.pincode}</p></td>
                            </tr>
                            <tr>
                                <td><p style={{color: `${color}`}}>Landmark:</p></td>
                                <td><p style={{color: `${color}`}}>{data.drop_address.landmark}</p></td>
                            </tr>
                            <tr>
                                <td><p style={{color: `${color}`}}>Street:</p></td>
                                <td><p style={{color: `${color}`}}>{data.drop_address.street}</p></td>
                            </tr>
                            <tr>
                                <td><p style={{color: `${color}`}}>Flat No.:</p></td>
                                <td><p style={{color: `${color}`}}>{data.drop_address.house_number}</p></td>
                            </tr>
                        </>}
                        <tr>
                            <td><p style={{color: `${color}`}}>Contact:</p></td>
                            <td><p style={{color: `${color}`}}>
                                <a className='text-primary' href={`tel:+91${data.customer_contact}`}>+91{data.customer_contact}</a>
                            </p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        
        </div>
    )
}

export default OrderDetails