import { Column } from '@/components';

function MobileApp() {
  const flexStyle = 'flex items-center gap-5';
  return (
    <div className={`${flexStyle}`}>
      <Column />
      <Column />
      <Column />
    </div>
  );
}

export default MobileApp;
