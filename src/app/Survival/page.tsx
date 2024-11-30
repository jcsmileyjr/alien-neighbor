'use client';
import { useState, useEffect, use } from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import Swal from "sweetalert2";
import { tap } from "node:test/reporters";

export default function Survival() {
    const [introScene, setIntroScene] = useState<boolean>(true);
    const [taps, setTaps] = useState<number>(1);

    useEffect(() => {
        const timer = setTimeout(() => { setIntroScene(false); }, 2000);
        return () => clearTimeout(timer);
    }, [])

    const handleClick = () => {
        console.log("Tap: ", taps);
        if (taps === 1) {
            setTaps(2);
        } else if (taps === 2) {
            setTaps(3);
        } else {
            Swal.fire("You have SURVIVED", "Thank you for playing my game", );
        }
        
    }
    return (
        <div className="p-4 h-screen flex flex-col justify-between sm:mx-auto md:w-2/3 lg:w-1/2 2xl:w-1/3">
            <main className="flex flex-col gap-4 text-blueBlack">
                <Header />
                {introScene &&
                    <section className="text-white font-bold text-4xl h-screen w-full bg-spider-pattern bg-repeat animate-scroll flex flex-col justify-around items-center">
                        <p className="transform animate-fadeIn">SURVIVE</p>
                        <p className="transform animate-fadeInSecond">OPEN the DOOR</p>
                    </section>
                }
                {!introScene &&
                    <section>
                        <figure className="sm:mx-auto">
                            {taps === 1 &&
                                <Image src="/images/closed-door.png" alt="Close Door" className="w-full " width={200} height={200} />
                            }
                                {taps === 2 &&
                                <Image src="/images/partial-open-door.png" alt="Partially Door" className="w-full " width={200} height={200} />
                            }
                                {taps === 3 &&
                                <Image src="/images/half-open-door.png" alt="Half Opened Door" className="w-full " width={200} height={200} />
                            }
                            <figcaption className="font-bold">If you want to SURVIVE, Hit the moving button 3 times to OPEN the DOOR </figcaption>
                        </figure>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-row flex-wrap gap-2">
                                <Image src="/images/orange-eye-spider.png" alt="hungry spider" className="transform animate-fadeOut2" width={75} height={75} />
                                <Image src="/images/orange-eye-spider.png" alt="hungry spider" className="transform animate-fadeOut25" width={75} height={75} />
                                <Image src="/images/orange-eye-spider.png" alt="hungry spider" className="transform animate-fadeOut3" width={75} height={75} />
                                <button onClick={handleClick} type="button" className="bg-blueBlack border border-blueBlack border-2 text-spaceGold  w-20 p-1 opacity-25 rounded transform animate-fadeOut25">They are Coming</button>
                                <Image src="/images/orange-eye-spider.png" alt="hungry spider" className="transform animate-fadeOut25" width={75} height={75} />
                                <Image src="/images/orange-eye-spider.png" alt="hungry spider" className="transform animate-fadeOut3" width={75} height={75} />
                                <Image src="/images/orange-eye-spider.png" alt="hungry spider" className="transform animate-fadeOut4" width={75} height={75} />
                                <button onClick={handleClick} type="button" className="bg-blueBlack border border-blueBlack border-2 text-spaceGold w-20 p-1 opacity-25 rounded animate-fadeOut2">A Small Taste</button>
                                <Image src="/images/orange-eye-spider.png" alt="hungry spider" className="transform animate-fadeOut25" width={75} height={75} />
                                <Image src="/images/orange-eye-spider.png" alt="hungry spider" className="transform animate-fadeOut3" width={75} height={75} />
                                <Image src="/images/orange-eye-spider.png" alt="hungry spider" className="transform animate-fadeOut25" width={75} height={75} />
                                <Image src="/images/orange-eye-spider.png" alt="hungry spider" className="transform animate-fadeOut3" width={75} height={75} />
                                <button onClick={handleClick} type="button" className="bg-blueBlack border border-blueBlack border-2 text-spaceGold w-20 p-1 opacity-25 rounded animate-fadeOut4">Run</button>
                                <Image src="/images/orange-eye-spider.png" alt="hungry spider" className="transform animate-fadeOut25" width={75} height={75} />
                                <Image src="/images/orange-eye-spider.png" alt="hungry spider" className="transform animate-fadeOut3" width={75} height={75} />
                                <Image src="/images/orange-eye-spider.png" alt="hungry spider" className="transform animate-fadeOut4" width={75} height={75} />
                                <Image src="/images/orange-eye-spider.png" alt="hungry spider" className="transform animate-fadeOut25" width={75} height={75} />
                                <Image src="/images/orange-eye-spider.png" alt="hungry spider" className="transform animate-fadeOut3" width={75} height={75} />
                                <Image src="/images/orange-eye-spider.png" alt="hungry spider" className="transform animate-fadeOut4" width={75} height={75} />
                                <Image src="/images/orange-eye-spider.png" alt="hungry spider" className="transform animate-fadeOut25" width={75} height={75} />
                                <button onClick={handleClick} type="button" className="bg-blueBlack border border-blueBlack border-2 text-spaceGold w-20 p-1 opacity-25 rounded animate-fadeOut3">Dinner</button>
                                <Image src="/images/orange-eye-spider.png" alt="hungry spider" className="transform animate-fadeOut25" width={75} height={75} />
                                <Image src="/images/orange-eye-spider.png" alt="hungry spider" className="transform animate-fadeOut3" width={75} height={75} />
                                <Image src="/images/orange-eye-spider.png" alt="hungry spider" className="transform animate-fadeOut2" width={75} height={75} />
                            </div>

                        </div>
                    </section>
                }
            </main>
        </div>
    )
}