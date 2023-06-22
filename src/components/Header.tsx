import {
  BellSnoozeIcon,
  CalendarDaysIcon,
  ChatBubbleLeftEllipsisIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useOutletContext } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Profile from '../assets/profile.png';

type MyContextType = {
  aside: boolean;
  isAboveMediumScreens: boolean;
  setAside: (value: boolean) => void;
};

function Header() {
  const iconStyle = 'h-[24px] text-color-gray-primary';
  const flexStyle = 'flex items-center';
  const { aside, setAside, isAboveMediumScreens }: MyContextType =
    useOutletContext();

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
  console.log(aside);

  return (
    <div className={`${flexStyle} justify-between`}>
      {/* search */}
      {content}
      <form
        className={`${flexStyle} flex-[0_0_39%] ${
          !isAboveMediumScreens && 'flex-[0_0_47%]'
        } ${!aside && 'flex-[0_0_50%] -ml-12'} ${
          isAboveMediumScreens && aside ? 'ml-5' : ''
        }`}
      >
        <input
          type="text"
          placeholder="Search for anything..."
          className={`relative text-color-gray-primary bg-color-white-primary ${
            !aside && isAboveMediumScreens ? 'mr-12' : ''
          } pl-14 py-2.5 w-[100%] rounded-md outline-none`}
        />
        <button className="absolute ml-3.5">
          <MagnifyingGlassIcon className={`${iconStyle}`} />
        </button>
      </form>
      <div className={`${flexStyle} gap-11`}>
        {/* icons */}
        <div className={`${flexStyle} gap-5`}>
          <button>
            <CalendarDaysIcon className={`${iconStyle}`} />
          </button>
          <button>
            <ChatBubbleLeftEllipsisIcon className={`${iconStyle}`} />
          </button>
          <button>
            <BellSnoozeIcon className={`${iconStyle}`} />
          </button>
        </div>
        {/* profile */}
        <div className={`${flexStyle} gap-2.5 mr-5`}>
          <div>
            <h5 className="font-medium text-color-black-primary text-[16px] text-right">
              Anima Agarwal
            </h5>
            <p className="font-light text-color-gray-primary text-[14px] text-right">
              U.P, India
            </p>
          </div>
          <img src={Profile} alt="Anima Agarwal" className="rounded-full" />
          <button>
            <ChevronDownIcon className={`${iconStyle}`} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
