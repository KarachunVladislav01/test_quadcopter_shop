import { EDIT_QUADCOPTER_LIST_FILTER } from "../actions/projectActions";

export enum fiterTypes {
    All,
    Cheap,
    Best,
    Fast,
}

export interface ProjectState {
    quadcopterListFilter: fiterTypes;
}

const initialState: ProjectState = {
    quadcopterListFilter: fiterTypes.All,
};

export function projectState(state: ProjectState = initialState, action) {
    switch (action.type) {
        case EDIT_QUADCOPTER_LIST_FILTER:
            return { ...state, quadcopterListFilter: action.payload };
        default:
            return state;
    }
}

// selectors
export const getQuadcopterListFilter = (state) =>
    state.projectState.quadcopterListFilter;
