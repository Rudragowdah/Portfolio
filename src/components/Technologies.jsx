import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandNodejs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import PythonLogo from "../assets/PythonLogo.jpg";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-4xl text-center">Technologies</h1>
      <div className="flex flex-wrap justify-center gap-4 text-center">
        <div className="rounded-2xl border-4 border-orange-800 pb-4">
            <FaHtml5 className="text-7xl rounded-2xl text-orange-600 bg-white"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 pb-4">
            <IoLogoCss3 className="text-7xl text-blue-500 bg-white  "/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 pb-4">
            <SiJavascript className="text-7xl text-yellow-300"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 pb-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 pb-4">
            <BiLogoMongodb className="text-7xl text-green-500"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 pb-4">
            <TbBrandNodejs className="text-7xl text-green-500"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 pb-4">
            <SiTailwindcss className="text-7xl text-cyan-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 pb-4">
            <FaBootstrap className="text-7xl bg-white text-blue-600 "/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 pb-4">
            <img src={PythonLogo} alt="Python Logo" className="object-scale-down w-14 rounded-2xl"/>
        </div>
      </div>
    </div>
  )
}

export default Technologies;
