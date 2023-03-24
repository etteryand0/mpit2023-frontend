import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { DevTools } from 'jotai-devtools';

import { GlobalStyle } from './styles/global-styles';

// import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import MapPage from './pages/MapPage';
import Login from './pages/LoginPage';
import Profile from './pages/ProfilePage';
import SignUp from './pages/SignupPage';
import ShortLink from './pages/ShortLink';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MapPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/p/:path',
    element: <ShortLink />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <HelmetProvider>
      <DevTools />
      <Helmet titleTemplate="%s - Сообщество" defaultTitle="Сообщество">
        <meta name="description" content="Сообщество" />
      </Helmet>
      <RouterProvider router={router} />
      <GlobalStyle />
    </HelmetProvider>
  );
}

export default App;
