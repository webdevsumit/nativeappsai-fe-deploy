import React, {  } from 'react';
import { toast } from 'react-hot-toast';
import { redirect, useLoaderData } from 'react-router-dom';
import { getDashboardDataAPI } from '../../apis/common';
import DashboardCard from '../../components/DashboardCard';
import NormalLineChart from '../../components/commons/NormalLineChart';
import './style.css';
import { currencyConverter } from '../../actions/commons';

let currentStoreCurrency = localStorage.getItem('currentStoreCurrency');
if (!currentStoreCurrency) currentStoreCurrency = 'Rs.';



export const loader = async () => {
    let data = null;
    let monthNames = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");

    await getDashboardDataAPI().then(res=>{
        if(res.data.status === 'success'){
            data = res.data;
        }else toast.error(res.data.error);
    }).catch(err=>toast.error(err.message));
    if(!!data){
        if(data.graphData.length===0){
            data.graphData = [...monthNames.map(month=>({"name": month, value: 0}))]
        }
        if(data.graphData.length===1){
            data.graphData = [{"name": data.graphData[0].month>2 ? monthNames[data.graphData[0].month-2] : monthNames[11], value: 0}, data.graphData[0], ]
        }
        return {data};
    }
    return redirect('/my-store/notifications');
}

function StoreDashboard() {

    const { data } = useLoaderData();
    const graphData = data.graphData.map(gData=>({...gData, "value": (gData.value/100)}))

    return (
        <div className='StoreDashboard'>
            <div className='StoreDashboard-inline'>
                <DashboardCard icon='/assets/icons/svgs/dashboard/bag.svg' value={data.productsViewsPerDay} name="Registered" />
                <DashboardCard icon='/assets/icons/svgs/dashboard/eye.svg' value={data.totalRegisteredProducts} name="View/Day" />
            </div>
            <div className='StoreDashboard-inline'>
                <DashboardCard icon='/assets/icons/svgs/dashboard/twoPeople.svg' value={data.totalClients} name="Clients" />
                <DashboardCard icon='/assets/icons/svgs/dashboard/heart-outline.svg' value={data.totalProductsLikes} name={"liked Products"} />
            </div>
            <div className='StoreDashboard-graph'>
                <h5>Monthly Sales</h5>
                <NormalLineChart formatedData={graphData} />
            </div>
            {/* <div className='StoreDashboard-inline'>
                <DashboardCard icon='/assets/icons/svgs/dashboard/cart.svg' value={data.incomeOfTheMonth} name="Monthly Sell" />
                <DashboardCard icon='/assets/icons/svgs/dashboard/cart.svg' value={data.yesterdaysIncome} name="Yesterday's Sell" />
            </div> */}
            <div className='StoreDashboard-inline'>
                <DashboardCard icon='/assets/icons/svgs/dashboard/money.svg' currentStoreCurrency={currentStoreCurrency} value={`${currencyConverter(data.salesPerDay/100)}`} name="Today's Sell" />
                <DashboardCard icon='/assets/icons/svgs/dashboard/moneyCheck.svg' currentStoreCurrency={currentStoreCurrency} value={`${currencyConverter(data.totalSalesAmountInPaisa/100)}`} name="Total Sell" />
            </div>
        </div>
    )
}

export default StoreDashboard