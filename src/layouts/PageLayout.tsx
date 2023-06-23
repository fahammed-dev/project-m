import { Header } from '@/components';
import {
  ChatBubbleLeftEllipsisIcon,
  ClipboardDocumentCheckIcon,
  Cog6ToothIcon,
  PlusCircleIcon,
  Squares2X2Icon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { Outlet, useOutletContext } from 'react-router-dom';

type MyContextType = {
  aside: boolean;
  isAboveMediumScreens: boolean;
};

function PageLayout() {
  const { aside, isAboveMediumScreens }: MyContextType = useOutletContext();
  const iconStyle = 'h-[24px] text-color-gray-primary';
  const fontStyle = 'font-medium text-color-gray-primary';
  const flexStyle = 'flex items-center gap-3';
  const beforeContent =
    "before:content-[''] before:h-2 before:w-2 before:inline-block before:rounded-full before:mb-0.5 before:mr-4";

  // decide what to render
  let content = null;

  if (!aside && !isAboveMediumScreens) {
    content = (
      <div className="absolute h-[100%] rounded-bl-[30px] bg-color-white-primary px-6 py-6">
        {/* pages */}
        <div className="flex flex-col gap-6 border-b border-solid border-color-gray-secondary pb-8">
          <div className={`${flexStyle}`}>
            <Squares2X2Icon className={`${iconStyle}`} />
            <h4 className={`${fontStyle}`}>Home</h4>
          </div>
          <div className={`${flexStyle}`}>
            <ChatBubbleLeftEllipsisIcon className={`${iconStyle}`} />
            <h4 className={`${fontStyle}`}>Messages</h4>
          </div>
          <div className={`${flexStyle}`}>
            <ClipboardDocumentCheckIcon className={`${iconStyle}`} />
            <h4 className={`${fontStyle}`}>Tasks</h4>
          </div>
          <div className={`${flexStyle}`}>
            <UsersIcon className={`${iconStyle}`} />
            <h4 className={`${fontStyle}`}>Members</h4>
          </div>
          <div className={`${flexStyle}`}>
            <Cog6ToothIcon className={`${iconStyle}`} />
            <h4 className={`${fontStyle}`}>Settings</h4>
          </div>
        </div>
        {/* projects */}
        <div className="flex flex-col py-8">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase text-color-gray-primary">
              My Projects
            </p>
            <PlusCircleIcon className="h-3.5 text-color-gray-primary" />
          </div>
          <div className="flex flex-col gap-6 pt-6">
            <div>
              <h4
                className={`${fontStyle} ${beforeContent} before:bg-color-green-primary`}
              >
                Mobile App
              </h4>
            </div>
            <div>
              <h4
                className={`${fontStyle} ${beforeContent} before:bg-color-yellow-primary`}
              >
                Website Redesign
              </h4>
            </div>
            <div>
              <h4
                className={`${fontStyle} ${beforeContent} before:bg-color-lavender-secondary`}
              >
                Design System
              </h4>
            </div>
            <div>
              <h4
                className={`${fontStyle} ${beforeContent} before:bg-color-blue-primary`}
              >
                Wireframes
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <header
        className={`relative border-b border-solid border-color-gray-secondary px-6 py-5`}
      >
        <Header />
      </header>
      {/* responsive menu */}
      {content}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default PageLayout;
