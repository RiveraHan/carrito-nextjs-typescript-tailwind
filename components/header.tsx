import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function header({car}) {

    // const [amount, setAmount] = useState(0)
    // useEffect(() => {
    //     const allTotal = car.reduce((t, product) => t + +product.price.amount * product.cantidad, 0 )
    //     setAmount(allTotal)
    // }, [car])
    // console.log(amount,'cantidad desde carrito')
  return (
    <header className='bg-rose-900 py-12 bg-center bg-cover'>
        <div className='container'>
            <nav className='md:flex md:justify-between'>
                <Link className='md:ml-12 text-white uppercase font-bold text-2xl' href={'/'}>
                    Products
                </Link>
                <Link href={'/shoppingCar'}>
                    
                    <Image src="/img/carrito.png" width={30} height={25} alt='image shopping' />

                </Link>
            </nav>
        </div>
    </header>
  )
}
