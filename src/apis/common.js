import axios from "axios";
// import moment from "moment";

// const baseUrl = 'http://127.0.0.1:8000/v1/';
const baseUrl = 'https://apis.getcustomer.live/v1/';


export async function checkStoreOwnerAuthAPI() {
    return await new Promise(async (onResolve, onReject) => {
        let token = localStorage.getItem('token');
        if(!token) onReject({message: "Please Sign In."});
        else
            await axios.get(
                `${baseUrl}checkStoreOwnerAuth/`,
                {
                    headers: {
                        'Content-Type': "application/json",
                        'Accept': "application/json",
                        'Authorization': `Token ${token}`
                    }
                }
            )
                .then(res => onResolve(res))
                .catch(err => onReject(err));
    });
}

export async function loginApi(payloads) {
    return await new Promise(async (onResolve, onReject) => {
        await axios.post(
            `${baseUrl}loginToStoreOwnerAccount/`,
            payloads,
            {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                    // 'Authorization': `Token ${token}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}

export async function signupApi(payloads) {
    return await new Promise(async (onResolve, onReject) => {
        await axios.post(
            `${baseUrl}SignUpByStoreOwner/`,
            payloads,
            {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                    // 'Authorization': `Token ${token}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}