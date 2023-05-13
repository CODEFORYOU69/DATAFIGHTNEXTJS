import { ageCategories } from './data'
// AgeSelect.js
export const AgeSelect = ({
    value,
    onChange,
    selectedAge,
    handleAgeChange,
}) => {
    return (
        <select name="age" value={value} onChange={onChange}>
            <option value="">Select an age category</option>
            {ageCategories.map((age) => (
                <option key={age} value={age}>
                    {age}
                </option>
            ))}
        </select>
    )
}
