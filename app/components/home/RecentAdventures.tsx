export default function RecentAdventures() {
  return (
    <div className="p-2 flex flex-col items-center pr-[60px]">
      <h2>Recent Adventures</h2>
      <div className="w-full flex flex-col md:flex-row md:h-[70vh] min-h-[70vh] max-w-[1326px] md:w-4/5">
        <div className="flex max-w-[70vh] h-full grow hover:grow-[7] transition-flex duration-800 ease-in bg-red-700 bg-cover bg-no-repeat bg-center bg-[url('/lowri_roberts_working.png')]"></div>
        <div className="flex max-w-[70vh] grow h-full hover:grow-[7] transition-flex duration-800 ease-in bg-blue-700 bg-cover bg-no-repeat bg-center bg-[url('/lowri_roberts_working.png')]"></div>
        <div className="flex max-w-[70vh] grow hover:grow-[7] transition-flex duration-800 ease-in bg-green-700 bg-cover bg-no-repeat bg-center bg-[url('/lowri_roberts_working.png')]"></div>
        <div className="flex max-w-[70vh] grow  h-full hover:grow-[7] transition-flex duration-800 ease-in bg-black bg-cover bg-no-repeat bg-center bg-[url('/lowri_roberts_working.png')]"></div>
        <div className="flex max-w-[70vh] grow h-full hover:grow-[7] transition-flex duration-800 ease-in bg-white bg-cover bg-no-repeat bg-center bg-[url('/lowri_roberts_working.png')]"></div>
      </div>
    </div>
  );
}
