"use client"
import { type } from 'os';
import { FC, useCallback, useState } from 'react'
import {useForm, FieldValues} from 'react-hook-form'

interface AuthformProps {
  
}

type variant = "LOGIN" | 'REGISTER'

const Authform: FC<AuthformProps> = ({}) => {
    const [variant, setVariant] = useState<variant>('LOGIN');
    const [loading, setLoading] = useState<boolean>(false);
    const {}= useForm<FieldValues>({
        defaultValues:{
            name: '',
            email: "",
            password:''
        }
    })
    const toogleVariant = useCallback(()=>{
        if (variant === "LOGIN") {
            setVariant('REGISTER')
        }else{
            setVariant('LOGIN')
        }
    },[variant])
  return <div>
    
  </div>
}

export default Authform