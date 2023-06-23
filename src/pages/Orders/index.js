import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { bottomScrollGapInPixels } from '../../actions/variables';
import { getUsersOrdersAPI } from '../../apis/common';
import OrdersCard from '../../components/OrdersCard';
import './style.css';

var globelCaughtAll = false;
var globelPendingCall = false;
var globalPageNum = 1;

function Orders() {

    const [orders, setOrders] = useState([]);
	const [page, setPage] = useState(globalPageNum);
	const [caughtAll, setCaughtAll] = useState(globelCaughtAll);
	const [totalOrders, setTotalOrders] = useState(0);
	const [pendingCall, setPendingCall] = useState(globelPendingCall);

    const fetchOrders = async () => {
		setPendingCall(true);
		await getUsersOrdersAPI(globalPageNum).then(res => {
			if (res.data.status === 'success') {
				setOrders(renderedOrders => [...renderedOrders, ...res.data.my_orders]);
				setCaughtAll(res.data.caughtAll);
				setTotalOrders(res.data.my_orders_count);
			}
		}).catch(err => toast.error(err.message));
		setPendingCall(false);
	}

    const isBottom = (el) => {
		return window.innerHeight - el.getBoundingClientRect().bottom >= -bottomScrollGapInPixels;
	}

	const trackScrolling = () => {
		const wrappedElement = document.getElementById('orders_element');
		if (isBottom(wrappedElement) && !globelCaughtAll && !globelPendingCall) {
			setPage(globalPageNum + 1);
		}
	};

	useEffect(() => {
		document.addEventListener('scroll', trackScrolling);
		return (() => {
			document.removeEventListener('scroll', trackScrolling);
			globelCaughtAll = false;
			globelPendingCall = false;
			globalPageNum = 1;
		})
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		globelCaughtAll = caughtAll;
		globelPendingCall = pendingCall;
		// eslint-disable-next-line
	}, [caughtAll, pendingCall])

	useEffect(() => {
		globalPageNum = page;
		fetchOrders();
		// eslint-disable-next-line
	}, [page])

    return (
        <div id='orders_element' >
            <h4 className='Orders-TotalresultNum'>Total Orders: {totalOrders}</h4>
			{orders.map((order, i) => <OrdersCard key={i} order={order} />)}
			{!caughtAll && <><div className='Orders-Loading-more'><p>loading...</p></div></>}
		</div>
    )
}

export default Orders;