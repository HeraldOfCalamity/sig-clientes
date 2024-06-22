import { departments } from "../../map-assets/departments";

const SelectDepartment = ({ onChange }) => {
    return (
        <select onChange={e => onChange(e.target.value)}>
            {
                Object.keys(departments).map(key => (
                    <option key={key} value={key}>
                        {departments[key].name}
                    </option>
                ))
            }
        </select>
    );
}

export default SelectDepartment;