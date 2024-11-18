

export default function SelectInput() {
    return (
        <div className="mb-4">
            <label className="text-base" htmlFor="user_name">label</label>
            <select id="user_name" className="border border-blueBlack border-2 p-2 rounded w-full " >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>                
            </select>
        </div>        
    );
}