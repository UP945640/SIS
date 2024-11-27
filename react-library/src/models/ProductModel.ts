// class ProductModel {
//     productId: number;
//     productName: string;
//     productDescription: string;
//     productPrice: number;
//     categoryName: string;
//     isSpecial: boolean;

//     constructor (productId: number, productName: string, productDescription: string,
//         productPrice: number, categoryName: string, isSpecial: boolean) {
//             this.productId = productId;
//             this.productName = productName;
//             this.productDescription = productDescription;
//             this.productPrice = productPrice;
//             this.categoryName = categoryName;
//             this.isSpecial = isSpecial;

//     }
// }

export default interface ProductModel {
    productId: number;
    productName: string;
    productDescription: string;
    productPrice: number;
    categoryName: string;
    isSpecial: boolean;
}