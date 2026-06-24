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
    <>
      <div className="md:hidden block">
        <SideBar />
      </div>
      <div className=" flex p-4 mt-25 mb-25 px-6 md:px-4 md:gap-12 z-10   lg:gap-25 md:flex-row flex-col     rounded-xl bg-white max-w-4xl mx-auto w-full">
        <div className="md:block hidden">
          <SideBar />
        </div>
        <div className=" flex flex-col    w-full lg:mr-14 md:mr-6 justify-between">
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

              <div
                className={`hidden   bottom-0  md:flex items-center justify-between`}
              >
                {step !== 1 ? (
                  <Button
                    btnName={"Go Back"}
                    btnBgColor={""}
                    btnTextColor={"text-[hsl(235,5%,61%)]"}
                    btnPx={"px-0"}
                    btnNext={"back"}
                    btnHoverColor={"hover:text-[#02295A]"}
                  />
                ) : (
                  <div></div>
                )}

                {step === 4 ? (
                  <Button
                    btnName={"Confirm"}
                    btnBgColor={"bg-[#483EFF]"}
                    btnTextColor={"text-white"}
                    btnNext={"next"}
                    btnHoverColor={"hover:bg-[#928CFF] hover:text-white"}
                    btnPx={"px-6"}
                  />
                ) : (
                  <Button
                    btnName={"Next Step"}
                    btnBgColor={"bg-[hsl(213,96%,18%)]"}
                    btnTextColor={"text-white"}
                    btnPx={"px-6"}
                    btnNext={"next"}
                    btnHoverColor={"hover:bg-[#174A8A] hover:text-white"}
                  />
                )}
              </div>
            </>
          )}
        </div>
      </div>
      {step != 5 && (
        <div
          className={`flex  fixed z-10 left-0 px-5 bottom-0  bg-white w-full   md:hidden items-center justify-between`}
        >
          {step !== 1 ? (
            <Button
              btnName={"Go Back"}
              btnBgColor={""}
              btnTextColor={"text-[hsl(235,5%,61%)]"}
              btnPx={"px-0"}
              btnHoverColor={"hover:text-[#02295A]"}
              btnNext={"back"}
            />
          ) : (
            <div></div>
          )}

          {step === 4 ? (
            <Button
              btnName={"Confirm"}
              btnBgColor={"bg-[#483EFF]"}
              btnTextColor={"text-white"}
              btnNext={"next"}
              btnHoverColor={"hover:bg-[#928CFF] hover:text-white"}
              btnPx={"px-6"}
            />
          ) : (
            <Button
              btnName={"Next Step"}
              btnBgColor={"bg-[hsl(213,96%,18%)]"}
              btnTextColor={"text-white"}
              btnPx={"px-6"}
              btnNext={"next"}
              btnHoverColor={"hover:bg-[#174A8A]"}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Hero;
