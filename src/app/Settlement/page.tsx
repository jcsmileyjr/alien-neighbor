import Header from "../components/Header/Header";
import Image from "next/image";
import SettlementNavigateButton from "../components/SettlementNavigateButton/SettlementNavigateButton";

export default function Settlement() {  
    return (
        <div className="p-4 h-screen flex flex-col justify-between sm:mx-auto md:w-2/3 lg:w-1/2 2xl:w-1/3">
            <main className="flex flex-col gap-4 text-blueBlack">
                <Header />
                <figure className="sm:mx-auto">
                    <Image src="/images/ceiling-spider.png" alt="Alien Spider Image" className="w-full " width={300} height={300} />
                    <figcaption className="font-bold">Welcome Colony Settler to Planet HotLunchHolla </figcaption>
                </figure>
                <div>
                    <p className="font-bold flex flex-row gap-2">Planet Information <Image src="/images/planet-color.png" alt="Planet icon" width={15} height={15} /></p>
                    <p>This is a shadowy alien planet, where the light is dim and the environment eerie. </p>
                </div>
                <div>
                    <p className="font-bold flex flex-row gap-2">Your new <span className="line-through">final resting place</span> Home <Image src="/images/planet-color.png" alt="Planet icon" width={15} height={15} /></p>
                    <p>The house is a sleek, metallic dome reflecting the eerie glow of twin moons, isolated on a dark alien landscape.  </p>
                    <p className="mt-4">Inside, it’s ultra-modern, blending glass, metal, and iridescent materials with minimalist, floating furniture. Soft, bioluminescent lights shift gently, casting a haunting glow over the streamlined spaces.</p>
                </div>
                <div>
                    <p className="font-bold flex flex-row gap-2">Meet the extremely excited <span className="line-through">hungry </span> neighbors <Image className="opacity-75" src="/images/alien-icon.png" alt="Planet icon" width={15} height={15} /></p>
                    <p>There’s an eerie silence outside, occasionally broken by unsettling noises: a scuttling, scratching sound from the shadows beyond the glass walls. </p>
                    <p className="mt-4">Hidden within the alien landscape are massive, web-covered lairs. These are the territories of giant, human-eating spiders, their shapes barely visible in the darkness as they wait.</p>
                </div>
                <SettlementNavigateButton />
            </main>
            <footer className="text-center mt-4">
                By JC Smiley
            </footer>
        </div>
    )
}