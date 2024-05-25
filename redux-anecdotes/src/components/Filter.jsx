import { useDispatch } from "react-redux"
import { createFilterChange } from "../reducers/filterReducer"

const Filter = () => {
    const dispatch = useDispatch()

    const changeInput = (e) => {
        dispatch(createFilterChange(e.target.value))
    }

    return (
        <div style={{ marginBottom: 10 }}>
            filter by <input onChange={changeInput} />
        </div>
    )
}

export default Filter