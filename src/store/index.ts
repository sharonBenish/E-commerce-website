import { defineStore } from 'pinia'
import CartItem from '../types/CartItem'
import CategoryProducts from '../types/CategoryProducts'
import { getFirestore, collection, onSnapshot, addDoc, doc, deleteDoc, serverTimestamp, updateDoc } from '@firebase/firestore'
import AccountHistory from '../types/AccountHistory'

export const useStore = defineStore('main', {
    state: ()=>({
        cart:[] as CartItem[],
        localCart:[] as CartItem[],
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
            if(this.isLoggedIn){
                const db = getFirestore();
                const docRef = collection(db, `users/${this.userId}/cart`);
                const item = this.cart.find((el)=>el.slug == data.slug);
                if (item){
                    console.log("in here");
                    console.log(item);
                    const docRef = doc(db, 'users', this.userId, 'cart', item.id);
                    const update = {
                        quantity : data.quantity,
                        id:item.id
                    }
                    updateDoc(docRef, update)
                        .then(()=>{
                            console.log("cart updated")
                        })
                }else{
                    console.log("adding")
                    addDoc(docRef, {...data})
                    .then(()=>{
                        console.log("item added")
                        console.log(this.cart)
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
                }
            } else{
                const item = this.cart.find((el)=>el.slug == data.slug);
                if (item){
                    item.quantity = data.quantity
                }else{
                    this.cart.push(data)
                }
            }
        },
        updateQuantity(data:CartItem, amount:number){
            if (this.isLoggedIn){
                const db = getFirestore();
                const docRef = doc(db, 'users', this.userId, 'cart', data.id);
                const item = this.cart.find((el)=>el.slug == data.slug);
                const update = {
                    quantity : amount 
                }
                if (item){
                    updateDoc(docRef, update)
                    .then(()=>{
                        console.log("cart updated")
                    })
                }
            } else{
                const item = this.cart.find((el)=>el.slug == data.slug);
                if (item){
                    item.quantity = amount;
                    //console.log(item)
                }
            }
        },
        removeAllItems(){
            if(this.isLoggedIn){
                const db = getFirestore();
                for (let item of this.cart){
                    const docRef = doc(db, 'users', this.userId, 'cart', item.id)
                    deleteDoc(docRef)
                    .then(()=>{
                        console.log("document deleted")
                    })
                }
            }else{
                this.cart = [];
            }
        },
        removeFromCart(data:CartItem){
            if(this.isLoggedIn){
                const db = getFirestore();
                const docRef = doc(db, 'users', this.userId, 'cart', data.id)
                deleteDoc(docRef)
                    .then(()=>{
                        console.log("document deleted")
                    })
            }else{
                const idx = this.cart.findIndex((el)=> el.slug === data.slug);
                this.cart.splice(idx,1)
            }
            
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
                    console.log("error adding to favorites")
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
            this.orderHistory = [];
            this.favorites = [];
            //this.userId="";
            //this.cart = [];
            this.isLoggedIn = true;
            if(this.cart.length > 0){
                console.log("not empty");
                for(let item of this.cart){
                    this.localCart.push(item)
                }
                console.log(this.localCart)
            }
            this.cart = [];
        },
        updateCartFromLocal(){
            for(let item of this.localCart){
                console.log(this.cart)
                if (this.cart.find(cartItem => cartItem.slug == item.slug)){
                    console.log("found");
                    return
                }else{
                    this.addToCart(item)
                }
            }
            this.localCart =[]
        },
        logOut(){
            this.isLoggedIn = false;
            this.orderHistory = [];
            this.favorites = [];
            this.userId="";
            this.cart=[]
        },
        setUser(uid:string){
            this.userId = uid
        },
        getDatabase(){
            const db = getFirestore();
            //load favorites
            const favColRef = collection(db, `users/${this.userId}/favorites`);
            onSnapshot(favColRef, (snapshot)=>{
                let likes:CategoryProducts[] = [];
                snapshot.docs.forEach((doc)=>{
                    likes.push({...doc.data(), docId: doc.id} as CategoryProducts)
                })
                this.favorites = likes
                console.log(this.favorites)
            });
            //load account history
            // const accountColRef = collection(db, `users/${this.userId}/accountHistory`);
            // onSnapshot(accountColRef, (snapshot)=>{
            //     let history:AccountHistory[] = [];
            //     snapshot.docs.forEach((doc)=>{
            //         history.push({...doc.data(), id: doc.id} as AccountHistory)
            //     })
            //     this.orderHistory = history
            //     console.log(this.orderHistory)
            // })

            //load cart
            const cartColRef = collection(db, `users/${this.userId}/cart`);
            onSnapshot(cartColRef, (snapshot)=>{
                let cartItems: CartItem[] =[];
                snapshot.docs.forEach((doc)=>{
                    cartItems.push({...doc.data(), id: doc.id} as CartItem)
                })
                this.cart = cartItems;
            })
            // if (this.localCart.length > 0){
            //     this.updateCartFromLocal()
            // }
        }
    },
  })
