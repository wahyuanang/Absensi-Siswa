import Sidebar from "../components/fragments/sidebar";

const HomePageUser = () => {
  return (
    <>
      <div className="flex">
        <div className="w-1/4 shadow-[5px_0_43px_-17px_rgba(0,0,0,0.2)]">
          <Sidebar></Sidebar>
        </div>
        <div>
          <h1>hello Home Page User</h1>
        </div>
      </div>
    </>
  );
};

export default HomePageUser;
