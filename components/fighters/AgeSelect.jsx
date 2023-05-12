import { ageCategories } from './data'
// AgeSelect.js
export const AgeSelect = ({ selectedAge, handleAgeChange }) => {
    return (
        <select name="age" value={selectedAge} onChange={handleAgeChange}>
            <option value="">Select an age category</option>
            {ageCategories.map((age) => (
                <option key={age} value={age}>
                    {age}
                </option>
            ))}
        </select>
    )
}
