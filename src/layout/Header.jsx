import React, {useContext} from "react";
//sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
//icons
import { BsBag } from "react-icons/bs";


const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  return (
    <header className='bg-gray-200 h-14 flex items-center justify-end p-4'>

      <div onClick={()=> setIsOpen(!isOpen)} className='cursor-pointer  relative'>
        <BsBag className='text-2xl '/>
      </div>
    </header>
  );
};

export default Header;
