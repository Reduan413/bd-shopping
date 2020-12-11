import React from 'react';

const Navber = () => {
    return(
        <nav>
            <ul className="left">
                <li><a>BD Express</a></li>
            </ul>
            <ul className="right">
                <li>
                    <a> <span className="shoppingCart"><i class="fas fa-cart-plus"></i>
                        <span className="cardCount">0</span></span></a>
                </li>
            </ul>
        </nav>
    )
}

export default Navber;