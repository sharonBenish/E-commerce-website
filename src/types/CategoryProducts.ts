import Content from "./Content"
interface CategoryProducts{
            productName:string,
            imageUrl:{
                desktop:string,
                tablet:string,
                mobile:string,
            },
            productDescription:string,            
            slug:string,
            price:number,
            features:string,
            content:Content[]
}

export default CategoryProducts