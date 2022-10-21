import router from "../router"

export const seeProduct = (id:string, category:string)=>{
    router.push({
        name:'product',
        params:{
            id:id
        },
        query:{
            category
        }
    })
}