const SelectLayer = ({ onChange }) => {
    return (
        <select onChange={e => onChange(e.target.value)}>
            <option value="normal">Normal</option>
            <option value="departamentos">Departamentos</option>
            {/* <option value="municipios">Municipios</option> */}
        </select>
    )
}

export default SelectLayer;