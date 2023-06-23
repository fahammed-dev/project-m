import { Menu } from '@headlessui/react';
import { CalendarDaysIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

function Date() {
  const iconStyle = 'h-[16px] text-color-gray-primary';
  const fontStyle = 'font-medium text-color-gray-primary';
  const flexStyle = 'flex items-center gap-3';
  return (
    <Menu>
      <Menu.Button
        className={`${flexStyle} ${fontStyle} rounded-md border border-color-gray-primary px-4 py-2`}
      >
        <CalendarDaysIcon
          className={`${iconStyle} -mr-1.5`}
          aria-hidden="true"
        />
        Today
        <ChevronDownIcon
          className={`${iconStyle} -ml-1.5`}
          aria-hidden="true"
        />
      </Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Next day
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default Date;
