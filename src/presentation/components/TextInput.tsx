import { UseFormRegisterReturn } from "react-hook-form"

type TextInputProps = {
  id: string;
  type?: string;
  label: string;
  register: UseFormRegisterReturn;
  error?: string;
}
export default function TextInput({ id, type = 'text', label, register, error }: TextInputProps) {
  return (
    <section>
      <div className="flex flex-col">
        <label htmlFor={id} className="mr-2">{label}</label>
        <input className='text-black py-1 px-2 rounded-sm' id={id} type={type} {...register} />
      </div>
      {error ? <p className="text-yellow-500">{error}</p> : null}
    </section>
  )
}