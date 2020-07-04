import React, {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from 'react';
import { useMutation } from 'react-apollo';
import { LOG_USER_IN } from '../../sharedQueries.local';
import { LOGIN_USER } from './LoginQueries';
import { toast } from 'react-toastify';
import LoginPresenter from './LoginPresenter';

const LoginContainer = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [loginUser, { data, loading }] = useMutation(LOGIN_USER);
  const [logUserIn] = useMutation(LOG_USER_IN);

  const onSubmit: FormEventHandler<HTMLFormElement> = () => {
    const { email, password } = form;
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
  }, [data, logUserIn]);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id, value } = e.target;
    setForm({
      ...form,
      [id]: value,
    });
  };

  return (
    <LoginPresenter onChange={onChange} onSubmit={onSubmit} loading={loading} />
  );
};

export default LoginContainer;
