import { useForm } from 'react-hook-form'
import { DevTool } from "@hookform/devtools";
import React from 'react'

type IYoutubeForm = {
    username: string
    email: string
    password: string
}
export const YoutubeForm = () => {
    const [showSubmitted, setShowSubmitted] = React.useState(false)
    const form = useForm<IYoutubeForm>()
    const { register, handleSubmit, control, formState: { errors } } = form
    const submit = (data: IYoutubeForm) => {        
        setShowSubmitted(true)
        alert("Form Submitted")
    }
    return (
        <>
            <div className='formStyle'>
                {showSubmitted && <h1>Form Submitted</h1> }
                <form onSubmit={handleSubmit(submit)}>
                    <div className='inputControl'>
                        <label htmlFor='username'>Username</label>
                        <input className="username" type="text" data-test="username" id='username' {...register("username", { required: true, maxLength: 20 })} />
                        {errors.username?.type === 'required' && <span role="alert">Username is required</span>}
                    </div>
                    <div className='inputControl'>
                        <label htmlFor='email'>Email</label>
                        <input type="email" data-testid="email" id='email' {...register("email", {required: true})} />
                    </div>
                    <div className='inputControl'>
                        <label htmlFor='password'>Password</label>
                        <input type="password" data-testid="password" id='password' {...register("password")} />
                    </div>
                    <div className='buttonControl'>
                        <input type="submit" data-testid="submit" name="Submit" />
                    </div>
                </form>
            </div>
            <DevTool control={control} /> {/* set up the dev tool */}

        </>
    )
}