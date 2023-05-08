"use client"
import Button from '@/app/components/Button';
import Input from '@/app/components/input/Input';
import {BsGithub} from 'react-icons/bs'
import { type } from 'os';
import { FC, useCallback, useState } from 'react'
import {SubmitHandler,useForm, FieldValues} from 'react-hook-form'
import AuthSocialButton from './AuthSocialButton';

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
            {variant === 'REGISTER'&& <Input id='name' label='Name' register={register} errors={errors}/>}
            <Input id='email' label='Email' type='email' register={register} errors={errors}/>
            <Input id='password' label='Password' type='password' register={register} errors={errors}/>
        <Input id='email' label='Email' register={register} errors={errors}/>
        </form>
        <div className="mt-4">
            <Button type='submit' disabled={loading} fullWidth className='hover:scale-[1.03] active:scale-[0.98] bg-gradient-to-tr from-blue-500 to-rose-500'>
                {variant === 'LOGIN'? 'Sign in':'Register'}
            </Button>
        </div>
        <div className="mt-6">
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"/>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className=' bg-white px-2 text-gray-500'>Or continue with</span>
                </div>
            </div>
            <div className="mt-6 flex gap-2">
                <AuthSocialButton icon={BsGithub}>hello</AuthSocialButton>
            </div>
        </div>
    </div>
  </div>
}

export default Authform