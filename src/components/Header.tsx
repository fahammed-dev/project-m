import {
  BellSnoozeIcon,
  CalendarDaysIcon,
  ChatBubbleLeftEllipsisIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import Profile from '../assets/profile.png';

function Header() {
  const iconStyle = 'h-[24px] text-color-gray-primary';
  const flexStyle = 'flex items-center';
  return (
    <div className={`${flexStyle} justify-between`}>
      {/* search */}
      <form className={`${flexStyle} flex-[0_0_38%]`}>
        <input
          type="text"
          placeholder="Search for anything..."
          className="relative text-color-gray-primary bg-color-white-primary pl-14 py-2.5 w-[100%] rounded-md outline-none"
        />
        <button className="absolute ml-3.5">
          <MagnifyingGlassIcon className={`${iconStyle}`} />
        </button>
      </form>
      <div className={`${flexStyle} gap-10`}>
        {/* icons */}
        <div className={`${flexStyle} gap-5`}>
          <div>
            <CalendarDaysIcon className={`${iconStyle}`} />
          </div>
          <div>
            <ChatBubbleLeftEllipsisIcon className={`${iconStyle}`} />
          </div>
          <div>
            <BellSnoozeIcon className={`${iconStyle}`} />
          </div>
        </div>
        {/* profile */}
        <div className={`${flexStyle} gap-4`}>
          <div>
            <h5 className="font-medium text-color-black-primary text-[16px] text-right">
              Anima Agarwal
            </h5>
            <p className="font-light text-color-gray-primary text-[14px] text-right">
              U.P, India
            </p>
          </div>
          <img src={Profile} alt="Anima Agarwal" className="rounded-full" />
          <div>
            <ChevronDownIcon className={`${iconStyle}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
