import { Sidebar } from '@/components';
import { useMediaQuery } from '@/hooks';

import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  const [aside, setAside] = useState<boolean>(true);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

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
    <div className=" app py-5">
      <div className="flex bg-color-white-secondary mx-auto rounded-[30px] max-w-[1440px] max-h-[932px] h-[932px] overflow-hidden w-[100%] drop-shadow-2xl">
        {content}
        <main className="flex-1">
          <Outlet context={{ aside, setAside, isAboveMediumScreens }} />
        </main>
      </div>
    </div>
  );
}

export default RootLayout;
