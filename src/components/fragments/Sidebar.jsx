import { useState } from "react";
import Logo from "../../../public/images/logo-presently.png";
import HomeIcon from "../../../public/icons/icon-home.svg";
import ClassIcon from "../../../public/icons/icon-class.svg";
import SettingIcon from "../../../public/icons/icon-setting.svg";
import ExitIcon from "../../../public/icons/icon-exit.svg";
import UpIcon from "../../../public/icons/icon-up.svg";
import DownIcon from "../../../public/icons/icon-down.svg";
import CourseProfileIcon from "../../../public/icons/icon-course-profile.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const options = [
    "Pemrograman Web",
    "Pengembangan Game",
    "Rekayasa Perangkat Lunak",
    "Data Mining",
    "Data Mining",
    "Data Mining",
    "Data Mining",
    "Data Mining",
    "Data Mining",
    "Data Mining",
    "Data Mining",
    "Data Mining",
  ];

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

              <div className="w-full relative flex gap-[70px]">
                <button
                  className="flex items-center gap-[70px] "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <p className="text-[20px] text-[#116E63] font-semibold">
                    Your Class
                  </p>
                  <img src={isOpen ? UpIcon : DownIcon} alt="" />
                </button>
                {isOpen && (
                  <div className="mt-[50px] absolute">
                    <ul className="max-h-[200px] overflow-y-auto ">
                      {options.map((option, index) => (
                        <li
                          className="flex gap-3 items-center mb-[20px]"
                          key={index}
                        >
                          <img src={CourseProfileIcon} alt="" />
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
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
