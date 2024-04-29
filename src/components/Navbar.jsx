import React,{useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';



const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return  (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4c text-white'>
      <a href='*'><h1 className='w-full text-3xl font-bold text-[#00dbdf] m-4'>REACTVIEW</h1> </a>

    <ul className='hidden md:flex'>
        <li className='p-4' ><a href='*' className='hover:text-[#00dbdf]'>Home</a></li>
        <li className='p-4'><a href='*' className='hover:text-[#00dbdf]'>Company</a></li>
        <li className='p-4'><a href='*' className='hover:text-[#00dbdf]'>Resources</a></li>
        <li className='p-4'><a href='*' className='hover:text-[#00dbdf]'>About</a></li>
        <li className='p-4'><a href='*' className='hover:text-[#00dbdf]'>Contact</a></li>

    </ul>

    <div onClick={handleNav} className='block md:hidden mr-4'>
      {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}

</div>
<div className= {nav ? 'fixed  left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
<h1 className='w-full text-3xl font-bold text-[#00dbdf] m-4 '>TAILWIND</h1> 

  <ul className='uppercase p-4 '>
    <li className='p-4 border-b border-b-gray-600 ' ><a href='*' className='hover:text-[#00dbdf]'>Home</a></li>
     <li className='p-4 border-b border-b-gray-600'><a href='*' className='hover:text-[#00dbdf]'>Company</a></li>
     <li className='p-4 border-b border-b-gray-600'><a href='*' className='hover:text-[#00dbdf]'>Resources</a></li>
     <li className='p-4 border-b border-b-gray-600'><a href='*' className='hover:text-[#00dbdf]'>About</a></li>
     <li className='p-4 border-b border-b-gray-600 '><a href='*' className='hover:text-[#00dbdf]'>Contact</a></li>

</ul>
</div>

    </div>

  )
}

export default Navbar