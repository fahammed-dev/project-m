import { ProjectHeader } from '@/components';
import { Outlet } from 'react-router-dom';

function ProjectLayout() {
  return (
    <div className="no-scrollbar max-h-[100vh] overflow-y-auto">
      <section className="px-11 pt-6">
        <ProjectHeader />
      </section>
      <section className="px-11 pt-6">
        <Outlet />
      </section>
    </div>
  );
}

export default ProjectLayout;
