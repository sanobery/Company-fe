import LazyImage from "../common/LazyImage"

/**
 * Sidebar Component
 * ---------------------------------
 * A fixed-position sidebar that displays social media icons
 * (YouTube, Facebook, Instagram, LinkedIn) stacked vertically.
 *
 * Features:
 * - Fixed to the right side of the screen, vertically centered (top-1/3).
 * - Uses the LazyImage component for optimized image loading.
 * - Maintains spacing between icons using flexbox and gap utilities.
 * - High z-index ensures it stays visible above other content.
 *
 * Ideal Use:
 * - To display quick-access links to social media profiles on all pages.
 */
export default function Sidebar() {
    return (
        <div className="fixed top-1/3 right-0 z-50 flex flex-col gap-4">
            <LazyImage src="/images/youtube.svg" alt="youtube" />
            <LazyImage src="/images/facebook.svg" alt="facebook" />
            <LazyImage src="/images/instagram.svg" alt="instagram" />
            <LazyImage src="/images/linkedin.svg" alt="linkedin" />
        </div>
    )
}
