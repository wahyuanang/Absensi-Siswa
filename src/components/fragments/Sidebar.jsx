import Logo from "../../../public/images/logo-presently.png";

const Sidebar = () => {
  return (
    <>
      <div className="h-screen">
        <div className="flex items-center gap-[10px] mt-[25px] ml-[40px]">
          <img src={Logo} alt="" />
          <p className="text-[28px] font-bold text-[#116E63]">Presently</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
