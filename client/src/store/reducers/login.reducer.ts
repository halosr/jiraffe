import * as actions from '@/store/actions/actionTypes';

interface loginFormState {
  email: string;
  password: string;
}
const INITIAL_STATE: loginFormState = {
  email: '',
  password: '',
};

const loginReducer = (state: loginFormState = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case actions.UPDATE_FORM_FIELD: {
      const { field, value } = action.paylaod;
      return {
        ...state,
        [field]: value,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default loginReducer;
