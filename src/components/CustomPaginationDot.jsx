// import React from "react";

// export const CustomPaginationDot = ({ isActive }) => (
//   <span
//     className={`custom-pagination-dot ${isActive ? 'active' : ''}`}
//   />
// );



import React from 'react';

export const CustomPaginationDot = ({ isActive }) => (
  <span
    className={`custom-pagination-dot w-10 h-[2px] mx-1 ${isActive ? 'bg-white' : 'bg-gray-500/20'}`}
  />
);
