import { filterStateTypes, filterActionTypes } from "../../Types/filterType";

import {
    ACTION_SET_CURRENT_RANGE_VALUE
} from "../Actions/filterActions";

const initialState: filterStateTypes = {
    inputRangeTotalValue: 10000,
    inputRangeMinValue: 1500,
    currentRangeValue: 0,
};

const filterReducer = (
    state = initialState,
    action: filterActionTypes
): filterStateTypes => {
    switch (action.type) {
        case ACTION_SET_CURRENT_RANGE_VALUE:
            return {
                ...state,
                currentRangeValue: action.payload,
            };
        default:
            return state;
    }
};

export default filterReducer;
