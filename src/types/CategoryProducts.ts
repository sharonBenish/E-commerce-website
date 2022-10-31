import Content from "./Content"
import ShopLinks from "./ShopLinks"
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
            previewImageUrls:Image[],
            cart:ShopLinks,
            docId:string
}

export default CategoryProducts

interface Image{
    mobile:string,
    tablet:string,
    desktop:string
}