import { fiterTypes } from "../redusers/project.reducer";

export const EDIT_QUADCOPTER_LIST_FILTER = "EDIT_QUADCOPTER_LIST_FILTER";

export const editQuadcopterListFilter = (fiterTypes: fiterTypes) => ({
    type: EDIT_QUADCOPTER_LIST_FILTER,
    payload: fiterTypes,
});
