import React from 'react';
import { graphql, ChildProps } from 'react-apollo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { light, dark } from '../../theme';
import { ThemeProvider } from '../../typed-components';
import AppPresenter from './AppPresenter';
import { IS_LOGGED_IN } from './AppQueries.local';
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

export default graphql(IS_LOGGED_IN)(AppContainer);
