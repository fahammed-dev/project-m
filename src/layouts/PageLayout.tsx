import { Header } from '@/components';
import { Outlet } from 'react-router-dom';

function PageLayout() {
  return (
    <div>
      <header className="border-b border-solid border-color-gray-secondary px-11 py-5">
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default PageLayout;
