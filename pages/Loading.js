const Loading = () => {
  return (
    <>
      <div className="w-screen bg-white h-screen flex items-center justify-center top-0 left-0 absolute">
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
