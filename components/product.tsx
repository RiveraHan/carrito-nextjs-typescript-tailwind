import Image from "next/image"
import { useEffect, useState } from 'react'
import useCar from "../hooks/useCar"

export default function Product({product}) {

    const { car, addCar } = useCar()

    const [added, setAdded] = useState(false)

    const { id, title, price, imageUrl } = product
    useEffect(() =>{
        const ad = car.filter(productCar => productCar.id === id)
        if(ad.length > 0) {

            setAdded(true)
        }
        console.log(ad)
    }, [car])

    const handleAdd = () => {
        const objectProduct = {
            id,
            title,
            cantidad: 1,
            price,
            imageUrl
        }
        addCar(objectProduct)
    }
  
    return (
      <div className='grid grid-cols-[2fr_3fr] gap-4 content-center max-w-6xl mt-0 mb-0 mr-auto ml-auto'>
          <Image className="object-cover h-48 w-96" src={imageUrl} width={600} height={400} alt={`Imagen Product ${title}`} />
  
          <div className='p-4'>
              <h3 className='text-xl uppercase'>{title}</h3>
              <p className='text-xl m-0 font-black'>${price.amount}</p>
              {added ? <input type={'button'} className='mt-8 bg-gray-700 text-white p-1 text-center uppercase text-base font-bold hover:bg-gray-800 w-full cursor-not-allowed'
                  value={'Aggregate'}
              /> : <input type={'button'} onClick={e => handleAdd()} className='mt-8 bg-amber-500 text-white p-1 text-center uppercase text-base font-bold hover:bg-amber-600 cursor-pointer w-full'
              value={'Buy'}
          />}
              
          </div>
      </div>
    )
  }
