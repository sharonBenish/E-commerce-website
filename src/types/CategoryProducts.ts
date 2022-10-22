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
            category:string,
            features:string,
            content:Content[],
            previewImageUrls:Image[]
}

export default CategoryProducts

interface Image{
    mobile:string,
    tablet:string,
    desktop:string
}