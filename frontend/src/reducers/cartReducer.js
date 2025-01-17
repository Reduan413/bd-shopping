import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

function cartReducer(state={cartItems:[]}, action){
    switch(action.type){
        case CART_ADD_ITEM:
            const items = action.payload;
            const product = state.cartItems.find(x=> x.product === items.product);
            if(product){
                return {
                    cartItems: 
                    state.cartItems.map(x=>x.product=== product.product?product: x)
                };
            }
            return {cartItems: [...state.cartItems, items]};
        case CART_REMOVE_ITEM:
            return{ cartItems: state.cartItems.filter(x=>x.product!== action.payload)}
        default:
            return state
    }
    
}

export { cartReducer }