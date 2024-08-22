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
      <div>
        <label htmlFor={id} className="mr-2">{label}</label>
        <input className='text-black' id={id} type={type} {...register} />
      </div>
      <p>{error}</p>
    </section>
  )
}