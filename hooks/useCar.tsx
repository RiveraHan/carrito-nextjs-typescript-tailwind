import { ContextType, useContext } from 'react'
import CarContext from '../context/CarProvider'

const useCar = () => {
    return useContext(CarContext)
}

export default useCar;  