import { defineStore } from 'pinia'
import CartItem from '../types/CartItem'

export const useStore = defineStore('main', {
    state: ()=>({
        cart:[] as CartItem[]
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
        }
    },
  })
