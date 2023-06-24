import { Column } from '@/components';
import { useState } from 'react';
import data from '../../data/kanbanData';

type ColumnData = {
  id: string;
  title: string;
  count: number;
  taskIds: number[];
};

type State = {
  columnOrder: string[];
  columns: {
    [key: string]: ColumnData;
  };
  tasks: {
    [key: number]: any;
  };
};

function MobileApp() {
  const flexStyle = 'flex gap-4';
  const [state, _setState] = useState<State>(data);
  return (
    <div className={`${flexStyle} flex-wrap justify-center`}>
      {state.columnOrder.map((columnId) => {
        const column = state.columns[columnId];
        const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </div>
  );
}

export default MobileApp;
