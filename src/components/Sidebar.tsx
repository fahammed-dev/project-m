import { ChevronDoubleLeftIcon } from '@heroicons/react/24/outline';
import Logo from '../assets/logo.png';

function Sidebar() {
  return (
    <div>
      <header className="flex items-center justify-between px-6 py-[27.25px] border-b border-solid border-color-gray-secondary">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" height="24px" width="24px" />
          <h1 className="font-semibold text-[20px] ml-2	">Project M.</h1>
        </div>
        <div>
          <ChevronDoubleLeftIcon className="h-[20px] text-color-gray-primary" />
        </div>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}

export default Sidebar;
