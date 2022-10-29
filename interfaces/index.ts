export interface IProduct {
    id: number,
    title: string,
    price: {
        currencyCode: string,
        amount: string
    },
    imageUrl: string
}
export interface ICarProduct {
    id: number,
    title: string,
    cantidad: number,
    price: {
        currencyCode: string,
        amount: string
    },
    imageUrl: string
}
export interface ICarContextProps {
    car: ICarProduct[],
    getAmount: () => number,
    getTotal: () => number,
    addCar: (product: ICarProduct) => void,
    productDelete: (id: number) => void,
    amountUpdated: (product: ICarProduct) => void
}