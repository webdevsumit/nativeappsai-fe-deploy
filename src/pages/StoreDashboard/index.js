import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { redirect, useLoaderData } from 'react-router-dom';
// import { getDashboardDataAPI } from '../../apis/common';
import DashboardCard from '../../components/DashboardCard';
import NormalLineChart from '../../components/commons/NormalLineChart';
import './style.css';
import { currencyConverter } from '../../actions/commons';

let currentStoreCurrency = localStorage.getItem('currentStoreCurrency');
if (!currentStoreCurrency) currentStoreCurrency = 'Rs.';



export const loader = async () => {
    let data = {
        monthlySales: [
            {
                "name": "Jan",
                "value": 0
            },
            {
                "name": "Feb",
                "value": 0
            },
            {
                "name": "Mar",
                "value": 0
            },
            {
                "name": "Apr",
                "value": 0
            },
            {
                "name": "May",
                "value": 0
            },
            {
                "name": "Jun",
                "value": 0
            },
            {
                "name": "Jul",
                "value": 0
            },
            {
                "name": "Aug",
                "value": 0
            },
            {
                "name": "Sep",
                "value": 0
            },
            {
                "name": "Oct",
                "value": 0
            },
            {
                "name": "Nov",
                "value": 0
            },
            {
                "name": "Dec",
                "value": 0
            }
        ]
    };
    // await getDashboardDataAPI().then(res=>{
    //     if(res.data.status === 'success'){
    //         data = res.data.data;
    //     }else toast.error(res.data.error[language]);
    // }).catch(err=>toast.error(err.message));
    if(!!data) return {data};
    return redirect('/my-store/notifications');
}

function StoreDashboard() {

    const { data } = useLoaderData();

    useEffect(()=>{
        toast.error("We are still working on that.");
    }, [])

    return (
        <div className='StoreDashboard'>
            <div className='StoreDashboard-inline'>
                <DashboardCard icon='/assets/icons/svgs/dashboard/bag.svg' value={123} name="Registered" />
                <DashboardCard icon='/assets/icons/svgs/dashboard/eye.svg' value={234} name="View/Day" />
            </div>
            <div className='StoreDashboard-inline'>
                <DashboardCard icon='/assets/icons/svgs/dashboard/twoPeople.svg' value={455} name="Clients" />
                <DashboardCard icon='/assets/icons/svgs/dashboard/heart-outline.svg' value={21} name={"liked Products"} />
            </div>
            <div className='StoreDashboard-graph'>
                <h5>Monthly Sales</h5>
                <NormalLineChart formatedData={data.monthlySales} />
            </div>
            <div className='StoreDashboard-inline'>
                <DashboardCard icon='/assets/icons/svgs/dashboard/cart.svg' value={data.incomeOfTheMonth} name="Monthly Sell" />
                <DashboardCard icon='/assets/icons/svgs/dashboard/cart.svg' value={data.yesterdaysIncome} name="Yesterday's Sell" />
            </div>
            <div className='StoreDashboard-inline'>
                <DashboardCard icon='/assets/icons/svgs/dashboard/money.svg' currentStoreCurrency={currentStoreCurrency} value={`${currencyConverter(150)}`} name="Today's Sell" />
                <DashboardCard icon='/assets/icons/svgs/dashboard/moneyCheck.svg' currentStoreCurrency={currentStoreCurrency} value={`${currencyConverter(250)}`} name="Total Sell" />
            </div>
        </div>
    )
}

export default StoreDashboard