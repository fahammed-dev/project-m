import {
  ChatBubbleLeftEllipsisIcon,
  ChevronDoubleLeftIcon,
  ClipboardDocumentCheckIcon,
  Cog6ToothIcon,
  EllipsisHorizontalIcon,
  PlusCircleIcon,
  Squares2X2Icon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { LightBulbIcon } from '@heroicons/react/24/solid';
import Logo from '../assets/logo.png';

type Props = {
  aside: boolean;
  setAside: (value: boolean) => void;
};

function Sidebar({ aside, setAside }: Props) {
  const iconStyle = 'h-[24px] text-color-gray-primary';
  const fontStyle = 'font-medium text-color-gray-primary';
  const flexStyle = 'flex items-center gap-3';
  const spanStyle = 'h-2 w-2 inline-block rounded-full';
  const projectsStyle =
    'justify-between hover:bg-color-bg-lavender rounded-md py-2 px-3';

  return (
    <div>
      <header className="flex items-center justify-between px-5 py-[27.25px] border-b border-solid border-color-gray-secondary">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" height="24px" width="24px" />
          <h1 className="font-semibold text-[20px] ml-2">Project M.</h1>
        </div>
        <button onClick={() => setAside(!aside)}>
          <ChevronDoubleLeftIcon className="h-[20px] text-color-gray-primary" />
        </button>
      </header>
      <main>
        <div className="px-3 py-7 rounded-bl-[30px] h-[100%]">
          {/* pages */}
          <div className="flex flex-col gap-6 pl-2 border-b border-solid border-color-gray-secondary pb-7">
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
          <div className="flex flex-col py-7">
            <div className="flex justify-start items-center mb-4 pl-2.5">
              <p className="uppercase text-xs font-semibold text-color-gray-primary pr-[105px]">
                My Projects
              </p>
              <div>
                <PlusCircleIcon className="h-4 text-color-gray-primary" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className={`${projectsStyle} ${flexStyle}`}>
                <div className={`${flexStyle}`}>
                  <span
                    className={`${spanStyle} bg-color-green-primary`}
                  ></span>
                  <h4 className={`${fontStyle}`}>Mobile App</h4>
                </div>
                <EllipsisHorizontalIcon className={`${iconStyle}`} />
              </div>
              <div className={`${projectsStyle} ${flexStyle}`}>
                <div className={`${flexStyle}`}>
                  <span
                    className={`${spanStyle} bg-color-yellow-primary`}
                  ></span>
                  <h4 className={`${fontStyle}`}>Website Redesign</h4>
                </div>
                <EllipsisHorizontalIcon className={`${iconStyle} hidden`} />
              </div>
              <div className={`${projectsStyle} ${flexStyle}`}>
                <div className={`${flexStyle}`}>
                  <span
                    className={`${spanStyle} bg-color-lavender-secondary`}
                  ></span>
                  <h4 className={`${fontStyle}`}>Design System</h4>
                </div>
                <EllipsisHorizontalIcon className={`${iconStyle} hidden`} />
              </div>
              <div className={`${projectsStyle} ${flexStyle}`}>
                <div className={`${flexStyle}`}>
                  <span className={`${spanStyle} bg-color-blue-primary`}></span>
                  <h4 className={`${fontStyle}`}>Wireframes</h4>
                </div>
                <EllipsisHorizontalIcon className={`${iconStyle} hidden`} />
              </div>
            </div>
          </div>
          {/* message */}
          <div className="flex flex-col items-center  bg-color-white-primary px-5 pb-6 mx-2 rounded-2xl before:content[''] before:bg-color-white-primary before:h-[70px] before:w-[70px] before:rounded-full before:-mt-10 mt-16">
            <div className="-mt-11 mb-6">
              <LightBulbIcon
                className={`${iconStyle} text-color-yellow-secondary`}
              />
            </div>
            <h5 className="font-medium text-sm text-color-black-secondary">
              Thought Time
            </h5>
            <p className="text-xs text-color-gray-primary text-center py-3">
              We don’t have any notice for you, till then you can share your
              thoughts with your peers.
            </p>
            <button className="bg-color-white-secondary py-3 px-7 font-medium text-sm rounded">
              Write a message
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Sidebar;
