import React, { useEffect, useState } from 'react';
import './style.css';
import { bottomScrollGapInPixels } from '../../actions/variables';
import { getUpcomingMeetingsAPI } from '../../apis/common';
import MeetingCard from '../../components/MeetingCard';
import { toast } from 'react-hot-toast';


var globelCaughtAll = false;
var globelPendingCall = false;
var globalPageNum = 1;

function Meets() {

    const [mettings, setMeetings] = useState([]);
    const [page, setPage] = useState(globalPageNum);
    const [caughtAll, setCaughtAll] = useState(globelCaughtAll);
    const [totalMeetings, setTotalMeetings] = useState(0);
    const [pendingCall, setPendingCall] = useState(globelPendingCall);

    const fetchMeetings = async () => {
		setPendingCall(true);
		await getUpcomingMeetingsAPI(globalPageNum).then(res => {
			if (res.data.status === 'success') {
                if(res.data.page===1){
                    setMeetings(res.data.upcoming_meetings);
                }else{
                    setMeetings(renderedMeetings=>[...renderedMeetings, ...res.data.upcoming_meetings]);
                }
                setCaughtAll(res.data.caughtAll);
                setTotalMeetings(res.data.upcoming_meetings_count)
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
		const wrappedElement = document.getElementById('Meetings_element');
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
        <div className='Meets' id="Meetings_element">
            <h4 className='Meets-TotalresultNum'>Total Upcoming Meetins: {totalMeetings}</h4>
			{mettings.map((meeting, i) => <MeetingCard key={i} meeting={meeting} />)}
            {!caughtAll && <><div className='Meets-Loading-more'><p>loading...</p></div></>}
        </div>
    )
}

export default Meets;