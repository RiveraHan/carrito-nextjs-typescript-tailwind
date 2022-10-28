import { useState, createContext } from "react";

const CarContext = createContext()

const CarProvider = ({children}) => {

    const [car, setCar] = useState([]) 

    const addCar = product => {
        // Comprobar si la guitarra ya esta en el carrito...
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
            localStorage.setItem('car', JSON.stringify( car ));
        }
    }
    
    const productDelete = id => {
        const carUpdaded = car.filter( product => product.id != id)
        setCar(carUpdaded)
        window.localStorage.setItem('car', JSON.stringify( car ));
    }
    
    const amountUpdated = product => {
      const carUpdaded = car.map( productState => {
        if(productState.id === product.id ) {
          productState.cantidad = parseInt( product.cantidad )
        } 
        return productState
      })
      setCar(carUpdaded)
      window.localStorage.setItem('car', JSON.stringify( car ));
    }

    return(
        <CarContext.Provider
            value={{
                car,
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