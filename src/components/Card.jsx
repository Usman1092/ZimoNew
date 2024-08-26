// import React from "react";


// const Card = ({ img }) => {


//   return (
//     <div>
//       <div className="relative flex items-end" >
//         <img src={img.src} alt={img.alt} className="w-full h-auto bg-[#333]" />
//         <p className="absolute w-full justify-center items-center pb-4 text-white uppercase flex text-[9px] lg:text-[11px] xl:text-[14px] 3xl:text-[24px] tracking-[3px]">
//           {img.alt}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Card;







import React from "react";
import Image from 'next/image'; // Use Image from Next.js

const Card = ({ img }) => {
  return (
    <div className="relative flex items-end">
      <Image 
        src={img.src} 
        alt={img.alt.trim()} 
        width={466} 
        height={700} 
        className="w-[454px] h-[547px]"
      />
      <p className="absolute w-full justify-center items-center pb-4 text-white uppercase flex text-[9px] lg:text-[11px] xl:text-[14px] 3xl:text-[24px] tracking-[3px]">
        {img.alt.trim()}
      </p>
    </div>
  );
};

export default Card;
