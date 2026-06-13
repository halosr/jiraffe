import { login } from '@api/login';
import * as actions from '@store/actions/actionTypes';
import type { AppDispatch, RootState } from '@store/store';

export function updateLoginFields(field: string, value: string) {
    return {
        type: actions.UPDATE_FORM_FIELD,
        paylaod: {
            field,
            value,
        },
    };
}

export function loginUser() {
    return async function (dispatch: AppDispatch, getState: () => RootState) {
        const { email, password } = getState()?.login;
        return Promise.resolve()
            .then(() => login(email, password))
            .then((res) => res?.data)
            .catch((err) => err);
    };
}
