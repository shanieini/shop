import { shopService } from '../../services/shop.service.js'

export function loadProducts() {
    return async dispatch => {
        try {
            const products = await shopService.query()
            dispatch({ type: 'SET_PRODUCTS', products })
        } catch (err) {
            console.log(err)
        }
    }
}

export function removeProduct(productId) {
    return async dispatch => {
        try {
            await shopService.remove(productId)
            dispatch({ type: 'REMOVE_PRODUCT', productId })
        } catch (err) {
            console.log(err)
        }
    }
}

export function saveProduct(product) {
    return async dispatch => {
        const actionType = (product._id) ? 'UPDATE_PRODUCT' : 'ADD_PRODUCT'
        try {
            const savedProduct = await shopService.save(product)
            dispatch({ type: actionType, product: savedProduct })
        } catch (err) {
            console.log(err)
        }
    }
}

