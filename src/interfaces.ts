export interface GeoLocation {
    latitude: number
    longitude: number
}

export interface Restaurant {
    id: number,
    name: string,
    address1: string,
    address2: string,
    latitude: number,
    longitude: number
}
export interface MenuItem {
    id: number,
    category: string,
    name: string,
    topping: [string],
    price: number,
    rank: number
}

export interface Order {
    orderId: number,
    totalPrice: number,
    orderedAt: Date,
    estimatedDelivery: Date,
    status: string,
    cart: [Object],
    restuarantId: number

}

export interface Cart {
    cartItems: [object],
    restuarantId: number
}