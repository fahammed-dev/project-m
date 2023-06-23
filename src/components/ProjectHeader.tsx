import { Date, Filter } from '@/components';
import {
  Bars2Icon,
  EllipsisHorizontalCircleIcon,
  PencilIcon,
  PlusCircleIcon,
  Squares2X2Icon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import Image1 from '../assets/invite-img-1.png';
import Image2 from '../assets/invite-img-2.png';
import Image3 from '../assets/invite-img-3.png';
import Image4 from '../assets/invite-img-4.png';

function ProjectHeader() {
  const iconStyle = 'h-[16px] text-color-gray-primary';
  const fontStyle = 'font-medium text-color-gray-primary';
  const flexStyle = 'flex items-center';
  return (
    <div>
      <div className={`${flexStyle} justify-between pb-7`}>
        <div className={`${flexStyle} gap-3`}>
          <h1 className="mr-1.5 text-[46px] font-semibold">Mobile App</h1>
          <PencilIcon
            className={`${iconStyle} rounded-md bg-color-bg-lavender p-1 text-color-lavender-primary`}
          />
          <EllipsisHorizontalCircleIcon
            className={`${iconStyle} rounded-md bg-color-bg-lavender p-0.5 text-color-lavender-primary`}
          />
        </div>
        <div className={`${flexStyle}`}>
          <PlusCircleIcon
            className={`${iconStyle} h-[15px] rounded-md bg-color-bg-lavender p-0.5 text-color-lavender-primary`}
          />
          <span className="mx-2 text-base font-medium text-color-lavender-primary">
            Invite
          </span>
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
      <div className={`${flexStyle} justify-between`}>
        <div className={`${flexStyle} gap-3`}>
          <Filter />
          <Date />
        </div>
        <div className={`${flexStyle} gap-5`}>
          <div
            className={`${flexStyle} ${fontStyle} rounded-md border border-color-gray-primary px-3 py-2`}
          >
            <UsersIcon className={`${iconStyle} mr-1.5`} />
            Share
          </div>
          <span className="h-8 border-r border-color-gray-primary"></span>
          <div className="rounded-md bg-color-lavender-primary">
            <Bars2Icon className="h-10 p-1 text-color-white-secondary" />
          </div>
          <div>
            <Squares2X2Icon className="h-[21px] text-color-gray-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;
