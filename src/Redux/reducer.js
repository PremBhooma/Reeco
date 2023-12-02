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

        default:
            return state;
    }
};

export default reducer;
