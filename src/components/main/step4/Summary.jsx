import React from "react";

const Summary = () => {
  return (
    <div className=" flex  flex-col ">
      <div className="rounded-lg bg-[#f9f7fda9] px-5 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[hsl(213,96%,18%)] text-lg font-[600]">
              Arcade(Monthly)
            </span>
            <button
              style={{
                textDecoration: "underline",
                textDecorationThickness: "2px",
              }}
              className="border-0 cursor-pointer font-[500] text-[#0000005d] w-fit text-sm"
            >
              Change
            </button>
          </div>
          <p className="text-lg font-[600] text-[hsl(213,96%,18%)]">$9/mo</p>
        </div>
        <hr className="border border-[#00000019] outline-0 my-5" />

        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <p className="text-[#0000005d]">Online service</p>
            <p className="text-[hsl(213,96%,18%)] font-[500]">+$1/mo</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between my-6 px-5">
        <p className="text-[#00000078]">Total(per month)</p>
        <p className="text-xl text-[#483EFF] font-[600]">+$12/mo</p>
      </div>
    </div>
  );
};

export default Summary;
