// SexSelect.js
import { sexes } from './data'

export function SexSelect({ value, onChange }) {
    return (
        <select name="sex" value={value} onChange={onChange}>
            <option value="">Select a sex</option>
            {sexes.map((sex) => (
                <option key={sex} value={sex}>
                    {sex}
                </option>
            ))}
        </select>
    )
}
