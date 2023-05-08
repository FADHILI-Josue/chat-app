"use client"
import { FC, ReactNode } from 'react'
import { IconType } from 'react-icons'

interface AuthSocialButtonProps {
  icon:IconType,
  onClick?: ()=>void,
  children: ReactNode
}

const AuthSocialButton: FC<AuthSocialButtonProps> = ({icon:Icon, onClick, children}) => {
  return <button type='button' onClick={onClick} className='inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0'>
    <Icon/>
    {children}
  </button>
}

export default AuthSocialButton