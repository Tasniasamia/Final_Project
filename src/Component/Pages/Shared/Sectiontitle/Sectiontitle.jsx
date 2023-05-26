import React from 'react';

const Sectiontitle = ({title,subtitle}) => {
    return (
        <div className='flex justify-center py-3  my-10  mx-auto w-full'>
        <div>
          <p className='text-yellow-400 text-center py-2'>---{title}---</p>
          <p className='text-3xl border-y-4  text-center py-4'>{subtitle}</p></div>
      </div>
    );
};

export default Sectiontitle;