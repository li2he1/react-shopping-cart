import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import greyTshirt from '../images/greytshirt.jpg';
import greyHoddie from '../images/greyhoddie.jpg';
import blackTshirt from '../images/blacktshirt.jpg';
import blackHoddie from '../images/blackhoddie.jpg';
import { productQuantity, clearProduct } from '../actions/productQuantity';
import { Link } from 'react-router-dom';


function Cart({basketProps,productQuantity, clearProduct}) {
    // console.log(basketProps);
    let productsInCart = [];

    Object.keys(basketProps.products).forEach( function(item) {
        // console.log("basketProps");
        // console.log(basketProps);
        if(basketProps.products[item].inCart) {
            productsInCart.push(basketProps.products[item])
        }
        // console.log(productsInCart);
    });

    const productImages = (product) => {
        if( product.tagName === 'greyTshirt') {
            return greyTshirt;
        } else if(product.tagName === 'greyHoddie') {
            return greyHoddie;
        } else if(product.tagName === 'blackTshirt') {
            return blackTshirt;
        } else if(product.tagName === 'blackHoddie') {
            return blackHoddie;
        }
    }

    productsInCart = productsInCart.map( (product, index) => {
        console.log("My product is");
        console.log(product);
        return (
            <Fragment key={index}>
            
                <div className="product"><ion-icon className="delete-title" onClick={() => clearProduct(product.tagName)} name="close-circle"></ion-icon><img className="product-title" src={productImages(product)} />
                    <span className="discount">{product.discount*100}%</span>
                </div>
                <div className="price sm-hide">${product.price},00</div>
                <div className="quantity">
                     <ion-icon onClick={() => productQuantity('decrease', product.tagName)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
                        <span>{product.numbers}</span>
                    <ion-icon onClick={() => productQuantity('increase', product.tagName)} className="increase" name="arrow-forward-circle-outline"></ion-icon>   
                </div>
                <div className="inventory">{product.totalNumber}</div>
                <div className="total">${(product.numbers * product.price*product.discount).toFixed(2)}</div>
            </Fragment>
        )
    });
    return (
        <div className="container-products">
            <div className="product-header">
                <h5 className="delete-title"></h5>
                <h5 className="product-title">PRODUCT</h5>
                <h5 className="discount">DISCOUNT</h5>
                <h5 className="price sm-hide">PRICE</h5>
                <h5 className="quantity">QUANTITY</h5>
                <h5 className="inventory">INVENTORY</h5>
                <h5 className="total">TOTAL</h5>
            </div>
            <div className="products">
                { productsInCart }
            </div>
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">Basket Total</h4>
                <h4 className="basketTotal">{basketProps.cartCost.toFixed(2)}</h4>
            </div>

            <div className="CartDecision">
                <button className="continue"><Link to="/">Continue</Link></button>
                <div className="gap"></div>
                <button className="checkout">Checkout</button>               
            </div>
           


        </div>
    )
}
const mapStateToProps = state => ({
    basketProps: state.basketState
});
export default connect(mapStateToProps, { productQuantity, clearProduct} )(Cart);
