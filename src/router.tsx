import MainLayout from 'layouts/MainLayout';
import NotFound from 'pages/errors/NotFound';
import Home from 'pages/Home';
import VideoDetail from 'pages/video/Detail';
import VideoSearch from 'pages/video/Search';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'search/:query',
        element: <VideoSearch />,
      },
      {
        path: 'watch',
        children: [
          {
            index: true,
            element: <Navigate to='/' replace />,
          },
          {
            path: ':videoId',
            element: <VideoDetail />,
          },
        ],
      },
    ],
  },
  {
    path: '/watch/:videoId',
    element: <VideoDetail />,
  },
]);

export default router;
