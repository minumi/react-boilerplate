import React, { useEffect } from 'react';
import { useMutation } from 'react-apollo';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { LOG_USER_IN } from '../../sharedQueries.local';
import LoginPresenter from './LoginPresenter';
import { LOGIN_USER } from './LoginQueries';

interface IFormData {
  email: string;
  password: string;
}

const LoginContainer = () => {
  const { register, handleSubmit, errors } = useForm<IFormData>({
    mode: 'all',
  });

  const [loginUser, { data, loading }] = useMutation(LOGIN_USER);
  const [logUserIn] = useMutation(LOG_USER_IN);

  const onSubmit = (data: IFormData) => {
    const { email, password } = data;
    loginUser({
      variables: {
        email,
        password,
      },
    });
  };

  useEffect(() => {
    if (data) {
      const {
        LoginUser: { ok, token, error },
      } = data;
      if (ok && token) {
        logUserIn({
          variables: {
            token,
          },
        });
      } else if (!ok && error) {
        if (error === 'not_matched') {
          toast.error('Password does not match.');
        }
      }
    }
  }, [data, logUserIn, errors]);

  return (
    <LoginPresenter
      register={register}
      onSubmit={handleSubmit(onSubmit)}
      errors={errors}
      loading={loading}
    />
  );
};

export default LoginContainer;
