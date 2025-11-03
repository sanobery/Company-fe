import { ExtendedContactFormProps } from "@/types/companyInterface"
import { ContactFormType } from "@/schemas/contactSchema"

export default function ContactForm({
    name,
    type,
    placeholder,
    color,
    register,
    error,
}: ExtendedContactFormProps) {
    const label = name.toUpperCase()
    return (
        <div className={`text-[${color}]`}>
            <label htmlFor={name} className="block font-semibold">
                {label}
            </label>
            <input
                type={type}
                id={name}
                {...register(name as keyof ContactFormType)}
                className={`w-full h-12 px-4 rounded-md border border-[${color}] bg-transparent text-[${color}] font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[${color}]] focus:border-[${color}]] placeholder:text-[${color}]`}
                placeholder={placeholder}
                aria-invalid={!!error}
                aria-describedby={error ? `${name}-error` : undefined}
            />
            {error && (
                <p role="alert" className={`${color} text-sm mt-1`}>
                    {error}
                </p>
            )}
        </div>
    )
}
