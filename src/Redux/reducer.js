// reducer.js
import * as actionTypes from './actionTypes';

const initialState = {
    products: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.INITIALIZE_PRODUCTS:
            return {
                ...state,
                products: action.payload.products,
            };

        case actionTypes.APPROVE_PRODUCT:
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload.productId
                        ? { ...product, status: 'Approved' }
                        : product
                ),
            };

        case actionTypes.MARK_MISSING:
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload.productId
                        ? { ...product, status: action.payload.urgent ? 'Missing - Urgent' : 'Missing' }
                        : product
                ),
            };

        // case actionTypes.OPEN_EDIT_POPUP:
        //     return {
        //         ...state,
        //         products: state.products.map((product) =>
        //             product.id === action.payload.productId
        //                 ? { ...product, editPopupOpen: true }
        //                 : product
        //         ),
        //     };

        // case actionTypes.CLOSE_EDIT_POPUP:
        //     return {
        //         ...state,
        //         products: state.products.map((product) =>
        //             product.editPopupOpen ? { ...product, editPopupOpen: false } : product
        //         ),
        //     };

        // case actionTypes.UPDATE_PRODUCT:
        //     return {
        //         ...state,
        //         products: state.products.map((product) =>
        //             product.id === action.payload.productId
        //                 ? {
        //                     ...product,
        //                     price: action.payload.price,
        //                     quantity: action.payload.quantity,
        //                     status: `Updated - ${action.payload.reason}`,
        //                     editPopupOpen: false,
        //                 }
        //                 : product
        //         ),
        //     };

        default:
            return state;
    }
};

export default reducer;
