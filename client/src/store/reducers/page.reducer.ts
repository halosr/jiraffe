import * as actions from '@/store/actions/actionTypes';

interface pageMetaState {
  name: string;
  path: string;
  isAuthRequired: boolean;
  auth: string | null;
}

const INITIAL_STATE = {
  name: '',
  path: '',
  isAuthRequired: true,
  auth: null,
};

const pageReducer = (state: pageMetaState = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case actions.SET_PAGE_PROPERTIES: {
      const { name, path, isAuthRequired, auth } = action.payload;
      return { ...state, name, path, isAuthRequired, auth };
    }
    default: {
      return { ...state };
    }
  }
};

export default pageReducer;
