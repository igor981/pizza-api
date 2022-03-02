import axios from "axios";

const url: string = 'https://private-anon-56bfbf9706-pizzaapp.apiary-mock.com/restaurants/'
const orderUrl: string = 'https://private-anon-56bfbf9706-pizzaapp.apiary-mock.com/orders/'


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

export const placeOrder = async (cart: object) => {
    try {
        const res = await axios.post(orderUrl)
        return res
    } catch (error) {
        return error
    }
}

const readOrder = async (id: number) => {
    try {
        const res = await axios.post(orderUrl + id)
        return res;
    } catch (error) {
        return error;
    }
}