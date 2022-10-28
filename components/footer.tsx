import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-gray-200 p-12 mt-12'>
        <div className='container'>

            <p className='text-center'>Todos los derechos reservados { new Date().getFullYear() }</p>
        </div>
    </footer>
  )
}
