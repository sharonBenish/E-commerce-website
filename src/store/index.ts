import { defineStore } from 'pinia'
import CartItem from '../types/CartItem'
import CategoryProducts from '../types/CategoryProducts'
import { getFirestore, collection, onSnapshot, addDoc, doc, deleteDoc, serverTimestamp } from '@firebase/firestore'
import AccountHistory from '../types/AccountHistory'

export const useStore = defineStore('main', {
    state: ()=>({
        cart:[] as CartItem[],
        orderHistory:[] as AccountHistory[],
        favorites:[] as CategoryProducts[],
        isLoggedIn:false as boolean,
        userId:"" as string
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
            this.cart = [];
            /*
            const db = getFirestore();
            const docRef = doc(db, 'users', this.user.uid, 'invoices', docId);
            deleteDoc(docRef)
                .then(()=>{
                    console.log("invoice deleted")
                })
            */
        },
        removeFromCart(data:CartItem){
            const idx = this.cart.findIndex((el)=> el.slug === data.slug);
            this.cart.splice(idx,1)
        },
        addToHistory(data:CartItem[]){
            const db = getFirestore();
            const docRef = collection(db, `users/${this.userId}/accountHistory`);
            addDoc(docRef, {items:[...data], date:serverTimestamp()})
                .then(()=>{
                    console.log("added to account history")
                })
                .catch((err)=>{
                    console.log(err)
                })
        },
        addToFavorites(data:CategoryProducts){
            //this.favorites.unshift(data);
            const db = getFirestore();
            const docRef = collection(db, `users/${this.userId}/favorites`);
            addDoc(docRef, {...data})
                .then(()=>{
                    console.log("document added")
                    console.log(this.favorites)
                })
                .catch((err)=>{
                    console.log(err)
                })
        },
        removeFromFavorites(data:CategoryProducts){
            // const idx = this.favorites.findIndex((el)=> el.slug === data.slug);
            // this.favorites.splice(idx,1)
            const db = getFirestore();
            const docRef = doc(db, 'users', this.userId, 'favorites', data.docId)
            deleteDoc(docRef)
                .then(()=>{
                    console.log("document deleted")
                })
        },
        removeAllFavorites(){
            // this.favorites = []
            const db = getFirestore();
            for (let favorite of this.favorites){
                const docRef = doc(db, 'users', this.userId, 'favorites', favorite.docId)
                deleteDoc(docRef)
                .then(()=>{
                    console.log("document deleted")
                })
            }
        },
        logIn(){
            this.isLoggedIn = true
        },
        logOut(){
            this.isLoggedIn = false
        },
        setUser(uid:string){
            this.userId = uid
        },
        getDatabase(){
            const db = getFirestore();
            const favColRef = collection(db, `users/${this.userId}/favorites`);
            onSnapshot(favColRef, (snapshot)=>{
                let likes:CategoryProducts[] = [];
                snapshot.docs.forEach((doc)=>{
                    likes.push({...doc.data(), docId: doc.id} as CategoryProducts)
                })
                this.favorites = likes
                console.log(this.favorites)
            });
            const accountColRef = collection(db, `users/${this.userId}/accountHistory`);
            onSnapshot(accountColRef, (snapshot)=>{
                let history:AccountHistory[] = [];
                snapshot.docs.forEach((doc)=>{
                    history.push({...doc.data(), id: doc.id} as AccountHistory)
                })
                this.orderHistory = history
                console.log(this.orderHistory)
            })
        }
    },
  })
