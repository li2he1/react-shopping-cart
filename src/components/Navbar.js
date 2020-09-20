import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';
import { Link } from 'react-router-dom';

function Navbar(props) {
    // console.log(props);
    useEffect(() => {
        getNumbers(); 
    }, []);
    return (
        <header>
            <div className="overlay">
                <nav>
                    <h2>Shop</h2>
                    <ul>
                    <li><Link to="/react-shopping-cart/">Home</Link></li>
                    <li><Link to="/react-shopping-cart/about">About</Link></li>
                    <li className="cart"><Link to="/react-shopping-cart/cart">
                        <ion-icon name="basket"></ion-icon>Cart<span>{props.basketProps.basketNumbers}</span>
                    </Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, { getNumbers })(Navbar);