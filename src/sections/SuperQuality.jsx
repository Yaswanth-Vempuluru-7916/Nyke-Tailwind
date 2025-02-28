import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
// import React from 'react'
// import { Button } from '../components'
// import { shoe8 } from '../assets/images'

// const SuperQuality = () => {
//   return (
//     <section id="about-us" className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
//       <div className="flex flex-1 flex-col">
//         <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>


//           <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
//             We provide You
//             <span className='text-coral-red '> Super</span>
//             <span className='text-coral-red '> Quality</span> Shoes
//           </h2>
//           <p className='mt-4 info-text lg:max-w-lg'>
//             Ensuring premium comfort and
//             style, our meticulously crafted
//             footwear is designed to elevate
//             your experience, providing you
//             with unmatched quality,
//             innovation, and a touch of
//             elegance .
//           </p>

//           <p className='mt-6 lg:max-w-lg info-text'>Our dedication to detail and
//             excellence ensures your
//             satisfaction</p>
//           <div className='mt-11'>

//             <Button label='View Details' />
//           </div>

//         </div>
//       </div>   

//       <div className="flex flex-1 justify-center items-center">
//         <img src={shoe8} alt="shoe8" width={570}
//         height={522}
//         className='object-contain' />
//       </div>
//     </section>
//   )
// }

// export default SuperQuality