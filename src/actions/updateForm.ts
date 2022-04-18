import { UPDATE_FORM } from "./types";

const updateForm = (form: any) =>async (dispatch: any) => {
    dispatch({type: UPDATE_FORM, payload: form});
}
export default updateForm;