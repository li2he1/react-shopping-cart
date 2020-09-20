import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from '../actions/types';

const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        greyTshirt: {
            name: "Grey Tshirt",
            tagName: 'greyTshirt',
            price: 12.00,
            discount: 0.4,
            totalNumber:5,
            numbers: 0,
            inCart: false
        },
        greyHoddie: {
            name: "Grey Hoddie",
            tagName: 'greyHoddie',
            price: 35.00,
            discount: 0.3,
            totalNumber:4,
            numbers: 0,
            inCart: false
        },
        blackTshirt: {
            name: "Black Tshirt",
            tagName: 'blackTshirt',
            price: 14.00,
            discount: 0.2,
            totalNumber:6,
            numbers: 0,
            inCart: false
        },
        blackHoddie: {
            name: "Black Hoddie",
            tagName: 'blackHoddie',
            price: 35.00,
            discount: 0.1,
            totalNumber:3,
            numbers: 0,
            inCart: false
        }
    }
}

export default (state = initialState , action) => {
    let productSelected = "";
    let newCartCost = 0;
    let newBasketNumbers = 0;
    console.log(state.products);
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            productSelected = { ...state.products[action.payload]}
            
            if( productSelected.numbers === productSelected.totalNumber) {
                productSelected.numbers = productSelected.totalNumber;
                newCartCost = state.cartCost
                newBasketNumbers = state.basketNumbers
            } else {
                productSelected.numbers += 1;
                newCartCost = state.cartCost + (state.products[action.payload].price)*(state.products[action.payload].discount)
                newBasketNumbers = state.basketNumbers + 1
            }         
            productSelected.inCart = true;
            // console.log(productSelected);
            
            return {
                ...state,
                basketNumbers: newBasketNumbers,
                cartCost: newCartCost,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
                
                
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        case INCREASE_QUANTITY:
                                    // state.products['blackTshirt']            
            productSelected = { ...state.products[action.payload]}
            if( productSelected.numbers === productSelected.totalNumber) {
                productSelected.numbers = productSelected.totalNumber;
                newCartCost = state.cartCost
                newBasketNumbers = state.basketNumbers
            } else {
                productSelected.numbers += 1;
                newCartCost = state.cartCost + (state.products[action.payload].price)*(state.products[action.payload].discount)
                newBasketNumbers = state.basketNumbers + 1
            }       
            return {
                ...state,
                basketNumbers: newBasketNumbers,
                cartCost: newCartCost,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case DECREASE_QUANTITY:
            productSelected = { ...state.products[action.payload]};
            
            if( productSelected.numbers === 0) {
                productSelected.numbers = 0;
                newCartCost = state.cartCost
                newBasketNumbers = state.basketNumbers
            } else {
                productSelected.numbers -= 1;
                newCartCost = state.cartCost - (state.products[action.payload].price)*(state.products[action.payload].discount)
                newBasketNumbers = state.basketNumbers - 1
            }
            
            return {
                ...state,
                basketNumbers: newBasketNumbers,
                cartCost: newCartCost,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case CLEAR_PRODUCT: 
            productSelected = { ...state.products[action.payload]};
            let numbersBackup = productSelected.numbers;
            productSelected.numbers = 0;
            productSelected.inCart = false;
            // console.log(productSelected);
            return {
                ...state,
                basketNumbers: state.basketNumbers - numbersBackup,
                cartCost: state.cartCost - ( numbersBackup * productSelected.price*productSelected.discount ),
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        default:
            return state;
    }
}
