import * as actions from '@/store/actions/actionTypes';

export const setPageProperties = (name: string, path: string, isAuthRequired: boolean, auth?: string | null) => {
  return {
    type: actions.SET_PAGE_PROPERTIES,
    payload: {
      name,
      path,
      isAuthRequired,
      auth,
    },
  };
};
