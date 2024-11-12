import Image from "next/image";

export default function Header() {
    return (
        <header className="flex flex-row items-center gap-4">
            <Image src="/images/alien-planet.jpg" alt="Logo" width={20} height={20} />
            <h1>Space Colony Sign Up</h1>
        </header>
    );
}