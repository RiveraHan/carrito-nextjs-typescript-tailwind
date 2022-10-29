export interface ProductType {
    id: number,
    title: string,
    cantidad: number,
    price: {
        currencyCode: string,
        amount: string
    },
    imageUrl: string
}