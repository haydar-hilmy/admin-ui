import Header from "../Fragments/Header";
import Navbar from "../Fragments/Navbar";

const MainLayout = (props) => {
  const { children, type } = props
  return (
    <div className="flex bg-main-bg w-screen min-h-screen max-w-full">
      {/* navbar start*/}
      <Navbar type={type} />
      {/* navbar end*/}
      <div className="w-screen">
        {/* header start*/}
        <Header />

        {/* header end*/}
        {/* content start*/}
        <main className="px-6 py-4">
          {children}
        </main>
        {/* content end*/}
      </div>
    </div>
  );
};

export default MainLayout;