'use client';
import Swal from "sweetalert2";
import Image from "next/image";
import {useState} from "react";

const SettlementNavigateButton = () => {
    const [showPolicy, setShowPolicy] = useState(false);
    const nextPage = () => {
        Swal.fire("Thanks for testing this app. The next page is a WIP");
        setShowPolicy(true);
        // router.push("/Settlement");
    };
    return (
    <button onClick={nextPage} type="button"  className={`w-full group bg-spaceGold border border-blueBlack border-2 opacity-75 hover:opacity-100 text-blueBlack py-2 px-4 rounded mt-8 ${showPolicy && 'opacity-100'}`}>
        {!showPolicy &&
            <>
                <p className=" flex flex-row gap-2 justify-center group-hover:hidden">Lock the Doors <Image  src="/images/alien-icon.png" alt="Logo" width={15} height={15} /></p>
                <p className="group-hover:block hidden">Sorry, local HOA has a no lock door policy</p>
            </>  
        }
        {showPolicy &&
            <p className="">Sorry, local HOA has a no lock door policy</p>
        }
    </button>
    )
}

export default SettlementNavigateButton;