import React, { useEffect } from 'react'
export const WeightSelect = ({
    value,
    onChange,
    availableWeights,
    selectedWeight,
}) => {
    useEffect(() => {
        if (selectedWeight) {
            onChange(selectedWeight)
        }
    }, [selectedWeight])
    return (
        <select name="weightcategory" value={value} onChange={onChange}>
            <option value="">Select a weight category</option>
            {availableWeights.map((weightCategory) => (
                <option value={weightCategory} key={weightCategory}>
                    {weightCategory}
                </option>
            ))}
        </select>
    )
}
