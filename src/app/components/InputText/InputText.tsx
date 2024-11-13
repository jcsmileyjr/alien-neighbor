

export default function InputText({ name, label }: { name: string, label: string }) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input id={name} type="text" />
        </div>
    );
}