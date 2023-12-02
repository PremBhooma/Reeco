// actions.js
import axios from 'axios';
import * as actionTypes from './actionTypes';

export const initializeProducts = (products) => ({
    type: actionTypes.INITIALIZE_PRODUCTS,
    payload: { products },
});

export const approveProduct = (productId) => ({
    type: actionTypes.APPROVE_PRODUCT,
    payload: { productId },
});

export const markMissing = (productId, urgent) => ({
    type: actionTypes.MARK_MISSING,
    payload: { productId, urgent },
});

// export const openEditPopup = (productId) => ({
//     type: actionTypes.OPEN_EDIT_POPUP,
//     payload: { productId },
// });

// export const closeEditPopup = () => ({
//     type: actionTypes.CLOSE_EDIT_POPUP,
// });

// export const updateProduct = (productId, price, quantity, reason) => ({
//     type: actionTypes.UPDATE_PRODUCT,
//     payload: { productId, price, quantity, reason },
// });


export const fetchData = () => async (dispatch) => {
    try {
        const response = await axios.get("https://reeco-data.onrender.com/products");
        dispatch(initializeProducts(response.data));
        console.log(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};