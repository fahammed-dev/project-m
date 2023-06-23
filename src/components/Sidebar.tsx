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
import { Link } from 'react-router-dom';
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
      <header className="flex items-center justify-between border-b border-solid border-color-gray-secondary px-5 py-[27.25px]">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" height="24px" width="24px" />
          <h1 className="ml-2 text-[20px] font-semibold">Project M.</h1>
        </div>
        <button onClick={() => setAside(!aside)}>
          <ChevronDoubleLeftIcon className="h-[20px] text-color-gray-primary" />
        </button>
      </header>
      <main>
        <div className="h-[100%] rounded-bl-[30px] px-3 py-7">
          {/* pages */}
          <div className="flex flex-col gap-6 border-b border-solid border-color-gray-secondary pb-7 pl-2">
            <Link to="#" className={`${flexStyle}`}>
              <Squares2X2Icon className={`${iconStyle}`} />
              <h4 className={`${fontStyle}`}>Home</h4>
            </Link>
            <Link to="#" className={`${flexStyle}`}>
              <ChatBubbleLeftEllipsisIcon className={`${iconStyle}`} />
              <h4 className={`${fontStyle}`}>Messages</h4>
            </Link>
            <Link to="#" className={`${flexStyle}`}>
              <ClipboardDocumentCheckIcon className={`${iconStyle}`} />
              <h4 className={`${fontStyle}`}>Tasks</h4>
            </Link>
            <Link to="#" className={`${flexStyle}`}>
              <UsersIcon className={`${iconStyle}`} />
              <h4 className={`${fontStyle}`}>Members</h4>
            </Link>
            <Link to="#" className={`${flexStyle}`}>
              <Cog6ToothIcon className={`${iconStyle}`} />
              <h4 className={`${fontStyle}`}>Settings</h4>
            </Link>
          </div>
          {/* projects */}
          <div className="flex flex-col py-7">
            <div className="mb-4 flex items-center justify-start pl-2.5">
              <p className="pr-[105px] text-xs font-semibold uppercase text-color-gray-primary">
                My Projects
              </p>
              <button>
                <PlusCircleIcon className="h-4 text-color-gray-primary" />
              </button>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className={`${projectsStyle} ${flexStyle}`}>
                <Link to="#" className={`${flexStyle}`}>
                  <span
                    className={`${spanStyle} bg-color-green-primary`}
                  ></span>
                  <h4 className={`${fontStyle}`}>Mobile App</h4>
                </Link>
                <EllipsisHorizontalIcon className={`${iconStyle}`} />
              </div>
              <Link to="#" className={`${projectsStyle} ${flexStyle}`}>
                <div className={`${flexStyle}`}>
                  <span
                    className={`${spanStyle} bg-color-yellow-primary`}
                  ></span>
                  <h4 className={`${fontStyle}`}>Website Redesign</h4>
                </div>
                <EllipsisHorizontalIcon className={`${iconStyle} hidden`} />
              </Link>
              <Link to="#" className={`${projectsStyle} ${flexStyle}`}>
                <div className={`${flexStyle}`}>
                  <span
                    className={`${spanStyle} bg-color-lavender-secondary`}
                  ></span>
                  <h4 className={`${fontStyle}`}>Design System</h4>
                </div>
                <EllipsisHorizontalIcon className={`${iconStyle} hidden`} />
              </Link>
              <Link to="#" className={`${projectsStyle} ${flexStyle}`}>
                <div className={`${flexStyle}`}>
                  <span className={`${spanStyle} bg-color-blue-primary`}></span>
                  <h4 className={`${fontStyle}`}>Wireframes</h4>
                </div>
                <EllipsisHorizontalIcon className={`${iconStyle} hidden`} />
              </Link>
            </div>
          </div>
          {/* message */}
          <div className="before:content[''] mx-2 mt-16  flex flex-col items-center rounded-2xl bg-color-white-primary px-5 pb-6 before:-mt-10 before:h-[70px] before:w-[70px] before:rounded-full before:bg-color-white-primary">
            <div className="-mt-11 mb-6">
              <LightBulbIcon
                className={`${iconStyle} text-color-yellow-secondary`}
              />
            </div>
            <h5 className="text-sm font-medium text-color-black-secondary">
              Thought Time
            </h5>
            <p className="py-3 text-center text-xs text-color-gray-primary">
              We don’t have any notice for you, till then you can share your
              thoughts with your peers.
            </p>
            <button className="rounded bg-color-white-secondary px-7 py-3 text-sm font-medium">
              Write a message
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Sidebar;
