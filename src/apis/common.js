import axios from "axios";
// import moment from "moment";

// const baseUrl = 'http://127.0.0.1:8000/v2/';
const baseUrl = 'https://apis.getcustomer.live/v2/';


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
            `${baseUrl}signupByStoreOwner/`,
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


export async function getUpcomingMeetingsAPI(page) {
    return await new Promise(async (onResolve, onReject) => {
        await axios.get(
            `${baseUrl}meets/getUpcomingMeetings/?page=${page}&recordsPerPage=10`,
            {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                    'Authorization': `Token ${localStorage.getItem("token")}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}

export async function fetchMyProductsAPI(page) {
    return await new Promise(async (onResolve, onReject) => {
        await axios.get(
            `${baseUrl}products_data/fetchMyProducts/?page=${page}&recordsPerPage=10`,
            {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                    'Authorization': `Token ${localStorage.getItem("token")}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}

export async function adddNewProductAPI(payloads) {
    return await new Promise(async (onResolve, onReject) => {
        await axios.post(
            `${baseUrl}products_data/adddNewProduct/`,
            payloads,
            {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                    'Authorization': `Token ${localStorage.getItem("token")}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}

export async function checkMeetToConfirmByIdAPI(meetId) {
    return await new Promise(async (onResolve, onReject) => {
        let token = localStorage.getItem('token');
        if(!token) onReject({message: "Please Sign In."});
        else
            await axios.get(
                `${baseUrl}meets/checkMeetToConfirmById/${meetId}/`,
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

export async function getMyProductByIdAPI(id) {
    return await new Promise(async (onResolve, onReject) => {
        let token = localStorage.getItem('token');
        if(!token) onReject({message: "Please Sign In."});
        else
            await axios.get(
                `${baseUrl}products_data/getProductById/${id}/`,
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

export async function updateProductByIdAPI(id, payloads) {
    return await new Promise(async (onResolve, onReject) => {
        let token = localStorage.getItem('token');
        if(!token) onReject({message: "Please Sign In."});
        else
            await axios.post(
                `${baseUrl}products_data/updateProductById/${id}/`,
                payloads,
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


export async function getImagesByProductIdAPI(id) {
    return await new Promise(async (onResolve, onReject) => {
        await axios.get(
            `${baseUrl}products_data/getImagesByProductId/${id}/`,
            {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                    'Authorization': `Token ${localStorage.getItem("token")}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}

export async function addImageByProductIdAPI(id, payloads) {
    return await new Promise(async (onResolve, onReject) => {
        await axios.post(
            `${baseUrl}products_data/addImageByProductId/${id}/`,
            payloads,
            {
                headers: {
                    'Content-Type': "multipart/form-data",
                    'Accept': "application/json",
                    'Authorization': `Token ${localStorage.getItem("token")}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}

export async function replaceImageByProductIdAndImageIdAPI(productId, imageId, payloads) {
    return await new Promise(async (onResolve, onReject) => {
        await axios.post(
            `${baseUrl}products_data/replaceImageByProductIdAndImageId/${productId}/${imageId}/`,
            payloads,
            {
                headers: {
                    'Content-Type': "multipart/form-data",
                    'Accept': "application/json",
                    'Authorization': `Token ${localStorage.getItem("token")}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}

export async function deleteImageByProductIdAndImageIdAPI(productId, imageId) {
    return await new Promise(async (onResolve, onReject) => {
        await axios.get(
            `${baseUrl}products_data/deleteImageByProductIdAndImageId/${productId}/${imageId}/`,
            {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                    'Authorization': `Token ${localStorage.getItem("token")}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}

export async function signupAddStoreDetailsAPI(payloads) {
    return await new Promise(async (onResolve, onReject) => {
        await axios.post(
            `${baseUrl}signupAddStoreDetails/`,
            payloads,
            {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                    'Authorization': `Token ${localStorage.getItem("token")}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}

export async function getUsersOrdersAPI({page=1}) {
    return await new Promise(async (onResolve, onReject) => {
        await axios.get(
            `${baseUrl}products_data/fetchOrders/?page=${page}&recordsPerPage=10`,
            {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                    'Authorization': `Token ${localStorage.getItem("token")}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}

export async function getOrderDetailsByIdAPI(orderId) {
    return await new Promise(async (onResolve, onReject) => {
        await axios.get(
            `${baseUrl}products_data/getOrderDetailsById/${orderId}/`,
            {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                    'Authorization': `Token ${localStorage.getItem("token")}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}

export async function cancelTheOrderFromStoreByIdAPI(orderId) {
    return await new Promise(async (onResolve, onReject) => {
        await axios.get(
            `${baseUrl}products_data/cancelTheOrderFromStoreById/${orderId}/`,
            {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                    'Authorization': `Token ${localStorage.getItem("token")}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}

export async function setUserOrderDeliveredByIdAPI(orderId) {
    return await new Promise(async (onResolve, onReject) => {
        await axios.get(
            `${baseUrl}products_data/setUserOrderDeliveredById/${orderId}/`,
            {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                    'Authorization': `Token ${localStorage.getItem("token")}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}

export async function getStoreAccountDetailsAPI() {
    return await new Promise(async (onResolve, onReject) => {
        await axios.get(
            `${baseUrl}getStoreAccountDetails/`,
            {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                    'Authorization': `Token ${localStorage.getItem("token")}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}

export async function updateStoreAccountDetailsApi(payloads) {
    return await new Promise(async (onResolve, onReject) => {
        await axios.post(
            `${baseUrl}updateStoreAccountDetails/`,
            payloads,
            {
                headers: {
                    'Content-Type': "multipart/form-data",
                    'Accept': "application/json",
                    'Authorization': `Token ${localStorage.getItem("token")}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}

export async function onSaveRazorpayCredentialsApi(payloads) {
    return await new Promise(async (onResolve, onReject) => {
        await axios.post(
            `${baseUrl}onSaveRazorpayCredentials/`,
            payloads,
            {
                headers: {
                    'Content-Type': "multipart/form-data",
                    'Accept': "application/json",
                    'Authorization': `Token ${localStorage.getItem("token")}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}


export async function disbaleToggleProductByIdApi(id) {
    return await new Promise(async (onResolve, onReject) => {
        await axios.get(
            `${baseUrl}products_data/disbaleToggleProductById/${id}/`,
            {
                headers: {
                    'Content-Type': "multipart/form-data",
                    'Accept': "application/json",
                    'Authorization': `Token ${localStorage.getItem("token")}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}

export async function getDashboardDataAPI(id) {
    return await new Promise(async (onResolve, onReject) => {
        await axios.get(
            `${baseUrl}getDashboardData/`,
            {
                headers: {
                    'Content-Type': "multipart/form-data",
                    'Accept': "application/json",
                    'Authorization': `Token ${localStorage.getItem("token")}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}
