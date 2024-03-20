import { useEffect } from "react";

import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";

import CheckoutFormA from "../components/CheckoutComponents/CheckoutFormA";
import CheckoutFormB from "../components/CheckoutComponents/CheckoutFormB";
import CheckoutFormC from "../components/CheckoutComponents/CheckoutFormC";
import CheckoutFormD from "../components/CheckoutComponents/CheckoutFormD";
import Steps from "../components/CheckoutComponents/Steps";
import { useGeneralStore } from "../store/generalStore";

const Checkout = () => {
  const showCheckoutContent = useGeneralStore(
    (state) => state.showCheckoutContent
  );
  const checkoutStep = useGeneralStore((state) => state.checkoutStep);
  const setCheckoutContent = useGeneralStore(
    (state) => state.setCheckoutContent
  );
  const setCheckoutStep = useGeneralStore((state) => state.setCheckoutStep);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => goToTop(), []);

  return (
    <main className="w-full h-full relative">
      <section className="flex flex-col md:flex-row justify-between px-12 md:px-32 poppins-regular pb-12 gap-12  md:gap-32 w-[80%] md:w-full mx-auto md:mx-0 pt-24 md:pt-36">
        <div className="flex-1 lg:flex-[1.5] relative ">
          <Steps />
          {/* KYC Details 1 */}
          <CheckoutFormA />

          {/* KYC Details 2 */}

          <CheckoutFormB />
          {/* Guarantor Details */}

          <CheckoutFormC />

          {/* Delivery Details */}

          <CheckoutFormD />

          <div className="w-full flex justify-center sm:justify-end items-center  gap-6 mb-10  ">
            <Button
              className="w-28 bg-[#F0F0F0] hover:bg-[#F0F0F0] text-black hover:text-black text-base rounded-2xl border border-[#ACACAC] h-[50px]"
              onClick={() => {
                if (showCheckoutContent === 1 || checkoutStep === 1) return;
                setCheckoutContent(showCheckoutContent - 1);
                setCheckoutStep(checkoutStep - 1);
              }}
            >
              Back
            </Button>
            <Button
              className="bg-[#0C0F4D] hover:bg-[#0C0F4D] rounded-2xl w-28 h-[50px]"
              onClick={() => {
                if (showCheckoutContent === 4 || checkoutStep === 4) return;
                setCheckoutContent(showCheckoutContent + 1);
                setCheckoutStep(checkoutStep + 1);
              }}
            >
              Next
            </Button>
          </div>
        </div>
        <div className="flex-1">
          {/* Payment Summary */}
          <div className="mb-10 relative">
            <h1 className="poppins-semibold text-2xl mb-4">Payment Summary</h1>

            <div className="mb-10 border border-gray-100 py-6 rounded-xl bg-[#FCFCFC] px-4">
              <div className="flex justify-between  items-center mb-4">
                <p className="poppins-semibold text-2xl ">Initial deposit</p>
                <p className="text-xl">₦329,800</p>
              </div>
              {/* Dotted Con Starts*/}
              <div className="flex">
                <div className="">
                  <div className=" border border-dashed border-[#6F6F6F] h-[80px] w-0"></div>
                </div>
                <div className="flex items-center justify-between gap-1 w-full">
                  <div className="flex items-center gap-1">
                    <div className=" border border-dashed border-[#6F6F6F] h-[0px] w-[30px]"></div>
                    <p className="text-[#898686]">30% down payment</p>
                  </div>
                  <p className="text-[#898686]">₦14,000</p>
                </div>
              </div>
              <div className="relative bottom-[13px] left-1 flex gap-1 items-center justify-between">
                <div className="flex items-center gap-1">
                  <div className=" border border-dashed border-[#6F6F6F] h-[0px] w-[30px]"></div>
                  <p className="text-[#898686]">Loan charges</p>
                </div>
                <p className="text-[#898686]">₦14,000</p>
              </div>
              {/* Dotted Con Ends*/}
            </div>
          </div>
          <hr className="mb-10" />

          {/* Payment structure */}
          <div className=" mb-10">
            <RadioGroup defaultValue="0">
              <div className="flex items-center space-x-2  justify-between  py-4 xs:p-4 rounded-xl">
                <div className="flex items-center gap-6">
                  <RadioGroupItem value="0" id="r1" />
                  <Label htmlFor="r1">1st monthly payment</Label>
                </div>
                <p className="">₦14,000.00</p>
              </div>
              <div className="relative">
                <div className="h-[40px] w-0 border border-black border-dashed ml-6 absolute bottom-[-16px]"></div>
              </div>
              <div className="flex items-center space-x-2  justify-between  py-4 xs:p-4 rounded-xl">
                <div className="flex items-center gap-6">
                  <RadioGroupItem value="0" id="r1" />
                  <Label htmlFor="r1">2nd monthly payment</Label>
                </div>
                <p className="">₦14,000.00</p>
              </div>
              <div className="relative">
                <div className="h-[40px] w-0 border border-black border-dashed ml-6 absolute bottom-[-16px]"></div>
              </div>
              <div className="flex items-center space-x-2  justify-between  py-4 xs:p-4 rounded-xl">
                <div className="flex items-center gap-6">
                  <RadioGroupItem value="0" id="r1" />
                  <Label htmlFor="r1">3rd monthly payment</Label>
                </div>
                <p className="">₦14,000.00</p>
              </div>
            </RadioGroup>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
