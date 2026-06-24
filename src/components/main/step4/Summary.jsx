import React, { useContext } from "react";
import MultiFormContext from "../../../context/Context";

const Summary = () => {
  const { step, setStep, plan, monthlyPlan, checked } =
    useContext(MultiFormContext);

  const PlanPricing = {
    monthly: {
      Arcade: 9,
      Advanced: 12,
      Pro: 15,
    },
    yearly: {
      Arcade: 90,
      Advanced: 120,
      Pro: 150,
    },
  };

  const AddOnsPricing = {
    monthly: {
      online: 1,
      larger: 2,
      customize: 2,
    },
    yearly: {
      online: 10,
      larger: 20,
      customize: 20,
    },
  };

  const serviceName = {
    online: "Online service",
    larger: "Larger storage",
    customize: "Customize profile",
  };

  const validity = monthlyPlan ? "monthly" : "yearly";

  const service = [];

  if (checked.online) {
    service.push({
      name: serviceName.online,
      price: AddOnsPricing[validity].online,
    });
  }
  if (checked.larger) {
    service.push({
      name: serviceName.larger,
      price: AddOnsPricing[validity].larger,
    });
  }

  if (checked.customize) {
    service.push({
      name: serviceName.customize,
      price: AddOnsPricing[validity].customize,
    });
  }

  let addOnPrice = 0;

  service.forEach((element) => {
    addOnPrice += element.price;
  });

  const finalPrice = PlanPricing[validity][plan] + addOnPrice;

  return (
    <div className=" flex  flex-col ">
      <div className="rounded-lg bg-[#f9f7fda9] px-5 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[hsl(213,96%,18%)] text-lg font-[600]">
              {plan}({monthlyPlan ? "Monthly" : "Yearly"})
            </span>
            <button
              onClick={() => setStep(2)}
              style={{
                textDecoration: "underline",
                textDecorationThickness: "2px",
              }}
              className="border-0 cursor-pointer font-[500] text-[#0000005d] w-fit text-sm"
            >
              Change
            </button>
          </div>
          <p className="text-lg font-[600] text-[hsl(213,96%,18%)]">
            ${PlanPricing[validity][plan]}/{monthlyPlan ? "mo" : "yr"}
          </p>
        </div>
        <hr className="border border-[#00000019] outline-0 my-5" />

        <div className="flex flex-col gap-3">
          {service.map((item) => {
            return (
              <div className="flex justify-between">
                <p className="text-[#0000005d]">{item.name}</p>
                <p className="text-[hsl(213,96%,18%)] font-[500]">
                  +${item.price}/{monthlyPlan ? "mo" : "yr"}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between my-6 px-5">
        <p className="text-[#00000078]">
          Total (per {monthlyPlan ? "month" : "year"})
        </p>
        <p className="text-xl text-[#483EFF] font-[600]">
          +${finalPrice}/{monthlyPlan ? "mo" : "yr"}
        </p>
      </div>
    </div>
  );
};

export default Summary;
