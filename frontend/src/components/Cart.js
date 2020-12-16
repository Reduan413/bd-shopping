import React, { useEffect } from "react"
import { addToCart, removeFromCart } from "../actions/cartActions";
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

function Cart(props){

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();

    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
    }

    useEffect(() =>{
        if(productId){
            dispatch(addToCart(productId, qty));
        }
    }, []);

    const cheekoutHandler = () =>{
        props.history.push("/signin?redirect=shipping");
    }
    
    return <div className="cartcontainer">
            <div className="cart">
                <div className="cart-list">
                    <ul className="cart-list-container">
                        <li>
                            <h3>
                                Shopping Cart
                            </h3>
                            <div>
                                price
                            </div>
                        </li>
                        {
                            cartItems.length ===0 ?
                            <div>
                                Cart is empth
                            </div>
                            :
                            cartItems.map( items =>
                                <li>
                                    <div className="cart-image">
                                        <img src={items.image} alt="product" />
                                    </div>
                                    
                                    <div className="cart-name"> 
                                        <div className="cart-name1">
                                            <Link to={"/product/" + items.product}>
                                            {items.name}
                                            </Link>
                                        </div>
                                        <div className="cart-qty">
                                            Qty:
                                            <select value={items.qty} onChange={(e) => dispatch(addToCart(items.product, e.target.value))}>
                                                {[...Array(items.countInStock).keys()].map(x =>
                                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                )}
                                                console.log(value);
                                            </select>
                                            <button type="button" className="button1" onClick={() => removeFromCartHandler(items.product)}>
                                                Delete
                                            </button>
                                        </div>
                                        <div className="cart-price">
                                            ${items.price}
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="cart-action">
                    <h3>
                        subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)
                        :
                        $ {cartItems.reduce((a, c) => a + c.price *c.qty, 0)}
                    </h3>
                    <button  onClick={cheekoutHandler} className="button primary" disabled={cartItems.length == 0}>
                        Proceed to Checkout
                    </button>
                </div>
            </div>
    </div>
    
}

export default Cart;