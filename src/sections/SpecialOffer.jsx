
// ChatGpt Code
import React from 'react';
import { Button } from '../components';
import { offer } from '../assets/images';
import { arrowRight } from '../assets/icons';

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
          />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
            />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
  // import { arrowRight } from "../assets/icons";
  // import { offer } from "../assets/images";
  // import { Button } from "../components";
  
  // const SpecialOffer = () => {
  //   return (
  //     <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
  //       <div className='flex-1'>
  //         <img
  //           src={offer}
  //           alt='Shoe Promotion'
  //           width={773}
  //           height={687}
  //           className='object-contain w-full'
  //         />
  //       </div>
  //       <div className='flex flex-1 flex-col'>
  //         <h2 className='text-4xl font-palanquin font-bold'>
  //           <span className='text-coral-red'>Special </span>
  //           Offer
  //         </h2>
  //         <p className='mt-4 info-text'>
  //           Embark on a shopping journey that redefines your experience with
  //           unbeatable deals. From premier selections to incredible savings, we
  //           offer unparalleled value that sets us apart.
  //         </p>
  //         <p className='mt-6 info-text'>
  //           Navigate a realm of possibilities designed to fulfill your unique
  //           desires, surpassing the loftiest expectations. Your journey with us is
  //           nothing short of exceptional.
  //         </p>
  //         <div className='mt-11 flex flex-wrap gap-4'>
  //           <Button label='Shop now' iconURL={arrowRight} />
  //           <Button
  //             label='Learn more'
  //             backgroundColor='bg-white'
  //             borderColor='border-slate-gray'
  //             textColor='text-slate-gray'
  //           />
  //         </div>
  //       </div>
  //     </section>
  //   );
  // };
  
  // export default SpecialOffer;
  
  // // import React from 'react'
  // // import { Button } from '../components'
  // // import { offer } from '../assets/images'
  // // import { arrowRight } from '../assets/icons'
  
  // // const SpecialOffer = () => {
  // //   return (
  // //     <section className="flex justify-wrap items-center max-xl:flex-col-reverse
  // //     gap-10 max-container">
  
  // //       <div className="flex-1">
  // //         <img src={offer} alt=""
  // //           width={773} height={687}
  // //           className='object-contain w-full' />
  // //       </div>
  
  // //       <div className="flex flex-1 flex-col">
  // //         <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
  
  
  // //           <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
  
  // //             <span className='text-coral-red '> Special </span>
  // //             Offer Shoes
  // //           </h2>
  // //           <p className='mt-4 info-text lg:max-w-lg'>
  
  // //             Embark on a shopping journey that
  // //             redefines your experience with
  // //             unbeatable deals. From premier
  // //             selections to incredible savings,
  // //             we offer unparalleled value that
  // //             sets us apart.
  // //           </p>
  
  // //           <p className='mt-6 lg:max-w-lg info-text'>Navigate a realm of
  // //             possibilities designed to fulfill
  // //             your unique desires, surpassing
  // //             the loftiest expectations. your
  // //             journey with us is nothing short
  // //             of exceptional.
  // //           </p>
  // //           <div className='mt-11 flex-1 flex-wrap gap-4'>
  // //             <Button label='Shop now' iconURL={arrowRight} />
  // //             <Button label="Learn more"
  // //             backgroundColor="bg-white"
  // //             borderColor="border-slate-gray"
  // //             textColor="text-slate-gray"
              
  // //             />
  // //           </div>
  
  // //         </div>
  // //       </div>
  // //     </section>
  // //   )
  // // }
  
  // // export default SpecialOffer
