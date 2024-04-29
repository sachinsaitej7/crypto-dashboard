import React from "react";
// react-icons crypto logo

import { FaBitcoin } from "react-icons/fa";

const Logo: React.FC = () => {
  // css typography text logo - coin tracker

  return (
    <div className='flex items-center'>
      <FaBitcoin className='text-2xl text-red-500 mr-1' />
      <div className='text-2xl font-semibold text-slate-500'>Coin</div>
      <div className='text-2xl font-semibold text-red-500'>Tracker</div>
    </div>
  );
};

export default Logo;
