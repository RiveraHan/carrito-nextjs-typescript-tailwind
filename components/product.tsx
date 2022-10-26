import Image from 'next/image'
import Link from 'next/link'

export default function Product({product}) {
    const { title, price, imageUrl, url } = product
  
    return (
      <div className='grid grid-cols-[2fr_3fr] gap-4 content-center max-w-6xl mt-0 mb-0 mr-auto ml-auto'>
          <Image src={imageUrl} width={400} height={200} alt={`Imagen Product ${title}`} />
  
          <div className='p-4'>
              <h3 className='text-xl uppercase'>{title}</h3>
              <p className='text-xl m-0 font-black'>${price.amount}</p>
              <Link className='mt-8 block bg-amber-500 text-white p-1 text-center uppercase text-base font-bold hover:bg-amber-600' href={`/products/${url}`}>
                  Comprar
              </Link>
          </div>
      </div>
    )
  }
