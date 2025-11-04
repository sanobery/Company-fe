import { ProductMetaProps } from "@/types/companyInterface"

export default function ProductMeta({ label, value }: ProductMetaProps) {
    return (
        <p
            aria-label={`${label}:${value}`}
            className="text-white text-lg font-semibold px-2 text-center"
        >
            {label} - {value}
        </p>
    )
}
