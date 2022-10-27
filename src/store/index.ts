import { defineStore } from 'pinia'
import CartItem from '../types/CartItem'
import CategoryProducts from '../types/CategoryProducts'

export const useStore = defineStore('main', {
    state: ()=>({
        cart:[] as CartItem[],
        favorites:[] as CategoryProducts[],
    }),
    getters:{
        getItem:(state)=>{
            return (data:CartItem)=>state.cart.find((el)=> el.slug === data.slug)
        },
        getQuantity:(state)=>{
            return (data:CartItem)=>state.cart.find((el)=> el.slug === data.slug)?.quantity
        },
        getTotal: (state)=>{
            // return state.cart.map(item => item.price).reduce((i,j)=>i+j, 0)
            const total = state.cart.map(item=>{
                                return item.price * item.quantity
                            })
                            .reduce((i,j)=> i+j, 0);
            return total
        },
        getTotalCartItems:(state)=>{
            return state.cart.map(item=>item.quantity).reduce((i,j)=>i+j, 0)
        },
        isLiked:(state)=>{
            return (data:CategoryProducts)=>state.favorites.some(el => el.slug == data.slug)
        }
    },
    actions: {
        addToCart(data:CartItem){
            const item = this.cart.find((el)=>el.slug == data.slug);
            if (item){
                item.quantity ++
            }else{
                this.cart.push(data)
            }
        },
        updateQuantity(data:CartItem, amount:number){
            const item = this.cart.find((el)=>el.slug == data.slug);
            if (item){
                item.quantity = amount;
                console.log(item)
            }
        },
        removeAllItems(){
            this.cart = []
        },
        addToFavorites(data:CategoryProducts){
            this.favorites.unshift(data)
        },
        removeFromFavorites(data:CategoryProducts){
            const idx = this.favorites.findIndex((el)=> el.slug === data.slug);
            this.favorites.splice(idx,1)
        },
        removeAllFavorites(){
            this.favorites = []
        }
    },
  })
