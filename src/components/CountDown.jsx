// import React from "react";
// import ReactDOM from "react-dom";
// import Countdown from "react-countdown";

// // Random component
// const Completionist = () => <span>You are good to go!</span>;

// // Renderer callback with condition
// const renderer = ({ days, hours, minutes, seconds, completed }) => {
//   if (completed) {
//     // Render a complete state
//     return <Completionist />;
//   } else {
//     // Render a countdown
//     return (
//       <span>
//         {days} days {hours} hours {minutes} minutes {seconds} seconds
//       </span>
//     );
//   }
// };

// const targetDate = new Date(Date.now() + 93784); // 1 day, 24 hours, 29 minutes, and 4 seconds from now

// ReactDOM.render(
//   <Countdown date={targetDate} renderer={renderer} />,
//   document.getElementById("root")
// );