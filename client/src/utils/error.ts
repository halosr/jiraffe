import { AxiosError, isAxiosError } from 'axios';

interface standardError {
  code?: number;
  msg: string;
}

export function handleError(error: unknown): standardError {
  if (isAxiosError(error)) {
    return {
      code: error.response?.status,
      msg: error.response?.data.msg,
    };
  } else {
    return {
        msg: "Something Went Wrong!!"
    }
  }
}
