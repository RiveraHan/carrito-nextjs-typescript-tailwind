import { useState, useEffect, createContext } from "react";
import { ReactNode } from "react";
import { ICarContextProps, ICarProduct } from '../interfaces'

type Props = {
    children?: ReactNode
  }

  const CarContext = createContext<ICarContextProps>({} as ICarContextProps)

  const CarProvider = ({children}: Props) => {

      
    const [car, setCar] = useState<ICarProduct[]>([]) 

    
    useEffect(() => {
        if(car && car.length > 0) {
            getAmount()
            
            getTotal()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [car])
    
    const getAmount = (): number => car.reduce((total: number, product: ICarProduct) => total + product.cantidad, 0 )
    
    const getTotal = (): number => car.reduce((total: number, product: ICarProduct) => total + +product.price.amount * product.cantidad, 0 )
    

    const addCar = (product: ICarProduct) => {
        // Comprobar si el producto ya esta en el carrito...
        if(car.some( (productState: ICarProduct) =>  productState.id === product.id )) {
            // Iterar para actualizar la cantidad
            const carUpdaded: ICarProduct[] = car.map( (productState: ICarProduct) =>  productState);
            // Se asigna al array
            setCar([...carUpdaded]);
        } else {
            // En caso de que el articulo no exista, es nuevo y se agrega
            setCar([...car, product]);
        }
    }
    
    const productDelete = (id: number) => {
        const carUpdaded = car.filter( (product: ICarProduct) => product.id != id)
        setCar(carUpdaded)
        // if(carUpdaded.length < 1) {
        //     setAmount(0)
        // }
    }
    
    const amountUpdated = (product: ICarProduct) => {
      const carUpdaded: ICarProduct[] = car.map( (productState: ICarProduct) => {
        if(productState.id === product.id && product.cantidad >= 1 ) {
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
                getAmount,
                getTotal,
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