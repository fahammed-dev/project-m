import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { Card } from '..';

function Column() {
  const flexStyle = 'flex items-center gap-3';
  const spanStyle = 'h-2 w-2 inline-block rounded-full';
  return (
    <div className="flex-[0_0_30%] rounded-2xl bg-color-white-primary p-5 pt-0">
      <div className="pb-6">
        <div
          className={`${flexStyle} justify-between border-b-[3px] border-color-lavender-primary`}
        >
          <div className={`${flexStyle} p-4`}>
            <span className={`${spanStyle} bg-color-lavender-primary`}></span>
            <h4 className="font-medium text-color-black-primary">To Do</h4>
            <span className="h-5 w-5 rounded-full bg-color-gray-secondary text-center text-xs font-medium leading-5 text-color-gray-primary">
              4
            </span>
          </div>
          <button className="h-[24px] w-[24px]">
            <PlusCircleIcon
              className={`rounded-md bg-color-bg-lavender-primary p-0.5 text-color-lavender-primary`}
            />
          </button>
        </div>
      </div>
      <Card />
    </div>
  );
}

export default Column;
