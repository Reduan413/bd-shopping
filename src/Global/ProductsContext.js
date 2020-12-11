import React, {createContext, useState} from 'react'
import dslr from "../assets/dslr.jpg";
import bluetooth from "../assets/bluetooth.jpg";
import comera from "../assets/comera.jpg";
import headphone from "../assets/headphone.jpg";
import headphones from "../assets/headphones.jpg";
import iphone from "../assets/iphone.jpg";
import MenGift from "../assets/MenGift.jpg";
import MenGift1 from "../assets/MenGift1.jpg";
import MenGift2 from "../assets/MenGift2.jpg";
import microphone from "../assets/microphone.jpg";
import perfume from "../assets/perfume.jpg";
import rings from "../assets/rings.jpg";
import shoes from "../assets/shoes.jpg";
import SMW from "../assets/SMW.jpg";
import watch from "../assets/watch.jpg";
import sunglas from "../assets/sunglas.jpg";
import parfum1 from "../assets/parfum1.png";
import parfum from "../assets/parfum.png";
import sunglas1 from "../assets/sunglas1.jpg";
import perfum4 from "../assets/perfum4.jpg";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [products] = useState([
        {id: 1, name: 'DSLR Camera', price: 40, image: dslr, Status: 'hot'},
        {id: 2, name: 'Bluetooth Headphones', price: 200, image: bluetooth, Status: 'new'},
        {id: 3, name: 'DSLR Camera', price: 300, image: comera, Status: 'new'},
        {id: 4, name: 'Shoes', price: 150, image: shoes, Status: 'new'},
        {id: 5, name: 'Men Gift Perfume', price: 160, image: MenGift, Status: 'hot'},
        {id: 6, name: 'Headphones', price: 500, image: headphone, Status: 'new'},
        {id: 7, name: 'Iphone X', price: 240, image: iphone, Status: 'hot'},
        {id: 8, name: 'Rings', price: 120, image: rings, Status: 'new'},
        {id: 9, name: 'Perfume', price: 40, image: perfume, Status: 'hot'},
        {id: 10, name: 'Men Gift', price: 200, image: MenGift1, Status: 'new'},
        {id: 11, name: 'Smart Watch', price: 300, image: SMW, Status: 'new'},
        {id: 12, name: 'Headphone', price: 150, image: headphones, Status: 'new'},
        {id: 13, name: 'Microphone', price: 160, image: microphone, Status: 'hot'},
        {id: 14, name: 'Black Sunglas', price: 500, image: sunglas, Status: 'new'},
        {id: 15, name: 'Men Gift Watch', price: 240, image: MenGift2, Status: 'hot'},
        {id: 16, name: 'Man Parfume', price: 120, image: parfum1, Status: 'new'},
        {id: 17, name: 'Watch', price: 160, image: watch, Status: 'hot'},
        {id: 18, name: 'sunglas', price: 500, image: sunglas1, Status: 'new'},
        {id: 19, name: 'Parfume', price: 240, image: parfum, Status: 'hot'},
        {id: 20, name: 'Parfume', price: 120, image: perfum4, Status: 'new'},
    ])
    return(
        <ProductsContext.Provider value={{products: [...products]}}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;