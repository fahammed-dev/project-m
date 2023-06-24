import {
  ChatBubbleLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  FolderMinusIcon,
} from '@heroicons/react/24/outline';
import CardImg1 from '../../assets/card-img-1.png';

type PropsType = {
  task: Task;
};

type Task = {
  id: number;
  tag: 'Low' | 'Medium' | 'High';
  title: string;
  description: string;
  users: { id: number; src: string }[];
  comments: number;
  files: number;
};

function Card({ task }: PropsType) {
  console.log(task);

  const iconStyle = 'h-[16px] text-color-gray-primary';
  const flexStyle = 'flex items-center gap-3';

  return (
    <div className="mb-5 rounded-2xl bg-color-white-secondary p-5">
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
          {task.users.map((user) => (
            <img
              src={user.src}
              alt="User"
              className="z-30 rounded-full"
              width="24px"
              height="24px"
              key={user.id}
            />
          ))}
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
