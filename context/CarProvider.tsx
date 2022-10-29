import { useState, useEffect, createContext } from "react";
import { ReactNode } from "react";
import { ProductType } from '../interfaces'

type Props = {
    children?: ReactNode
  }

  const CarContext = createContext({})

  const CarProvider = ({children}: Props) => {

      
    const [car, setCar] = useState<ProductType[]>([]) 

    const [amount, setAmount] = useState<number>(0)

    const [total, setTotal] = useState<number>(0)

    useEffect(() => {
        if(car && car.length > 0) {
            
            const allTotalProduct: number = car.reduce((total: number, product: ProductType) => total + product.cantidad, 0 )
            setAmount(allTotalProduct)

        }
        const allTotal: number = car.reduce((total: number, product: ProductType) => total + +product.price.amount * product.cantidad, 0 )
        setTotal(allTotal)
    }, [car])

    const addCar = (product: ProductType) => {
        // Comprobar si el producto ya esta en el carrito...
        if(car.some( (productState: ProductType) =>  productState.id === product.id )) {
            // Iterar para actualizar la cantidad
            const carUpdaded: ProductType[] = car.map( (productState: ProductType) =>  productState);
            // Se asigna al array
            setCar([...carUpdaded]);
        } else {
            // En caso de que el articulo no exista, es nuevo y se agrega
            setCar([...car, product]);
        }
    }
    
    const productDelete = (id: number) => {
        const carUpdaded = car.filter( (product: ProductType) => product.id != id)
        setCar(carUpdaded)
        if(carUpdaded.length < 1) {
            setAmount(0)
        }
    }
    
    const amountUpdated = (product: ProductType) => {
      const carUpdaded: ProductType[] = car.map( (productState: ProductType) => {
        if(productState.id === product.id ) {
          productState.cantidad = product.cantidad
        } 
        return productState
      })
      setCar(carUpdaded)
    }

    return(
        <CarContext.Provider
            value={{
                car,
                amount,
                total,
                addCar,
                productDelete,
                amountUpdated
            }}
        >

            {children}
        </CarContext.Provider>
    )
}

export {
    CarProvider
}

export default CarContext;