import moment from 'moment';
import React, { useState } from 'react';
// import { toast } from 'react-hot-toast';
import { Link, useLocation } from 'react-router-dom';
import './style.css'

function OrdersCard({ order }) {

    const [orderObj,] = useState(order);
    const location = useLocation();
    let extraSlace = '';
    if(location.pathname[location.pathname.length-1] !== '/') extraSlace = '/';

    return (
        <Link className='OrdersCard-link' to={`${location.pathname}${extraSlace}${orderObj.id}/`}>
            <div className='OrdersCard' style={{backgroundColor: 'var(--user-primary)'}}>
                <div className='OrdersCard-text-div'>
                    <p className='OrdersCard-text' > Order Id. {orderObj.id}</p>
                    <p className='OrdersCard-text-date' >{moment(orderObj.createdAt).format(`DD/MM/YY hh:mm a`)}</p>
                </div>
                <hr/>
                <div className='OrdersCard-amount-div'>
                    <div className='OrdersCard-amount-inner-div'>
                        Subtotal 
                        <h5 className='OrdersCard-text-date'>Rs. : {orderObj.subtotal_in_paisa/100}</h5>
                    </div>
                    <div className='OrdersCard-amount-inner-div'>
                        Delievery
                        <h5 className='OrdersCard-text-date'>Rs. : {orderObj.delievery_charges_in_paisa/100}</h5>
                    </div>
                    <div className='OrdersCard-amount-inner-div'>
                        Total
                        <h5 className='OrdersCard-text-date'>Rs. : {orderObj.total_in_paisa/100}</h5>
                    </div>
                </div>
                <hr/>
                <div className='OrdersCard-amount-div'>
                    <div className='OrdersCard-amount-inner-div'>
                        Confirmed 
                        <h5 className={'OrdersCard-text-date '+(orderObj.is_confirmed ? '' : 'text-warning')}>{orderObj.is_confirmed ? "YES" : "NOT YET"}</h5>
                    </div>
                    <div className='OrdersCard-amount-inner-div'>
                        Payment 
                        <h5 className={'OrdersCard-text-date '+(!!orderObj.payment_method ? '' : 'text-warning')}>{!!orderObj.payment_method ? orderObj.payment_method : "NOT YET"}</h5>
                    </div>
                    <div className='OrdersCard-amount-inner-div'>
                        Delivered 
                        <h5 className={'OrdersCard-text-date '+(orderObj.is_delivered ? '' : 'text-warning')}>{orderObj.is_delivered ? "YES" : "NOT YET"}</h5>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default OrdersCard