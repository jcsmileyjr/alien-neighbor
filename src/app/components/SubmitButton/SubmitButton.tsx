

export default function SubmitButton({messageOne, messageTwo}: {messageOne: string, messageTwo: string}) {
    return (
        <button className=" group bg-spaceGold border border-blueBlack border-2 opacity-75 hover:opacity-100 text-blueBlack font-bold py-2 px-4 rounded">
            <span className="mr-2">{messageOne}</span>
            <span className="group-hover:opacity-100 opacity-0 ease-in duration-100">{messageTwo}</span>
        </button>
    )
}