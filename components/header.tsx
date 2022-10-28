import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useCar from '../hooks/useCar'
useCar

export default function Header() {

    const router = useRouter()

    const { car } = useCar()

    const [amount, setAmount] = useState(0)
    useEffect(() => {
        if(car && car.length > 0) {
            
            const allTotalProduct = car.reduce((total, product) => total + product.cantidad, 0 )
            console.log(allTotalProduct,'cantidad desde carrito')
            setAmount(allTotalProduct)
        }
    }, [car])
    console.log(car)
  return (
    <header className='bg-rose-900 py-12 bg-center bg-cover'>
        <div className='container'>
            <nav className='flex justify-between'>
                <Link className='ml-12 text-white uppercase font-bold text-2xl' href={'/'}>
                    Products
                </Link>
                    {router.pathname === '/' && 
                        <div className='bg-yellow-500 text-center rounded-full text-white font-bold relative'>
                        <span className='absolute top-2'>{amount}</span>
                        </div>
                    }
                <Link className='mr-12' href={'/shoppingCar'}>
                    <Image src="/img/carrito.png" width={30} height={25} alt='image shopping' />

                </Link>
            </nav>
        </div>
    </header>
  )
}
