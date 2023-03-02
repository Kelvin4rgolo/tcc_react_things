

import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  example: string,
  exampleRequired: string,
}

export function InputForm(){
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);


    return (
        <div className="flex w-full items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center group">
            <input defaultValue="test" {...register("example")}  className="border-2 border-zinc-900 rounded-tr-3xl rounded-bl-3xl text-center"/>
            <input required {...register("exampleRequired", { required: true })} className="border-2 border-zinc-900 rounded-tr-3xl rounded-bl-3xl justify-center text-center requi"/>
            {errors.exampleRequired && <span className="text-[8px] required:border-red-600">This field is required</span>}
            <button type="submit" className="w-24 border-2 border-zinc-900 rounded-tr-3xl rounded-bl-3xl justify-center">Enviar</button>
        </form>
            {/* <input type="text" className="border-2 rounded-tr-3xl rounded-bl-3xl text-center border-violet-900 w-80 h-9 bg-purple-100"/> */}
        </div>
    )
}