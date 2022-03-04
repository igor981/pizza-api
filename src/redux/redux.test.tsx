import { cartReducer } from "./reducers/cartReducer";


describe('Cart reducer', () => {
  it('Has a default state', () => {
    expect(cartReducer(undefined, {type: 'undefined'})).toEqual({
      cartItems: [],
      order: {},
      restuarantId: 0,
    })
  })

  const menuItem = {
    item: {
      id: 1,
      quantity: 1,
      price: 23
    },
    restoId: 1
  }
  it('Adds an item', () => {
    expect(cartReducer(undefined, {type: 'ADD_TO_CART', payload: menuItem})).toEqual({
      cartItems: [
        {
            id: 1,
            quantity: 1,
            price: 23
          }
      ],
      order: {},
      restuarantId: 1,
    })
  })

  const existingState = {
    cartItems: [
      {
          id: 1,
          quantity: 1,
          price: 23
        }
    ],
    order: {},
    restuarantId: 1,
  }

  const item2 = {
    item: {
      id: 3,
      quantity: 1,
      price: 23
    },
    restoId: 1
  }
  

  it('Adds an item to a non empty cart', () => {
    expect(cartReducer(existingState, {type: 'ADD_TO_CART', payload: item2})).toEqual({
      cartItems: [
        {
            id: 1,
            quantity: 1,
            price: 23
          },{
            id: 3,
            quantity: 1,
            price: 23
          }
      ],
      order: {},
      restuarantId: 1,
    })
  })

  it('Adds an item that already exists', () => {
    expect(cartReducer(existingState, {type: 'ADD_TO_CART', payload: menuItem})).toEqual({
      cartItems: [
        {
            id: 1,
            quantity: 2,
            price: 23
          }
      ],
      order: {},
      restuarantId: 1,
    })
  })


  it('Removes an item', () => {
    expect(cartReducer(existingState, {type: 'REMOVE_FROM_CART', payload: 1})).toEqual({
      cartItems: [ 
      ],
      order: {},
      restuarantId: 1,
    })
  })


  it('Clears entire cart', () => {
    expect(cartReducer(existingState, {type: 'EMPTY_CART'})).toEqual({
      cartItems: [ 
      ],
      order: {},
      restuarantId: 1,
    })
  })
  const order = {
    orderId:1234412,
    totalPrice:168,
    orderedAt:"2015-04-09T17:30:47.556Z",
    esitmatedDelivery:"2015-04-09T17:45:47.556Z",
    status:"ordered"
  }

  it('Places an order', () => {
    expect(cartReducer(undefined, {type: 'PLACE_ORDER', payload: order})).toEqual({
      cartItems: [ 
      ],
      order: {
        orderId:1234412,
        totalPrice:168,
        orderedAt:"2015-04-09T17:30:47.556Z",
        esitmatedDelivery:"2015-04-09T17:45:47.556Z",
        status:"ordered"
      },
      restuarantId: 0,
    })
  })

  const stateWithOrder = {
    cartItems: [
      {
          id: 1,
          quantity: 1,
          price: 23
        }
    ],
    order: {
      orderId:1234412,
      totalPrice:168,
      orderedAt:"2015-04-09T17:30:47.556Z",
      esitmatedDelivery:"2015-04-09T17:45:47.556Z",
      status:"ordered"
    },
    restuarantId: 1,
  }

  it('Clears Order', () => {
    expect(
      cartReducer(stateWithOrder, { type: "CLEAR_ORDER", payload: order })
    ).toEqual({
      cartItems: [
        {
          id: 1,
          quantity: 1,
          price: 23,
        },
      ],
      order: {},
      restuarantId: 1,
    });
  })

})