import React from 'react';
import {Link} from "react-router-dom"

const Navber = () => {
    return(
        <nav>
            <ul className="left">
                <li><Link to="/">BD Express</Link></li>
            </ul>
            <ul className="right">
                <li>
                    <Link to="cart"> <span className="shoppingCart"><i class="fas fa-cart-plus"></i>
                        <span className="cardCount">0</span></span></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navber;