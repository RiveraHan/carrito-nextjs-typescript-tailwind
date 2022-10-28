import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useCar from '../hooks/useCar'
useCar

export default function Header() {

    const router = useRouter()

    const { amount } = useCar()

    
  return (
    <header className='bg-rose-900 py-12 bg-center'>
        <div className='container relative'>
            <nav className='flex justify-between'>
                <Link className='ml-12 text-white uppercase font-bold text-2xl' href={'/'}>
                    Products
                </Link>
                <Link className='mr-12' href={'/shoppingCar'}>
                    <Image src="/img/carrito.png" width={40} height={55} alt='image shopping' />

                </Link>
            </nav>
            {router.pathname === '/' && amount > 0 ?
                <div>
                    <p className=' p-[2px] bg-yellow-500 rounded-full text-xl text-white font-bold absolute top-[-1rem] right-[2.5rem]'>{amount}</p>
                </div> 
                : null
            }
        </div>
    </header>
  )
}
