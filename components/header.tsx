import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useCar from '../hooks/useCar'
useCar

export default function Header() {

    const router = useRouter()

    const { amount } = useCar()

    
  return (
    <header className='bg-rose-900 py-12 bg-center'>
        <div className='container'>
            <nav className='flex justify-between'>
                <Link className='ml-12 text-white uppercase font-bold text-2xl' href={'/'}>
                    Products
                </Link>
                <Link className='mr-12' href={'/shoppingCar'}>
                    <Image src="/img/carrito.png" width={30} height={25} alt='image shopping' />

                </Link>
            </nav>
            {router.pathname === '/' && amount > 0 ?
                <div className='relative'>
                    <div className='pt-1 pb-1 pl-1 pr-1 bg-yellow-500 text-center rounded-full text-white font-bold absolute top-[-4.3rem] right-[3.3rem]'>{amount}</div>
                </div> 
                : null
            }
        </div>
    </header>
  )
}
