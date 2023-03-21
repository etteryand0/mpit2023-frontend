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
      <Helmet titleTemplate="%s - Vite yopta" defaultTitle="Vite yopta">
        <meta name="description" content="My Vite TS React boilerplate" />
      </Helmet>
      <RouterProvider router={router} />
      <GlobalStyle />
    </HelmetProvider>
  );
}

export default App;
