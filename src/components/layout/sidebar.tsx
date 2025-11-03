import LazyImage from "../common/LazyImage"

export default function Sidebar() {
    return (
        <div className="fixed top-1/3 right-0 z-50 flex flex-col gap-4">
            <LazyImage src="/images/youtube.svg" alt="youtube" />
            <LazyImage src="/images/facebook.svg" alt="youtube" />
            <LazyImage src="/images/instagram.svg" alt="instagram" />
            <LazyImage src="/images/linkedin.svg" alt="linkedin" />
        </div>
    )
}
