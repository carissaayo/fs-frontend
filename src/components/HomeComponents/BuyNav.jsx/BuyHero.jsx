import buyHeroImg from "../../../assets/images/hero-buy.png";

const BuyHero = () => {
  return (
    <section className=" w-full md:hero__height   text-center md:text-left  px-12 md:px-32   bg-[#0E0C4D] text-white relative poppins-regular  py-20 ">
      <div className="flex flex-col md:flex-row items-center justify-between w-full  gap-12 md:gap-8">
        <div className="md:flex-1  mb-8">
          <h2 className="text-white poppins-medium text-3xl   md:text-[40px]  leading-[50px] mb-8   2xl:w-4/5">
            Own a <span className="text-[#00FFFC]">smartphone</span> today, pay
            small small.
          </h2>
          <p className="poppins-semibold md:text-[20px] md:w-[90%]">
            Fairshop is the easiest place to sell your smartphone and receive
            payment instantly
          </p>
        </div>
        <div className="flex-1 md:flex justify-end mb-20 md:mb-0">
          <img src={buyHeroImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default BuyHero;
