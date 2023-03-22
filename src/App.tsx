import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { DevTools } from 'jotai-devtools';

import { GlobalStyle } from './styles/global-styles';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
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
