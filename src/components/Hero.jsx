import React, { useContext } from "react";
import SideBar from "../components/sidebar/SideBar.jsx";
import Input from "./main/step1/Input";
import Button from "./main/Button";
import StepHeading from "./main/StepHeading";
import AllInputs from "./main/step1/AllInputs.jsx";
import Plan from "./main/step2/Plan.jsx";
import FullPlan from "./main/step2/FullPlan.jsx";
import AllAddOns from "./main/step3/AllAddOns.jsx";
import Summary from "./main/step4/Summary.jsx";
import MultiFormContext from "../context/Context.js";
import Thankyou from "./main/step5/Thankyou.jsx";

const Hero = () => {
  const { step, setStep } = useContext(MultiFormContext);
  return (
    <div className=" flex p-4 gap-25 md:flex-row flex-col     rounded-xl bg-white max-w-4xl mx-auto w-full">
      <SideBar />

      <div className=" flex flex-col   w-full mr-14 justify-between">
        {step === 5 ? (
          <Thankyou />
        ) : (
          <>
            <div>
              <div className="">
                {/* step 1 */}
                {step === 1 && (
                  <>
                    <StepHeading
                      headingName={"Personal info"}
                      headingPara={
                        "Please provide your name, email address, and phone number."
                      }
                    />
                    <AllInputs />{" "}
                  </>
                )}

                {/* step 2 */}

                {step === 2 && (
                  <>
                    <StepHeading
                      headingName={"Select your plan"}
                      headingPara={
                        "You have the option of monthly or yearly billing. "
                      }
                    />{" "}
                    <FullPlan />{" "}
                  </>
                )}

                {/* step 3 */}
                {step === 3 && (
                  <>
                    <StepHeading
                      headingName={"Pick add-ons"}
                      headingPara={
                        "Add-ons help enhance your gaming experience."
                      }
                    />
                    <AllAddOns />
                  </>
                )}

                {/* step 4 */}
                {step === 4 && (
                  <>
                    <StepHeading
                      headingName={"Finishing up"}
                      headingPara={
                        "Double-check everything looks OK before confirming."
                      }
                    />
                    <Summary />
                  </>
                )}
              </div>
            </div>
            <div className={` flex items-center justify-between`}>
              {step !== 1 ? (
                <Button
                  btnName={"Go Back"}
                  btnBgColor={""}
                  btnTextColor={"text-[hsl(235,5%,61%)]"}
                  btnPx={"px-0"}
                  btnNext={"back"}
                />
              ) : (
                <div></div>
              )}

              <Button
                btnName={"Next Step"}
                btnBgColor={"bg-[hsl(213,96%,18%)]"}
                btnTextColor={"text-white"}
                btnPx={"px-6"}
                btnNext={"next"}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;
