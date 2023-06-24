import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { Card } from '..';

type PropsType = {
  column: ColumnData;
  tasks: Task[];
};

type ColumnData = {
  id: string;
  title: string;
  count: number;
  taskIds: number[];
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

function Column({ column, tasks }: PropsType) {
  const { title, count, id } = column;

  const flexStyle = 'flex items-center gap-3';
  const spanStyle = 'h-2 w-2 inline-block rounded-full';

  // decide color
  let color = null;
  if (id === 'column-1') {
    color = '-color-lavender-primary';
  }
  if (id === 'column-2') {
    color = '-color-yellow-primary';
  }
  if (id === 'column-3') {
    color = '-color-green-primary';
  }

  return (
    <div className="flex-[0_0_32.3%] rounded-2xl bg-color-white-primary p-5 pt-0">
      <div className="pb-6">
        <div
          className={`${flexStyle} justify-between border-b-[3px] border${color}`}
        >
          <div className={`${flexStyle} p-4`}>
            <span className={`${spanStyle} bg${color}`}></span>
            <h4 className="font-medium text-color-black-primary">{title}</h4>
            <span className="h-5 w-5 rounded-full bg-color-gray-secondary text-center text-xs font-medium leading-5 text-color-gray-primary">
              {count}
            </span>
          </div>
          {id === 'column-1' && (
            <button className="h-[24px] w-[24px]">
              <PlusCircleIcon
                className={`rounded-md bg-color-bg-lavender-primary p-0.5 text-color-lavender-primary`}
              />
            </button>
          )}
        </div>
      </div>
      {tasks.map((task) => (
        <Card task={task} key={task.id} />
      ))}
    </div>
  );
}

export default Column;
