export const addToCart = (item: object) => {
    return {
        type: 'ADD_TO_CART',
        payload: item
    }
}

export const deleteFromCart = (item: number) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: item
    }
}
export const changeQty = (item: object) => {
    return {
        type: 'CHANGE_QTY',
        payload: item
    }
}
export const emptyCart = () => {
    return {
        type: 'EMPTY_CART'
    }
}
export const placeOrder = (item: object) => {
    return {
        type: 'PLACE_ORDER',
        payload: item
    }
}
export const clearOrder = () => {
    return {
        type: 'CLEAR_ORDER'
    }
}

