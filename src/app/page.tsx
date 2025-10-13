import Image from 'next/image';

export default function Home() {
    return (
        <nav>
            <Image
                className="dark:invert"
                src="/images/mfs-logo.png"
                alt="Company Logo"
                width={200}
                height={200}
            />
            <ol>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Contact</li>
            </ol>
        </nav>
    );
}
