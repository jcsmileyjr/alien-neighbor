import Image from "next/image";

const showAlien = (message: string, ifAlien:string) => {
    if(ifAlien === "to") {
        return <p className="flex flex-row gap-2 justify-center">{message} To <Image src="/images/alien-icon.png" alt="Logo" width={15} height={15} /></p>
        
    } else {
        return ifAlien;
    }
}
export default function SubmitButton({messageOne, messageTwo, notes}: {messageOne: string, messageTwo: string, notes?: string}) {
    return (
        <>
            <button className="w-full group bg-spaceGold border border-blueBlack border-2 opacity-75 hover:opacity-100 text-blueBlack py-2 px-4 rounded">
                <p className=" flex flex-row gap-2 justify-center">
                    {messageOne} <span className="group-hover:blur-none blur-sm font-bold ease-in duration-200">{messageTwo}</span>
                    <Image  src="/images/alien-icon.png" alt="Logo" width={15} height={15} />
                </p>
            </button>
            {notes && <p className="text-sm text-offBlack">{notes}</p>}
        </>
    )
}