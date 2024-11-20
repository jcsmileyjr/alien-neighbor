

export default function RadioValues({ name, content }: { name:string, content: string }) {
    return (
        <div className="flex flex-row justify-between gap-8 mb-4">
            <label className="flex-1 font-bold" htmlFor={name}>{content}</label>
            <div className="flex flex-row gap-2">
                <input className="min-h-6 min-w-6 border border-spaceGold border-2 p-2 rounded accent-spaceGold active:accent-spaceGold checked:border-spaceGold checked:border-0"  type="radio" name={name} id={`yes-${name}`} />            
                <input className="min-h-6 min-w-6 border border-spaceGold border-2 p-2 rounded accent-spaceGold active:accent-spaceGold checked:border-spaceGold checked:border-0" type="radio" name={name} id={`ok-${name}`} /> 
            </div>
        </div>
    )
}