import { ProjectHeader } from '@/components';
import { Outlet } from 'react-router-dom';

function ProjectLayout() {
  return (
    <div>
      <section>
        <ProjectHeader />
      </section>
      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default ProjectLayout;
