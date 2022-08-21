
export const Filter = ({ name, filter }) => {

    return (
        <div className="filter">
            <select placeholder="Budget" name="budget" >
                <option value="none">{name}</option>
                {filter?.map((type, idx) => {
                    return <option key={idx} value={type.Value}>{type.DisplayText}</option>
                })
                }
            </select>
        </div >
    )
}

