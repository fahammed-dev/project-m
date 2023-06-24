import { Date, Filter } from '@/components';
import {
  Bars2Icon,
  EllipsisHorizontalCircleIcon,
  PencilIcon,
  PlusCircleIcon,
  Squares2X2Icon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import Image1 from '../assets/invite-img-1.png';
import Image2 from '../assets/invite-img-2.png';
import Image3 from '../assets/invite-img-3.png';
import Image4 from '../assets/invite-img-4.png';

function ProjectHeader() {
  const iconStyle = 'h-[28px] text-color-gray-primary';
  const fontStyle = 'font-medium text-color-gray-primary';
  const flexStyle = 'flex items-center';
  return (
    <div>
      <div className={`${flexStyle} flex-wrap justify-between`}>
        <div className={`${flexStyle} gap-3`}>
          <h1 className="mr-1.5 text-[46px] font-semibold">Mobile App</h1>
          <button>
            <PencilIcon
              className={`${iconStyle} rounded-md bg-color-bg-lavender-primary p-1 text-color-lavender-primary`}
            />
          </button>
          <button>
            <EllipsisHorizontalCircleIcon
              className={`${iconStyle} rounded-md bg-color-bg-lavender-primary p-0.5 text-color-lavender-primary`}
            />
          </button>
        </div>
        <div className={`${flexStyle}`}>
          <button>
            <PlusCircleIcon
              className={`h-[18px] rounded-md bg-color-bg-lavender-primary p-0.5 text-color-lavender-primary`}
            />
          </button>
          <Link
            to="#"
            className="mx-2 text-base font-medium text-color-lavender-primary"
          >
            Invite
          </Link>
          <div className={`${flexStyle} -space-x-2 overflow-hidden`}>
            <img src={Image1} alt="Image1 z-10" />
            <img src={Image2} alt="Image1 z-11" />
            <img src={Image3} alt="Image1 z-12" />
            <img src={Image4} alt="Image1 z-13" />
            <span className="z-14 h-10 w-10 rounded-full bg-color-pink-secondary text-center font-medium leading-10 text-color-pink-primary">
              +2
            </span>
          </div>
        </div>
      </div>
      <div className={`${flexStyle} mb-4 mt-8 flex-wrap justify-between`}>
        <div className={`${flexStyle} gap-3`}>
          <div>
            <Filter />
          </div>
          <div>
            <Date />
          </div>
        </div>
        <div className={`${flexStyle} gap-5`}>
          <Link
            to="#"
            className={`${flexStyle} ${fontStyle} rounded-md border border-color-gray-primary px-3 py-1.5`}
          >
            <UsersIcon className={`mr-1.5 h-[15px] text-color-gray-primary`} />
            Share
          </Link>
          <span className="h-8 border-r border-color-gray-primary"></span>
          <button className="rounded-md bg-color-lavender-primary">
            <Bars2Icon className="h-[40px] p-1 text-color-white-secondary" />
          </button>
          <button>
            <Squares2X2Icon className="h-[21px] text-color-gray-primary" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;
