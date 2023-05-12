// utilities.js
import { weightCategories } from './data'

export const getWeightCategories = (selectedSex, selectedAge) => {
    return selectedSex && selectedAge
        ? weightCategories[selectedSex][selectedAge]
        : []
}
