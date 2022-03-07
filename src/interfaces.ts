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
    longitude: number,
    distance: number
}
export interface Props {
    index: number,
    classBool: string,
    item: MenuItem,
    restoId?: string,
    menu: MenuIf,
}


export interface Info {
    id: number,
    distance: number,
    name: string
}
export interface RestaurantUpdate {
    id: number,
    name: string,
    address1: string,
    address2: string,
    latitude: number,
    longitude: number,
    distance: number
}
export interface MenuItem {
    id: number,
    category: string,
    name: string,
    topping: string[],
    price: number,
    rank: number
}
export type MenuIf= MenuItem[]

export interface GeoPosition {
    coords: any
}

export interface Order {
    orderId: number,
    totalPrice: number,
    orderedAt: Date,
    estimatedDelivery: Date,
    status: string,
    cart: object[],
    restuarantId: number
}
export interface OrderProp {
    classBool: string,
    index: number,
    order: CartItemIf,
    priceCount: any 
}

export interface Cart {
    cartItems?:  Array<CartItemIf>;
    restuarantId: number
}


export interface CartItemIf {
    id: number,
    quantity: number,
    price: number
}

export interface ActionIf {
    type: string,
    payload?: any,
}


export interface RootReducerIf {
    cart: any,
    resto: any
}