import { Menu } from '@headlessui/react';
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/24/outline';

function Filter() {
  const iconStyle = 'h-[16px] text-color-gray-primary';
  const fontStyle = 'font-medium text-color-gray-primary';
  const flexStyle = 'flex items-center gap-3';
  return (
    <Menu>
      <Menu.Button
        className={`${flexStyle} ${fontStyle} rounded-md border border-color-gray-primary px-5 py-2`}
      >
        <FunnelIcon className={`${iconStyle} -mr-1.5`} aria-hidden="true" />
        Filter
        <ChevronDownIcon
          className={`${iconStyle} -ml-1.5`}
          aria-hidden="true"
        />
      </Menu.Button>
      <Menu.Items className="absolute text-center">
        <Menu.Item>
          {({ active }) => (
            <a className={`${active && 'bg-blue-500'}`} href="#">
              Mobile App
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default Filter;
