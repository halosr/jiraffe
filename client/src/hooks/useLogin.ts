import { login } from '@/api/login';
import { updateLoginFields } from '@/store/actions/login.action';
import type { RootState, AppDispatch } from '@/store/store';
import { handleError } from '@/utils/error';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { email, password } = useSelector((state: RootState) => state.login || {});

  const handleChange = (field: string, value: string) => {
    dispatch(updateLoginFields(field, value));
  };

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        setError('Missing required fields!!');
        return;
      }
      setError('');
      const loginResponse = await login(email, password);
      if (loginResponse instanceof AxiosError) {
        handleError(loginResponse);
      }
      const { token, uid, name } = loginResponse?.data;
      console.log(token, uid, name);
      navigate('/rooms');
    } catch (error) {
      console.log(error);
      // if (error instanceof AxiosError) {
      //   setError(error?.response?.data?.msg);
      //   return;
      // }
      // setError('Something Wrong Happened!! Please try after sometime.');
      //   setError(error.message);
      const { msg } = handleError(error);
      setError(msg);
    }
  };
  return { email, password, error, handleChange, handleLogin };
};

export default useLogin;
