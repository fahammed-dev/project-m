import {
  ChatBubbleLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  FolderMinusIcon,
} from '@heroicons/react/24/outline';
import CardImg1 from '../../assets/card-img-1.png';
import Img1 from '../../assets/invite-img-1.png';
import Img3 from '../../assets/invite-img-3.png';
import Img2 from '../../assets/invite-img-4.png';

function Card() {
  const iconStyle = 'h-[16px] text-color-gray-primary';
  const flexStyle = 'flex items-center gap-3';

  return (
    <div className="rounded-2xl bg-color-white-secondary p-5">
      <div className={`${flexStyle} justify-between`}>
        <span className="rounded-md bg-color-yellow-bg px-1.5 py-1 text-xs font-medium text-color-yellow-primary">
          Low
        </span>
        <EllipsisHorizontalIcon
          className={`h-[24px] text-color-black-primary`}
        />
      </div>
      <h3 className="py-0.5">Onboarding Illustrations</h3>
      <div className={`${flexStyle} w-[274px] pb-7`}>
        <div className="flex-[0_0_50%]">
          <img src={CardImg1} alt="Illustrations" />
        </div>
        <div className="flex-[0_0_50%]">
          <img src={CardImg1} alt="Illustrations" />
        </div>
      </div>
      <div className={`${flexStyle} justify-between`}>
        <div className={`${flexStyle} -space-x-5 overflow-hidden`}>
          <img
            src={Img1}
            alt="User"
            className="z-30"
            width="24px"
            height="24px"
          />
          <img
            src={Img2}
            alt="User"
            className="z-20"
            width="24px"
            height="24px"
          />
          <img
            src={Img3}
            alt="User"
            className="z-10"
            width="24px"
            height="24px"
          />
        </div>
        <div className={`${flexStyle}`}>
          <span
            className={`${flexStyle} text-xs font-medium text-color-gray-primary`}
          >
            <ChatBubbleLeftEllipsisIcon className={`${iconStyle}`} /> 14
            comments
          </span>
          <span
            className={`${flexStyle} text-xs font-medium text-color-gray-primary`}
          >
            <FolderMinusIcon className={`${iconStyle}`} /> 15 files
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
