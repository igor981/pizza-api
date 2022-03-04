import axios from "axios";

const url = 'https://private-anon-56bfbf9706-pizzaapp.apiary-mock.com/restaurants/'
const orderUrl = 'https://private-anon-56bfbf9706-pizzaapp.apiary-mock.com/orders/'


export const getAllRestos = async () => {
    try {
        const res = await axios.get(url)
        return res.data
    } catch (error) {
        return error
    }
}

export const getRestoById = async (id: number) => {
    try {
        const res = await axios.get('https://private-anon-0c47db5d78-pizzaapp.apiary-mock.com/restaurants/' + id)
        return res.data
    } catch (error) {
        return error
    }
}

export const getRestoMenu = async (id: number) => {
    try {
        const res = await axios.get(`https://private-anon-56bfbf9706-pizzaapp.apiary-mock.com/restaurants/${id}/menu?category=Pizza&orderBy=rank`)
        return res.data
    } catch (error) {
        return error
    }
}

export const placeOrder = async (cart: string) => {
    try {
        const res = await axios.post('https://private-anon-3b7493944a-pizzaapp.apiary-mock.com/orders/', cart)
        return res
    } catch (error) {
        return error
    }
}

export const readOrder = async (id: number) => {
    try {
        const res = await axios.post(orderUrl + id)
        return res;
    } catch (error) {
        return error;
    }
}