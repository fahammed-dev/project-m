// icons import
import {
  BellSnoozeIcon,
  CalendarDaysIcon,
  ChatBubbleLeftEllipsisIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

// other import
import { useOutletContext } from 'react-router-dom';

// images import
import Logo from '../assets/logo.png';
import Profile from '../assets/profile.png';

type MyContextType = {
  aside: boolean;
  isAboveMediumScreens: boolean;
  isAboveSmallScreens: boolean;
  setAside: (value: boolean) => void;
};

function Header() {
  const iconStyle = 'h-[24px] text-color-gray-primary';
  const flexStyle = 'flex items-center';
  const {
    aside,
    setAside,
    isAboveMediumScreens,
    isAboveSmallScreens,
  }: MyContextType = useOutletContext();

  // decide what to render
  let content = null;

  if (!aside && isAboveMediumScreens) {
    content = (
      <div className={`${flexStyle}`}>
        <img src={Logo} alt="Logo" className="mr-3" />
        <button onClick={() => setAside(!aside)}>
          <ChevronDoubleRightIcon className={`${iconStyle}`} />
        </button>
      </div>
    );
  }
  if (!isAboveMediumScreens) {
    content = (
      <div className={`${flexStyle}`}>
        <img src={Logo} alt="Logo" className="mr-3" />
        <button onClick={() => setAside(!aside)}>
          <ChevronDoubleRightIcon className={`${iconStyle}`} />
        </button>
      </div>
    );
  }
  if (!aside && !isAboveMediumScreens) {
    content = (
      <div className={`${flexStyle}`}>
        <img src={Logo} alt="Logo" className="mr-3" />
        <button onClick={() => setAside(!aside)}>
          <ChevronDoubleLeftIcon className={`${iconStyle}`} />
        </button>
      </div>
    );
  }

  return (
    <div className={`${flexStyle} justify-between`}>
      {/* search */}
      {content}
      {isAboveSmallScreens && (
        <form
          className={`${flexStyle} flex-[0_0_39%] ${
            !isAboveMediumScreens || (!aside && 'ml-5 flex-[0_0_55%]')
          } ${!aside && aside && '-ml-12 flex-[0_0_50%]'} ${
            isAboveMediumScreens && aside ? 'ml-5' : ''
          }`}
        >
          <input
            type="text"
            placeholder="Search for anything..."
            className={`relative bg-color-white-primary text-color-gray-primary ${
              !aside && isAboveMediumScreens ? 'mr-12' : ''
            } w-[100%] rounded-md py-2.5 pl-14 outline-none`}
          />
          <button className="absolute ml-3.5">
            <MagnifyingGlassIcon className={`${iconStyle}`} />
          </button>
        </form>
      )}
      <div className={`${flexStyle} ${isAboveMediumScreens ? 'gap-11' : ''}`}>
        {/* icons */}
        <div
          className={`${flexStyle} ${isAboveMediumScreens ? 'gap-5' : 'gap-3'}`}
        >
          {!isAboveSmallScreens && (
            <button>
              <MagnifyingGlassIcon className={`${iconStyle}`} />
            </button>
          )}
          <button>
            <CalendarDaysIcon className={`${iconStyle}`} />
          </button>
          <button>
            <ChatBubbleLeftEllipsisIcon className={`${iconStyle}`} />
          </button>
          <button className="before:absolute before:ml-1 before:mt-0.5 before:inline-block before:h-1.5 before:w-1.5 before:rounded-full before:bg-color-pink-primary before:content-['']">
            <BellSnoozeIcon className={`${iconStyle}`} />
          </button>
        </div>
        {/* profile */}
        <div
          className={`${flexStyle} gap-2.5 ${
            isAboveMediumScreens ? 'mr-5' : 'mr-0'
          }`}
        >
          {isAboveMediumScreens && (
            <div>
              <h5 className="text-right text-[16px] font-medium text-color-black-primary">
                Anima Agarwal
              </h5>
              <p className="text-right text-[14px] font-light text-color-gray-primary">
                U.P, India
              </p>
            </div>
          )}
          <img
            src={Profile}
            alt="Anima Agarwal"
            className={`${!isAboveMediumScreens && 'ml-3'} rounded-full`}
          />
          <button>
            <ChevronDownIcon className={`${iconStyle}`} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
