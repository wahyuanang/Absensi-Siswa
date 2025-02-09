import Logo from "../../../public/images/logo-presently.png";
import HomeIcon from "../../../public/icons/icon-home.svg";
import ClassIcon from "../../../public/icons/icon-class.svg";
import SettingIcon from "../../../public/icons/icon-setting.svg";
import ExitIcon from "../../../public/icons/icon-exit.svg";

const Sidebar = () => {
  return (
    <>
      <div className="h-screen">
        <div className="h-full pt-[25px] pl-[40px] pb-[40px] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-[10px] ">
              <img src={Logo} alt="" />
              <p className="text-[28px] font-bold text-[#116E63]">Presently</p>
            </div>

            <div className="flex items-center gap-[28px] mt-[70px] mb-[30px]">
              <img src={HomeIcon} alt="" />
              <p className="text-[20px] text-[#116E63] font-semibold">Home</p>
            </div>
            <div className="flex items-center gap-[28px]">
              <img src={ClassIcon} alt="" />
              <p className="text-[20px] text-[#116E63] font-semibold">
                Your Class
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[22px]">
            <div className="flex items-center">
              <img src={SettingIcon} alt="" />
              <p>Settings</p>
            </div>
            <div className="flex items-center">
              <img src={ExitIcon} alt="" />
              <p>Exit</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
