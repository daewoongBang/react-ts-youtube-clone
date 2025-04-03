import MainLayout from 'layouts/MainLayout';
import NotFound from 'pages/errors/NotFound';
import Home from 'pages/Home';
import VideoDetail from 'pages/video/Detail';
import VideoSearchList from 'pages/video/SearchList';
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
        path: 'search',
        element: <VideoSearchList />,
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
