"use client"
import { type } from 'os';
import { FC, useCallback, useState } from 'react'
import {SubmitHandler,useForm, FieldValues} from 'react-hook-form'

interface AuthformProps {
  
}

type variant = "LOGIN" | 'REGISTER'

const Authform: FC<AuthformProps> = ({}) => {
    const [variant, setVariant] = useState<variant>('LOGIN');
    const [loading, setLoading] = useState<boolean>(false);
    const {register,handleSubmit, formState:{errors}}= useForm<FieldValues>({
        defaultValues:{
            name: '',
            email: "",
            password:''
        }
    })

    const onSubmit: SubmitHandler<FieldValues>=(data)=>{
        setLoading(true);

        if (variant === 'REGISTER') {
            //axios register
        }
        if (variant === 'LOGIN') {
            //nextauth signin
        }
    }

    const socialAction = (action:string)=>{
        setLoading(true)

        //next auth social singn in
    }
    const toogleVariant = useCallback(()=>{
        if (variant === "LOGIN") {
            setVariant('REGISTER')
        }else{
            setVariant('LOGIN')
        }
    },[variant])
  return <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
    <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className=' space-y-6' onSubmit={handleSubmit(onSubmit)}>

        </form>
    </div>
  </div>
}

export default Authform