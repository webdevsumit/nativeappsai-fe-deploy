import axios from "axios";

export async function googleEventCreaterAPI(payload, provider_token) {
    return await new Promise(async (onResolve, onReject) => {
        await axios.post(
            `https://www.googleapis.com/calendar/v3/calendars/primary/events?conferenceDataVersion=1`,
            payload,
            {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                    'Authorization': `Bearer ${provider_token}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}