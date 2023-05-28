import Headers from "./Headers"

const Layout = ({children}) => {
  return (
    <>
        <main>
          <div className="">
            <Headers/>
          </div>
          <div className="">
            {children}
          </div>
        </main>
    </>
  )
}

export default Layout