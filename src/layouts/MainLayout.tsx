import SearchHeader from 'components/layout/SearchHeader';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <SearchHeader />
      <Outlet />
    </div>
  );
};

export default MainLayout;
