import React, { useEffect, useState } from "react";
// import { google } from 'googleapis';
import './style.css';
import { toast } from 'react-hot-toast';
import { checkMeetToConfirmByIdAPI } from '../../apis/common';
import { useLoaderData } from 'react-router-dom';
import moment from "moment/moment";
// import { googleEventCreaterAPI } from "../../apis/google";

export async function loader({ params }) {
    let IsEligibleToConfirm = false;
    let ErrorMessage = "Meeting Not Found";
    let meetId = params.meetId;
    let meeting = null;

    if (meetId.toLowerCase() === "google") {
        meetId = localStorage.getItem("meetingIdToConfirm");
    } else {
        localStorage.setItem("meetingIdToConfirm", meetId);
    }

    await checkMeetToConfirmByIdAPI(meetId).then((res) => {
        if (res.data.status === 'success') {
            IsEligibleToConfirm = true;
            meeting = res.data.meeting;
        } else {
            toast.error(res.data.message);
            ErrorMessage = res.data.message;
        };
    }).catch(err => toast.error(err.message));

    return { IsEligibleToConfirm, ErrorMessage, meeting };
}

// const calendarID = "primary";
// const clientId = '983190905763-objulfdoij37acj85igp69pqrm8tn7am.apps.googleusercontent.com'
// const clientSecret = "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";
// const discoveryDocs = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
// const scopes = 'https://www.googleapis.com/auth/calendar';
// const redirectUri = `${window.location.href}/meeting/google/confirm`

function AppConfirmPage() {
    const { IsEligibleToConfirm, ErrorMessage, meeting } = useLoaderData();
    // const [state, setState] = useState("Confirming...");
    const [googleCalendarEvent, setGoogleCalendarEvent] = useState(null);

    useEffect(() => {

        const conferenceData = {
            // 'allowedConferenceSolutionTypes': ['hangoutsMeet'],
            'createRequest': {
                'requestId': `meet-${Math.random().toString(36).substring(7)}`,
                'conferenceSolutionKey': {
                    'type': 'hangoutsMeet',
                },
            },
        };

        const event = {
            'summary': 'ShopOnLive Meeting',
            'description': `Meeting with a client via ShopOnLive. Shop: ${meeting.shopName}.`,
            'start': {
                'dateTime': moment(meeting.datetime).toISOString(),
                'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone // current timeZone
            },
            'end': {
                'dateTime': moment(meeting.datetime).add(40, 'minutes').toISOString(),
                'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone // current timeZone
            },
            'conferenceDataVersion': 1,
            'conferenceData': conferenceData,
            'organizer': {
                'email': `${meeting.seller_email}`,
                'self': true,
            },
            "attendees": [
                {
                    "email": `${meeting.user_email}`,
                    "displayName": "Client",
                    "organizer": true,
                    "self": true,
                },
            ],
        }
        setGoogleCalendarEvent(event);
        // eslint-disable-next-line
    }, []);

    const createEvent = async () => {

        // const auth = new google.auth.OAuth2(clientId, clientSecret, redirectUri);
        // // const calendar = google.calendar({ version: 'v3', auth });
        // console.log(auth);

        // const url = auth.generateAuthUrl({
        //     // 'online' (default) or 'offline' (gets refresh_token)
        //     access_type: 'online',

        //     // If you only need one scope you can pass it as a string
        //     scope: scopes
        // });

        // console.log(url);

        // try {

        //   const response = await calendar.events.insert({
        //     calendarId: 'primary',
        //     resource: googleCalendarEvent,
        //   });

        //   console.log('Event created successfully:', response.data);

        // } catch (error) {
        //   console.error('Error creating event:', error.message);
        // }
    };

    // const initClientAndCreateEvent = async () => {

    //     await gapi.load('client:auth2');

    //     await gapi.client.init({
    //       apiKey,
    //       clientId,
    //       discoveryDocs,
    //       scope: scopes,
    //     });

    //     // Load the auth2 library
    //     await gapi.client.load('calendar', 'v3');

    //     // Sign in the user if needed
    //     // await gapi.auth2.getAuthInstance().signIn();

    //     // Get the access token
    //     const accessToken = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token;

    //     await gapi.client.calendar.events.insert({
    //       calendarId: calendarID,
    //       resource: googleCalendarEvent,
    //     });

    //     console.log('Event created successfully!');
    //   };

    // const addEvents = async () => {

    //     let gapiClient = loadClientAuth2(gapi, clientId, scopes);
    //     let googleTokens = await gapiClient.getTokens();

    //     console.log(googleTokens);

    //     // await googleEventCreaterAPI(googleCalendarEvent, )

    // };

    if (!IsEligibleToConfirm)
        return (
            <div className='AppConfirmPage-not-found'>
                <h3>{ErrorMessage}</h3>
            </div>
        );

    return (
        <div className='AppConfirmPage-not-found'>
            <p className="user-submit-button1-dark" onClick={createEvent}>CONFIRM MEETING</p>
        </div>
    );
}

export default AppConfirmPage