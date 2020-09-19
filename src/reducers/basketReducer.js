import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from '../actions/types';

const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        greyTshirt: {
            name: "Grey Tshirt",
            tagName: 'greyTshirt',
            price: 12.00,
            numbers: 0,
            inCart: false
        },
        greyHoddie: {
            name: "Grey Hoddie",
            tagName: 'greyHoddie',
            price: 35.00,
            numbers: 0,
            inCart: false
        },
        blackTshirt: {
            name: "Black Tshirt",
            tagName: 'blackTshirt',
            price: 14.00,
            numbers: 0,
            inCart: false
        },
        blackHoddie: {
            name: "Black Hoddie",
            tagName: 'blackHoddie',
            price: 35.00,
            numbers: 0,
            inCart: false
        }
    }
}

export default (state = initialState , action) => {
    let productSelected = "";
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            productSelected = { ...state.products[action.payload]}
            
            productSelected.numbers += 1;
            productSelected.inCart = true;
            // console.log(productSelected);
            
            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
                
                
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        default:
            return state;
    }
}
