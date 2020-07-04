import React, { useEffect } from 'react';
import { useMutation } from 'react-apollo';
import { useForm } from 'react-hook-form';
import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import SignupPresenter from './SignupPresenter';
import { CREATE_USER } from './SignupQueries';

interface IFormData {
  email: string;
  password: string;
  passwordConfirm: string;
  fullName: string;
}

const SignupContainer: React.SFC<RouteComponentProps> = ({ history }) => {
  const { register, handleSubmit, errors } = useForm<IFormData>({
    mode: 'all',
  });

  const [createUser, { data, loading }] = useMutation(CREATE_USER);

  const onSubmit = (data: IFormData) => {
    const { email, password, passwordConfirm, fullName } = data;
    if (password !== passwordConfirm) {
      toast.error('Passwords do not match.');
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

  return (
    <SignupPresenter
      register={register}
      onSubmit={handleSubmit(onSubmit)}
      errors={errors}
      loading={loading}
    />
  );
};

export default SignupContainer;
