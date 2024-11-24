

export default function RadioValues({ name, content }: { name:string, content: string }) {
    return (
        <div className="flex flex-row justify-between gap-8 mb-4">
            <label className="flex-1 font-bold" htmlFor={name}>{content}</label>
            <div className="flex flex-row gap-2">
                <label className="cursor-pointer" htmlFor={`yes-${name}`}>
                    <input className="peer hidden"  type="radio" name={name} id={`yes-${name}`} />            
                    <div className="peer-checked:animate-ping min-h-6 min-w-6 rounded-full border-2 border-blueBlack bg-white peer-checked:bg-spaceGold peer-checked:border-spaceGold transition-all"></div>
                </label>
                <label className="cursor-pointer" htmlFor={`ok-${name}`}>
                    <input className="peer hidden" type="radio" name={name} id={`ok-${name}`} />
                    <div className="peer-checked:animate-ping min-h-6 min-w-6 rounded-full border-2 border-blueBlack bg-white peer-checked:bg-spaceGold peer-checked:border-spaceGold transition-all"></div>
                </label>                
            </div>
        </div>
    )
}