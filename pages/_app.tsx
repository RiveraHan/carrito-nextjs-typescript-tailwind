import '../styles/globals.css'
// import type { AppProps } from 'next/app'
import { useState } from 'react'

export default function App({ Component, pageProps }) {

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

  return <Component {...pageProps} 
    car={car}
    auth={true}
    addCar={addCar}
    productDelete={productDelete}
    amountUpdate={amountUpdated}
  />
}
