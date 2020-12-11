import React, {useContext, useState} from 'react'
import {ProductsContext} from '../Global/ProductsContext'
import Banner from './Banner'


const Products = () => {
    const {products} = useContext(ProductsContext)
    return(
        <div className="container">
            <Banner/>
        <div className="products">
            {products.map((product) => (
                <div className="product" key={product.id}>
                    <div className="product-image">
                        <img src={product.image} alt="not found"/>
                    </div>
                    <div className="product-details">
                        <div className="product-name">
                            {product.name}
                        </div>
                        <div className="product-price">
                            ${product.price}.00
                        </div>
                    </div>
                    <div className="add-to-cart">add to cart</div>
                    {product.Status === 'hot' ? <div className="hot">Hot</div> : ''}
                    {product.Status === 'new' ? <div className="new">New</div> : ''}
                </div>
            ))}
        </div>
        </div>
    )
}

export default Products;