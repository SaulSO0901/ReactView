import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00dbdf]'>REACTVIEW</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <a href='*'><FaFacebookSquare size={30} className='hover:text-[#00dbdf]' /></a>
             <a href='*'><FaInstagram size={30} className='hover:text-[#00dbdf]' /></a>
             <a href='*'> <FaTwitterSquare size={30} className='hover:text-[#00dbdf]' /></a>
             <a href='https://github.com/SaulSO0901'><FaGithubSquare size={30} className='hover:text-[#00dbdf]' /></a>
             <a href='*'> <FaDribbbleSquare size={30} className='hover:text-[#00dbdf]' /></a>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'><a href='*'>Solutions</a></h6>
        <ul>
            <li className='py-2 text-sm hover:text-[#00dbdf]'><a href='*'>Analytics</a></li>
            <li className='py-2 text-sm hover:text-[#00dbdf]'><a href='*'>Marketing</a></li>
            <li className='py-2 text-sm hover:text-[#00dbdf]'><a href='*'>Commerce</a></li>
            <li className='py-2 text-sm hover:text-[#00dbdf]'><a href='*'>Insights</a></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm hover:text-[#00dbdf]'><a href='*'>Pricing</a></li>
            <li className='py-2 text-sm hover:text-[#00dbdf]'><a href='*'>Documentation</a></li>
            <li className='py-2 text-sm hover:text-[#00dbdf]'><a href='*'>Guides</a></li>
            <li className='py-2 text-sm hover:text-[#00dbdf]'><a href='*'>API Status</a></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'><a href='*'>Company</a></h6>
        <ul>
            <li className='py-2 text-sm hover:text-[#00dbdf]'><a href='*'>About</a></li>
            <li className='py-2 text-sm hover:text-[#00dbdf]'><a href='*'>Blog</a></li>
            <li className='py-2 text-sm hover:text-[#00dbdf]'><a href='*'>Jobs</a></li>
            <li className='py-2 text-sm hover:text-[#00dbdf]'><a href='*'>Press</a></li>
            <li className='py-2 text-sm hover:text-[#00dbdf]'><a href='*'>Carrers</a></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'><a href='*'>Legal</a></h6>
        <ul>
            <li className='py-2 text-sm hover:text-[#00dbdf]'><a href='*'>claim</a></li>
            <li className='py-2 text-sm hover:text-[#00dbdf]'><a href='*'>Policy</a></li>
            <li className='py-2 text-sm hover:text-[#00dbdf]'><a href='*'>Terms</a></li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;