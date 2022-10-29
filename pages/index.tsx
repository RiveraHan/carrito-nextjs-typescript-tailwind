import Layout from '../components/layout'
import Product from '../components/product'
import { IProduct } from '../interfaces'
import data from '../products.json'

const products: IProduct[] = data.products

export default function Home() {
  return (
    <>
        <Layout 
          title={'Inicio'}
          description={'Shopping'}
          >  
          <main className='container mr-auto ml-auto w-m w-11/12'>
              <h1 className='font-black text-4xl text-center mt-20 mb-20'>Our Collection</h1>
              <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-16'>
                  {products?.map((product: IProduct) => (
                    <Product
                      key={product.id}
                      product={product}
                    />
                    ))}
              </div>
          </main>

        </Layout>
    </>
  )
}
