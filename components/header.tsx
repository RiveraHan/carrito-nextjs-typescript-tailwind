import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useCar from '../hooks/useCar'
useCar

export default function Header() {

    const router = useRouter()

    const { amount } = useCar()

    
  return (
    <header className=' bg-rose-900 py-10 bg-center'>
        <div className='container mr-auto ml-auto w-[90%] relative'>
            <nav className='flex justify-between'>
                <Link className='text-white uppercase font-bold text-3xl' href={'/'}>
                    Products
                </Link>
                <Link href={'/shoppingCar'}>
                    <Image src="/img/carrito.png" width={40} height={55} alt='image shopping' />

                </Link>
            </nav>
            {router.pathname === '/' && amount > 0 ?
                <div>
                    <p className=' p-[1px] bg-yellow-500 rounded-full text-xl text-white font-bold absolute top-[-1rem] right-0'>{amount}</p>
                </div> 
                : null
            }
        </div>
    </header>
  )
}
