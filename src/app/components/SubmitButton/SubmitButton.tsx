import Image from "next/image";

interface SubmitButtonProps { 
    handleSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
    messageOne: string;
    messageTwo: string;
    notes?: string;
}  

export default function SubmitButton({ handleSubmit, messageOne, messageTwo, notes }: SubmitButtonProps) {
    return (
        <>
            <button type="button" onClick={handleSubmit} className="w-full group bg-spaceGold border border-blueBlack border-2 opacity-75 hover:opacity-100 text-blueBlack py-2 px-4 rounded">
                <p className=" flex flex-row gap-2 justify-center">
                    {messageOne} <span className="group-hover:blur-none blur-sm font-bold ease-in duration-200">{messageTwo}</span>
                    <Image  src="/images/alien-icon.png" alt="Logo" width={15} height={15} />
                </p>
            </button>
            {notes && <p className="text-sm text-offBlack">{notes}</p>}
        </>
    )
}