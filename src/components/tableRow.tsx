import { ContactFormProps } from "@/types/companyInterface"

export default function TableRow({ name, type }: ContactFormProps) {
    return (
        <tr className="hover:bg-amber-100 transition-colors">
            <td className="px-4 py-3 font-medium text-gray-700">{name}</td>
            <td className="px-4 py-3">{type}</td>
        </tr>
    )
}
