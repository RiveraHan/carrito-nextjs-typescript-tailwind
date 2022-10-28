import { useState, useEffect, createContext } from "react";

const CarContext = createContext()

const CarProvider = ({children}) => {

    const [car, setCar] = useState([]) 

    const [amount, setAmount] = useState(0)

    const [total, setTotal] = useState(0)

    useEffect(() => {
        if(car && car.length > 0) {
            
            const allTotalProduct = car.reduce((total, product) => total + product.cantidad, 0 )
            setAmount(allTotalProduct)

        }
        const allTotal = car.reduce((t, product) => t + +product.price.amount * product.cantidad, 0 )
        setTotal(allTotal)
    }, [car])

    const addCar = product => {
        // Comprobar si el producto ya esta en el carrito...
        if(car.some( productState =>  productState.id === product.id )) {
            // Iterar para actualizar la cantidad
            const carUpdaded = car.map( productState => {
                if( productState.id === car.id ) {
                  productState.cantidad = car.cantidad;
                } 
                return productState;
            });
            // Se asigna al array
            setCar([...carUpdaded]);
            localStorage.setItem('car', JSON.stringify( car ));
        } else {
            // En caso de que el articulo no exista, es nuevo y se agrega
            setCar([...car, product]);
        }
    }
    
    const productDelete = id => {
        const carUpdaded = car.filter( product => product.id != id)
        setCar(carUpdaded)
        console.log(carUpdaded, 'desde productDelete')
        if(carUpdaded.length < 1) {
            setAmount(0)
        }
    }
    
    const amountUpdated = product => {
      const carUpdaded = car.map( productState => {
        if(productState.id === product.id ) {
          productState.cantidad = parseInt( product.cantidad )
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