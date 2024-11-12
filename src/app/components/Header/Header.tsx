import Image from "next/image";

export default function Header() {
    return (
        <header className="flex flex-row justify-center items-center gap-4">
            <Image src="/images/alien-planet.jpg" alt="Logo" width={30} height={30} />
            <h1 className="text-blueBlack text-xl">Space Colony Sign Up</h1>
        </header>
    );
}