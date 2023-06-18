import Headers from "./Headers";
import SideBar from "./SideBar";

const Layout = ({ children }) => {

  return (
    <>
      <main>
        <div className="">
          <Headers />
        </div>
        <div className="flex">
          <div className="relative ">
            <SideBar />
          </div>
          <div style={{height:'calc(100vh - 55px)'}}  className="w-full overflow-auto ">{children}</div>
        </div>
      </main>
    </>
  );
};

export default Layout;
