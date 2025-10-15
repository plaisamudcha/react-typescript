// import Guest from './Guest';

import Auth from './Auth';

export default function Container() {
  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <main className="p-8 flex gap-4 justify-center items-start max-w-2xl w-full">
        {/* <Guest /> */}
        <Auth />
      </main>
    </div>
  );
}
