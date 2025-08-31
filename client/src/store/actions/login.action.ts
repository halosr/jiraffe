import * as actions from '@/store/actions/actionTypes';

export function updateLoginFields(field: string, value: string) {
  return {
    type: actions.UPDATE_FORM_FIELD,
    paylaod: {
      field,
      value,
    },
  };
}
