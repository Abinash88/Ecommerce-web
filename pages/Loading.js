const Loading = () => {
  return (
    <>
      <div className="w-screen bg-white h-screen flex flex-col items-center justify-center z-50 top-0 left-0 absolute">
        <h2 className='text-[30px] font-bold text-blue-900'>ECOM-WEB</h2>
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
