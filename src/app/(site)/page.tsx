import Image from 'next/image'
import { FC } from 'react'
import Authform from './components/Authform'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100'>
    <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center">
        <div className="flex items-center gap-0 w-fit">
        <Image alt='loggo' height={70} width={70} src='/images/logo.png' className='mx-auto w-auto' priority/>
        <span className=' font-bold text-xl'>lissenger</span>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in  to your account</h2>
    </div>
    <Authform/>
  </div>
}

export default page