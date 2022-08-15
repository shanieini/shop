const initialState = {
    products: [],
}

export function shopReducer(state = initialState, action) {
    var products

    switch (action.type) {
        case 'SET_PRODUCTS':
            return { ...state, products: action.products }
        case 'REMOVE_PRODUCT':
            products = state.products.filter(product => product._id !== action.productId)
            return { ...state, products }
        case 'ADD_PRODUCT':
            products = [action.product, ...state.products]
            return { ...state, products }
        case 'UPDATE_PRODUCT':
            products = state.products.map(currProduct =>
                (currProduct._id === action.product._id) ? action.product : currProduct)
            return { ...state, products }
        default:
            return state
    }
}
