import React from 'react';
import { graphql, ChildProps } from 'react-apollo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { light, dark } from '../../theme';
import { ThemeProvider } from '../../typed-components';
import AppPresenter from './AppPresenter';
import { GET_IS_LOGGED_IN } from '../../sharedQueries.local';
import GlobalStyle from '../../GlobalStyle';
import { useTheme } from '../../Hooks/useTheme';

const AppContainer: React.SFC<ChildProps<any>> = ({ data }) => {
  const [theme] = useTheme();
  return (
    <>
      <ThemeProvider theme={theme === 'dark' ? dark : light}>
        <GlobalStyle />
        <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
        <ToastContainer draggable={true} position={'top-center'} />
      </ThemeProvider>
    </>
  );
};

export default graphql(GET_IS_LOGGED_IN)(AppContainer);
