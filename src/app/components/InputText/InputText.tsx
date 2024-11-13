

export default function InputText({ name, label, notes, onUpdate }: { name: string, label: string, notes?: string, onUpdate: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <div>
            <label className="text-base" htmlFor={name}>{label}</label>
            <input id={name} type="text" onChange={onUpdate} className="border border-blueBlack border-2 p-2 rounded w-full " />
            {notes && <p className="text-sm">{notes}</p>}
        </div>
    );
}