export const WeightSelect = ({
    selectedWeight,
    handleWeightChange,
    value,
    onChange,
    availableWeights,
}) => {
    return (
        <select name="weightcategory" value={value} onChange={onChange}>
            <option value="">Select a weight category</option>
            {availableWeights.map((weight) => (
                <option key={weight} value={weight}>
                    {weight}
                </option>
            ))}
        </select>
    )
}
