import Layout from '../components/layout'
import Product from '../components/product'
import data from '../products.json'

const products = data.products

export default function Home({car, addCar, amountUpdate, productDelete}) {
  return (
    <>
      <Layout 
        title={'Inicio'}
        description={'Shopping'}
        car={car}
      >  
        <main className='container m-12 mr-auto ml-auto w-m w-11/12'>
            <h1 className='font-black text-4xl text-center mt-20 mb-20'>Our Collection</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-16'>
                {products?.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                        addCar={addCar}
                        amountUpdate={amountUpdate}
                        productDelete={productDelete}
                        car={car}
                    />
                ))}
            </div>
        </main>

      </Layout>
    </>
  )
}
