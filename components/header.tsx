import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Header() {

    const [amount, setAmount] = useState(0)
    // useEffect(() => {
    //     if(car && car.length > 0) {
            
    //         let contador;
    //         const allTotal = car.reduce((t, product) => t + product.cantidad, 0 )
    //         // car.map(product => console.log(product.cantidad))
    //         console.log(allTotal,'cantidad desde carrito')
    //         setAmount(allTotal)
    //     }
    // }, [car])
    // console.log(car)
  return (
    <header className='bg-rose-900 py-12 bg-center bg-cover'>
        <div className='container'>
            <nav className='flex justify-between'>
                <Link className='ml-12 text-white uppercase font-bold text-2xl' href={'/'}>
                    Products
                </Link>
                <Link className='mr-12' href={'/shoppingCar'}>
                    
                    <Image src="/img/carrito.png" width={30} height={25} alt='image shopping' />

                </Link>
            </nav>
        </div>
    </header>
  )
}
