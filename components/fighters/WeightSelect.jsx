export const WeightSelect = ({
    selectedWeight,
    handleWeightChange,
    availableWeights,
}) => {
    return (
        <select
            name="weightcategory"
            value={selectedWeight}
            onChange={handleWeightChange}
        >
            <option value="">Select a weight category</option>
            {availableWeights.map((weight) => (
                <option key={weight} value={weight}>
                    {weight}
                </option>
            ))}
        </select>
    )
}
