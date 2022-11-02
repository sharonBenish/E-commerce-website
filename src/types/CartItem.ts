import ShopLinks from "./ShopLinks";

interface CartItem{
    slug:string,
    price:number,
    cart:ShopLinks,
    quantity:number,
    id:string
}

export default CartItem