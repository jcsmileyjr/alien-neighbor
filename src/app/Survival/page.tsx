'use client';
import Image from "next/image";
import Header from "../components/Header/Header";

export default function Survival() {
    return (
        <div className="p-4 h-screen flex flex-col justify-between sm:mx-auto md:w-2/3 lg:w-1/2 2xl:w-1/3">
            <main className="flex flex-col gap-4 text-blueBlack">
                <Header />
                <section className="text-white font-bold text-4xl h-screen w-full bg-spider-pattern bg-repeat animate-scroll flex flex-col justify-around items-center">
                    <p className="transform animate-fadeIn">SURVIVE</p>
                    <p className="transform animate-fadeInSecond">OPEN the DOOR</p>
                </section>
            </main>
        </div>
    )
}