import { ContactFormProps } from "@/types/companyInterface"

/**
 * TableRow Component
 * ---------------------------------
 * Displays a single row (<tr>) within a table.
 * Each row shows two columns: a "name" and a "type".
 *
 * Props (from ContactFormProps):
 * - name: string → The label or identifier to display in the first column.
 * - type: string → The corresponding value or type to display in the second column.
 *
 * Styling:
 * - Adds hover highlighting (amber background).
 * - Smooth transition for color change on hover.
 *
 * Example usage:
 * <TableRow name="Email" type="text" />
 */
export default function TableRow({ name, type }: ContactFormProps) {
    return (
        <tr className="hover:bg-amber-100 transition-colors">
            <td className="px-4 py-3 font-medium text-gray-700">{name}</td>
            <td className="px-4 py-3">{type}</td>
        </tr>
    )
}
