import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useCar from '../hooks/useCar'

export default function Header() {

    const router = useRouter()

    const { getAmount } = useCar()

    
  return (
    <header className=' bg-rose-900 py-8 bg-center'>
        <div className='container mr-auto ml-auto w-[90%] content-center relative'>
            <nav className='flex justify-between'>
                <Link className='text-white uppercase font-bold text-3xl' href={'/'}>
                    Products
                </Link>
                <Link href={'/shoppingCar'}>
                    <Image src="/img/carrito.png" width={40} height={55} alt='image shopping' />

                </Link>
            </nav>
            {router.pathname === '/' && getAmount() > 0 ?
                <div className='inline-block'>
                    <div className='pl-2 pr-2 bg-yellow-500 rounded-full text-[1rem] text-white font-black top-[-1rem] right-[-10px] absolute'>{getAmount()}</div>
                </div> 
                : null
            }
        </div>
    </header>
  )
}
