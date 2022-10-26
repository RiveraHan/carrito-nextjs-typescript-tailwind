import Link from 'next/link'
import Image from 'next/image'

export default function header() {
  return (
    <header className='bg-rose-900 py-12 bg-center bg-cover'>
        <div className='container'>
            <nav className='md:flex md:justify-between'>
                <Link className='md:ml-12 text-white uppercase font-bold text-2xl' href={'/'}>
                    Products
                </Link>
                <Link href={'/shopping'}>
                    <Image src="/img/carrito.png" width={30} height={25} alt='image shopping' />

                </Link>
            </nav>
        </div>
    </header>
  )
}
