import { Sidebar } from '@/components';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div className="app py-12">
      <div className="flex bg-color-white-secondary mx-auto rounded-[30px] max-w-[1440px] max-h-[932px] h-[90vh] overflow-hidden w-[100%] drop-shadow-2xl">
        <aside className="flex-[0_0_250px] border-r border-solid border-color-gray-secondary">
          <Sidebar />
        </aside>
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default RootLayout;
