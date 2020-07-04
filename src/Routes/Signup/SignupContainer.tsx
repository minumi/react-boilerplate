import React, {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from 'react';
import { useMutation } from 'react-apollo';
import { CREATE_USER } from './SignupQueries';
import { toast } from 'react-toastify';
import SignupPresenter from './SignupPresenter';
import { RouteComponentProps } from 'react-router-dom';

const SignupContainer: React.SFC<RouteComponentProps> = ({ history }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    fullName: '',
  });

  const [createUser, { data, loading }] = useMutation(CREATE_USER);

  const onSubmit: FormEventHandler<HTMLFormElement> = () => {
    const { email, password, passwordConfirm, fullName } = form;
    if (password !== passwordConfirm) {
      toast.error('The password and the password confirm do not match.');
      return;
    }
    createUser({
      variables: {
        email,
        password,
        fullName,
      },
    });
  };

  useEffect(() => {
    if (data) {
      const {
        CreateUser: { ok, error },
      } = data;
      if (ok) {
        toast.success('You account created.');
        history.push('/login');
      } else if (!ok && error) {
        toast.error('The email already exists.');
      }
    }
  }, [data, history]);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id, value } = e.target;
    setForm({
      ...form,
      [id]: value,
    });
  };

  return (
    <SignupPresenter
      onChange={onChange}
      onSubmit={onSubmit}
      loading={loading}
    />
  );
};

export default SignupContainer;
