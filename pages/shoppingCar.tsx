import Layout from '../components/layout'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function ShoppingCar({car, amountUpdate}) {
    const [amount, setAmount] = useState(1)
    const [total, setTotal] = useState(0)
    car.cantidad = amount;

    useEffect(() => {
        const allTotal = car.reduce((t, product) => t + +product.price.amount * product.cantidad, 0 )
        console.log(car, allTotal, amount)
        setTotal(allTotal)
    }, [car, amount])

  return (
    <Layout
        title='Shopping Car'>
        <main className='container m-12 mr-auto ml-auto w-m w-11/12'>
            <h1 className='font-black text-4xl text-center mt-20 mb-20'>Shopping Car</h1>
            <div className='grid items-start gap-20 md:grid-cols-[3fr_2fr] '>
                <div className='pt-12 pb-12 pl-0 pr-0'>
                    <h2>Articles</h2>
                    {car.length === 0 ? 'Car empty' : (
                        car.map(product => (
                            <div key={product.id} className='grid grid-cols-[1fr_3fr] gap-16 items-center py-12 px-0'>
                                <div>
                                    <Image width={250} height={480} src={product.imageUrl} alt={product.title}></Image>
                                </div>
                                <div>
                                    <p className='font-bold text-2xl'>{product.title}</p>
                                    <p className='mt-5 font-bold'><span>{product.price.amount}</span></p>
                                    <p className='font-bold'> Cantidad: 
                                    <span 
                                    className='cursor-pointer font-black text-4xl pr-2 text-yellow-600' 
                                    onClick={e => amountUpdate({
                                        id: product.id,
                                        cantidad: product.cantidad - 1
                                        })}>-</span> {product.cantidad}<span className='cursor-pointer font-black text-2xl pl-2 text-yellow-600' onClick={e => amountUpdate({
                                            id: product.id,
                                            cantidad: product.cantidad + 1
                                            })}>+</span></p>

                                    <p>SubTotal: $ <span className='font-bold'>{(product.price.amount * product.cantidad)}</span></p>
                                </div>
                            </div>
                        ))
                    ) }
                </div>
                <aside className='bg-gray-50 p-12 rounded-2xl'>
                    <h3>Resume request</h3>
                    <p>Total: $ {total} </p>
                </aside>
            </div>
        </main>
    </Layout>
  )
}
