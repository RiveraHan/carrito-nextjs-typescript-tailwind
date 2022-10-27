import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Product({car, product, addCar}) {

    const [added, setAdded] = useState(false)

    const { id, title, price, imageUrl, url } = product
    useEffect(() =>{
        const ad = car.filter(productCar => productCar.id === id)
        // const {id} = ad
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
          <Image src={imageUrl} width={600} height={400} alt={`Imagen Product ${title}`} />
  
          <div className='p-4'>
              <h3 className='text-xl uppercase'>{title}</h3>
              <p className='text-xl m-0 font-black'>${price.amount}</p>
              {added ? <input onClick={e => handleAdd()} className='mt-8 bg-amber-500 text-white p-1 text-center uppercase text-base font-bold hover:bg-amber-600 cursor-pointer'
                  value={'Added'}
              /> : <input onClick={e => handleAdd()} className='mt-8 bg-amber-500 text-white p-1 text-center uppercase text-base font-bold hover:bg-amber-600 cursor-pointer'
              value={'Buy'}
          />}
              
          </div>
      </div>
    )
  }
