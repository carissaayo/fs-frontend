import { useGeneralStore } from "../../store/generalStore";

const Steps = () => {
  const checkoutStep = useGeneralStore((state) => state.checkoutStep);
  const setCheckoutStep = useGeneralStore((state) => state.setCheckoutStep);
  return (
    <section className="sm:mb-16">
      <div className="w-full flex items-center my-6">
        {/* 1 */}

        <div
          className={`rounded-full  h-[30px] w-[30px]  flex items-center justify-center text-white bg-[#0E0C4D]`}
        >
          1
        </div>
        {/* Line */}
        <div className="w-[90px] xs:w-[100px] sx:w-[120px] sm:w-[150px] lg:w-[180px]  h-[2px] bg-[#0E0C4D]"></div>

        {/* 2 */}
        <div
          className={`rounded-full  h-[30px] w-[30px]  flex items-center justify-center  ${
            checkoutStep > 1
              ? "bg-[#0E0C4D] text-white"
              : " border text-[#858585] border-[#3858585]"
          }`}
        >
          2
        </div>
        {/* Line */}
        <div
          className={`w-[90px] xs:w-[100px] sx:w-[120px] sm:w-[150px] lg:w-[180px] h-[2px] ${
            checkoutStep > 1 ? "bg-[#0E0C4D]" : "bg-[#858585]"
          } `}
        ></div>

        {/* 3 */}
        <div
          className={`rounded-full  h-[30px] w-[30px]  flex items-center justify-center  ${
            checkoutStep > 2
              ? "bg-[#0E0C4D] text-white"
              : " border text-[#858585] border-[#3858585]"
          }`}
        >
          3
        </div>
        {/* Line */}
        <div
          className={`w-[90px] xs:w-[100px] sx:w-[120px] sm:w-[150px] lg:w-[180px] h-[2px] ${
            checkoutStep >= 3 ? "bg-[#0E0C4D]" : "bg-[#858585]"
          } `}
        ></div>
        {/* 4 */}
        <div
          className={`rounded-full h-[30px] w-[30px]  flex items-center justify-center  ${
            checkoutStep >= 4
              ? "bg-[#0E0C4D] text-white"
              : " border text-[#858585] border-[#3858585]"
          }`}
        >
          4
        </div>
      </div>
      <div className="flex gap-6 xs:gap-10 sm:gap-8 lg:gap-16 items-center text-[#111111] text-sm sm:text-base">
        <p className={`${checkoutStep === 1 && "poppins-semibold"} `}>
          KYC details(1)
        </p>
        <p className={`${checkoutStep === 2 && "poppins-semibold"} `}>
          KYC Details (2)
        </p>
        <p className={`${checkoutStep === 3 && "poppins-semibold"} `}>
          Guarantor’s Details
        </p>
        <p className={`${checkoutStep === 4 && "poppins-semibold"} `}>
          Delivery Address
        </p>
      </div>
    </section>
  );
};

export default Steps;
