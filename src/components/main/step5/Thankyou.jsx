import React from "react";
import thankyouTick from "../../../assets/icon-thank-you.svg";

const Thankyou = () => {
  return (
    <div className="gap-7 flex flex-col h-full justify-center items-center">
      <img src={thankyouTick} alt="" />
      <div className="flex items-center flex-col text-center gap-4">
        <h5 className="text-3xl font-[600] text-[hsl(213,96%,18%)]">Thank you!</h5>
        <p className="font-[500] text-[hsl(231,11%,63%)]">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default Thankyou;
