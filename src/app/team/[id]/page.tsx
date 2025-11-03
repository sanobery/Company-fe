// app/team/[id]/page.tsx
import EntityDetails from "@/components/shared/entityDetails"
import teamService from "@/services/api/axiosInstance"
import { SWRConfig } from "swr"

export default async function TeamMemberPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const data = await teamService.getById(Number(id))

    return (
        <SWRConfig value={{ fallback: { [`team-${id}`]: data } }}>
            <EntityDetails type="team" slug={id} />
        </SWRConfig>
    )
}
