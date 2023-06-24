import { Sidebar } from '@/components';
import { useMediaQuery } from '@/hooks';

import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function RootLayout() {
  const navigate = useNavigate();
  const [aside, setAside] = useState<boolean>(true);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    navigate('/projects/mobile');
  }, [navigate]);

  // decide what to render
  let content = null;

  if (aside && isAboveMediumScreens) {
    content = (
      <aside className="flex-[0_0_252px] border-r border-solid border-color-gray-secondary">
        <Sidebar aside={aside} setAside={setAside} />
      </aside>
    );
  }

  return (
    <div className="app py-5">
      <div className="mx-auto flex h-[932px] max-h-[932px] w-[100%] max-w-[1440px] overflow-hidden rounded-[30px] bg-color-white-secondary drop-shadow-2xl">
        {content}
        <main className="flex-1">
          <Outlet
            context={{
              aside,
              setAside,
              isAboveMediumScreens,
              isAboveSmallScreens,
            }}
          />
        </main>
      </div>
    </div>
  );
}

export default RootLayout;
