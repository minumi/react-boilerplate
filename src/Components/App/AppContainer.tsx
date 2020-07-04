import React from 'react';
import { graphql } from 'react-apollo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { light, dark } from '../../theme';
import { ThemeProvider } from '../../typed-components';
import AppPresenter from './AppPresenter';
import { IS_LOGGED_IN } from './AppQueries.local';
import GlobalStyle from '../../GlobalStyle';

interface IProps {
  data: {
    auth: {
      isLoggedIn: boolean;
      __typename: string;
    };
  };
}

const AppContainer = ({ data }: any) => {
  let theme = light;
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme') === 'dark' ? dark : light;
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = dark;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
        <ToastContainer draggable={true} position={'top-center'} />
      </ThemeProvider>
    </>
  );
};

export default graphql(IS_LOGGED_IN)(AppContainer);
