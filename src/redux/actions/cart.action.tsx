export const addToCart = (item: object) => {
    return {
        type: 'ADD_TO_CART',
        payload: item
    }
}

