import { ContactFormProps } from "@/types/companyInterface"

export default function ContactForm({
    name,
    type,
    placeholder,
    color,
}: ContactFormProps) {
    const label = name.toUpperCase()
    return (
        <div className={`text-[${color}]`}>
            <label htmlFor={name} className="block font-semibold">
                {label}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                className={`w-full h-12 px-4 rounded-md border border-[${color}] bg-transparent text-[${color}] font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[${color}]] focus:border-[${color}]] placeholder:text-[${color}]`}
                placeholder={placeholder}
                required
            />
        </div>
    )
}
