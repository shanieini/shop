


export const Filter = ({ name, filter }) => {
    console.log('name', name)
    // console.log('filter', filter[0].Value)

    return (
        <div>
            <select placeholder="Budget" name="budget" >

                <option value="none">{name}</option>
                {filter?.map(type => {
                    return <option value={type.Value}>{type.DisplayText}</option>
                })
                }
            </select>
        </div >
    )
}

