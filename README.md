# Umain Pizza app

A pizza ordering applicationn where you can fetch nearby pizza restaurants and add products to cart, change quantity of products, check price and order.


## Documentation

This is a regular react-app so in order to start it, use npm start.

### Redux
This app is built with redux as a state-management. The application saves the states in the local storage so on-refresh, you still have everything there.


#### Reducers

The app has two reducers, one for the cart and one for the menu.
Cart:
This reducer handles all the cart actions. You can add, remove and update quantity with this reducer. 

Resto reducer:
This reducer only has one action and that is to add the menu of the restaurant where you have added products from.
This state is used to display the product item information in the cart list since cart items object only consists of id and quantity.



## Structure
I structured my src folder with four folders. Components, pages, redux and service:

### Components
Smaller component files that renders onto specific pages to avoid clutter. Here I have the navbar for navigation, an order that shows if there is an active order. CartItem that gets rendered when I map through each item of a cart to display it in a list
and Restauranttab for each restaurant that gets displayed in 
/restaurants (All available restaurants)

### Redux
This is where all the redux related files are stored.

### Service
In this service folder is where I keep my pizza api file where I have all my API related functions. The functions consist of get All restaurants, get one restaurant,  place order, read order.

### Pages
In the pages folder I keep all my individual pages files. The folder consists of Cart, Home, Restaurants, Restaurant, Cart.

##### Home 
Endpoint /

Simple welcoming page with a button that takes to the the all restaurants page
##### Restaurants 
Endpoint: /restaurants/

In restaurants I fetch all the restaurants from the Pizza api. Data from the api is an array of Restaurant object that consists of restaurant name, the address and the geolocation. 

I map through each item, compare the users geolocation with the items and add a new property to the item called distance where I store the distance between the user and the restaurant in km format.

I then sort the array by distance, closest on top and render it on the page. The restaurants are displayed in a column so furthest left is the nearest. I also render the distance on the html.


##### Restaurant
Endpoint: /restaurant/:id

If the user clicks on any of the restaurants on the previos page or types an id in the url you get navigated to the Restaurant page for that specific restaurant.The app calls the API once again, giving it the ID in the post request. The response is an object with the id of the restaurant and an array of products.
I render each item in a list with an add button that when clicked dispatches an event with the product in its payload and adds it the the cartitems in the cart reducer. Clicking it several times adds +1 to the quantity.

The app keep the restaurant data to display info about that restaurant at the top of the div.


##### Cart

Endpoint: /cart

This page is built similliarly to the Restaurant page.
It uses a redux store for state managment. If there are any items in the cart. If the cart is empty, you get a message saying that you have an empty cart, but if not the app maps the cartItems array and displays a list of each individual product, you can also set the quantity of how many products that you want. The red X in a square button beside it removes the item.

The total price is dynamic and gets changed if the quantity changes.

At the bottom there is an order and an empty cart button. The order button takes the entire cart object, sends it to the API in a post request and gets back an order confirmation. If the confirmation gets through, it gets added to the cart state and empties all of the items in the cart. The order button in the navbar also gets rendered where you can check up on that order.

Empty the cart button just clears all the items from the cart store. 


##### Order button
When there is an order in the state, the order button gets rendered on the navbar. When clicked, a bigger div slides down and displays set of information about the order such as the status, time of arrival, price, time of order and order id.

There is also a remove order button that removes the order from the state.