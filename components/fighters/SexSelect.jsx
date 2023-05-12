// SexSelect.js
import { sexes } from './data'

export function SexSelect({ selectedSex, handleSexChange }) {
    return (
        <select name="sex" value={selectedSex} onChange={handleSexChange}>
            <option value="">Select a sex</option>
            {sexes.map((sex) => (
                <option key={sex} value={sex}>
                    {sex}
                </option>
            ))}
        </select>
    )
}
