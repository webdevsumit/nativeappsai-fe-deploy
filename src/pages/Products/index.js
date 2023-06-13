import React, { useEffect, useState } from 'react';
import './style.css';
import { bottomScrollGapInPixels } from '../../actions/variables';
import { fetchMyProductsAPI } from '../../apis/common';
import ProductCard from '../../components/ProductCard';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


var globelCaughtAll = false;
var globelPendingCall = false;
var globalPageNum = 1;

function Products() {

	const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(globalPageNum);
    const [caughtAll, setCaughtAll] = useState(globelCaughtAll);
    const [totalProducts, setTotalProducts] = useState(0);
    const [pendingCall, setPendingCall] = useState(globelPendingCall);

    const fetchMeetings = async () => {
		setPendingCall(true);
		await fetchMyProductsAPI(globalPageNum).then(res => {
			if (res.data.status === 'success') {
                if(res.data.page===1){
                    setProducts(res.data.my_proudcts);
                }else{
                    setProducts(renderedMeetings=>[...renderedMeetings, ...res.data.my_proudcts]);
                }
                setCaughtAll(res.data.caughtAll);
                setTotalProducts(res.data.my_proudcts_count)
			}
		}).catch(err => toast.error(err.message));
		setPendingCall(false);
	}

    const isBottom = (el) => {
		// value of the difference is also positive becuase of extra div that we have under navbar
		// console.log(window.innerHeight - el.getBoundingClientRect().bottom);
		return window.innerHeight - el.getBoundingClientRect().bottom >= -bottomScrollGapInPixels;
	}

    const trackScrolling = () => {
		const wrappedElement = document.getElementById('Products_element');
		if (isBottom(wrappedElement) && !globelCaughtAll && !globelPendingCall) {
			// fetchProducts();
			setPage(globalPageNum + 1);
			// document.removeEventListener('scroll', trackScrolling);
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
		fetchMeetings();
		// eslint-disable-next-line
	}, [page])

    return (
        <div className='Products' id="Products_element">
			<div className='Products-add_more-button' onClick={()=>navigate("/products/add")}><p>+</p></div>
            <h4 className='Products-TotalresultNum'>Number Of Products Added: {totalProducts}</h4>
			{products.map((product, i) => <ProductCard key={i} product={product} />)}
            {!caughtAll && <><div className='Products-Loading-more'><p>loading...</p></div></>}
        </div>
    )
}

export default Products;