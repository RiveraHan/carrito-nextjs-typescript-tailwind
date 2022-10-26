import Layout from '../components/layout'

export default function ShoppingCar() {
  return (
    <Layout
        title='Shopping Car'>
        <main className='container m-12 mr-auto ml-auto w-m w-11/12'>
            <h1 className='font-black text-4xl text-center mt-20 mb-20'>Shopping Car</h1>
            <div className='grid items-start gap-20 md:grid-cols-[3fr_2fr] '>
                <div className='pt-12 pb-12 pl-0 pr-0'>
                    <h2>Articles</h2>
                </div>
                <aside className='bg-gray-50 p-12 rounded-2xl'>
                    <h3>Resume request</h3>
                    <p>Total: </p>
                </aside>
            </div>
        </main>
    </Layout>
  )
}
