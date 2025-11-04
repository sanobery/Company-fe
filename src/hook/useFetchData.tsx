"use client"

import useSWR from "swr"
import { ReactNode } from "react"
import Hero from "@/components/sections/home/hero"

type FetcherFn<T> = () => Promise<T>

interface UseFetchDataOptions<T> {
    key: string
    fetcher: FetcherFn<T>
    refreshInterval?: number
    revalidateOnFocus?: boolean
}

interface FetchState<T> {
    data: T | undefined
    isLoading: boolean
    error: boolean
    RenderState: (props: {
        children: ReactNode
        loadingText?: string
        errorText?: string
        emptyText?: string
        isEmpty?: boolean
    }) => React.ReactElement
}

/**
 * Common reusable hook for fetching data with SWR
 * Handles loading, error, and empty states gracefully
 */
export function useFetchData<T>({
    key,
    fetcher,
    refreshInterval = 60000,
    revalidateOnFocus = false,
}: UseFetchDataOptions<T>): FetchState<T> {
    const { data, error, isLoading } = useSWR<T>(key, fetcher, {
        refreshInterval,
        revalidateOnFocus,
    })

    const RenderState = ({
        children,
        loadingText = "Loading...",
        errorText = "Something went wrong.",
        emptyText = "No data found.",
        isEmpty = false,
    }: {
        children: ReactNode
        loadingText?: string
        errorText?: string
        emptyText?: string
        isEmpty?: boolean
    }) => {
        if (isLoading)
            return (
                <Hero
                    heading={`${loadingText}`}
                    paragraph={loadingText}
                    image="/images/home2.webp"
                    showContactPage={false}
                    notFound={true}
                />
            )

        if (error)
            return (
                <Hero
                    heading="PAGE NOT FOUND 🙁"
                    paragraph={errorText}
                    image="/images/home2.webp"
                    showContactPage={false}
                    notFound={true}
                />
            )

        if (isEmpty)
            return (
                <Hero
                    heading="PAGE NOT FOUND 🙁"
                    paragraph={emptyText}
                    image="/images/home2.webp"
                    showContactPage={false}
                    notFound={true}
                />
            )

        return <>{children}</>
    }

    return { data, isLoading, error, RenderState }
}
