import { HiOutlineMenu, HiPlus } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { CgSearch } from "react-icons/cg";
import { PiTerminalBold } from "react-icons/pi";
import { BsFillCaretDownFill, BsRecordCircle } from "react-icons/bs";
import { BiGitPullRequest, BiCode, BiLineChart } from "react-icons/bi";
import { MdNotifications, MdOutlineSettings } from "react-icons/md";
import { GoPlay, GoProjectSymlink } from "react-icons/go";
import { FaBookOpen } from "react-icons/fa";
import { LuShieldAlert } from "react-icons/lu";

import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav-top">
        <div className="nav-left">
          <div className="left-first">
            <HiOutlineMenu color="#7d8590" size={20} />
          </div>

          <div className="left-second">
            <SiGithub color="#e6edf3" size={35} />
          </div>

          <div className="left-third">
              <p>roberodin /</p>
            <p>ha-samsungtv-custom</p>
          </div>
        </div>

        <div className="nav-right">
          <div className="right-first-2">
            <CgSearch color="#7d8590" size={15} />
          </div>

          <div className="right-first">
            <div>
              <CgSearch color="#7d8590" size={15} />
            </div>
            <input type="text" placeholder={"Type  /  to search"} />
            <p>|</p>
            <div>
              <PiTerminalBold color="#7d8590" size={15} />
            </div>
          </div>

          <div className="right-second">
            <HiPlus color="#7d8590" size={15} />

            <BsFillCaretDownFill color="#7d8590" size={10} />
          </div>

          <div className="right-third">
            <BsRecordCircle color="#7d8590" size={15} />
          </div>

          <div className="right-fourth">
            <BiGitPullRequest color="#7d8590" size={15} />
          </div>

          <div className="right-fifth">
            <MdNotifications color="#7d8590" size={15} />
          </div>

          <div className="right-sixth">
            <img
              src="https://avatars.githubusercontent.com/u/103603587?v=4"
              alt="profile"
            />
          </div>
        </div>
      </div>

      <div className="nav-bottom">
        <div>
          <BiCode color="#7d8590" size={20} />
          <p>Code</p>
        </div>

        <div>
          <BsRecordCircle color="#7d8590" size={17} />
          <p>Issues</p>
        </div>

        <div>
          <BiGitPullRequest color="#7d8590" size={20} />
          <p>Pull requests</p>
        </div>

        <div>
          <GoPlay color="#7d8590" size={20} />
          <p>Actions</p>
        </div>

        <div>
          <GoProjectSymlink color="#7d8590" size={20} />
          <p>Projects</p>
        </div>

        <div>
          <FaBookOpen color="#7d8590" size={20} />
          <p>Wiki</p>
        </div>

        <div>
          <LuShieldAlert color="#7d8590" size={20} />
          <p>Security</p>
        </div>

        <div>
          <BiLineChart color="#7d8590" size={20} />
          <p>Insights</p>
        </div>

        <div>
          <MdOutlineSettings color="#7d8590" size={20} />
          <p>Settings</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
