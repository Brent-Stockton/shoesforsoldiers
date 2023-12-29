import Image from "next/image";

const CTA = () => {
  return (
    <div className="relative text-center p-5 text-white">
      <div className="absolute inset-0 z-0">
        <Image
          alt="army"
          layout="fill"
          objectFit="cover"
          src="/images/flag2.webp"
          className="opacity-50"
        />
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center max-w-4xl mx-auto p-3">
        <h2 className="text-[26px] sm:text-[30px] md:text-[36px] font-bold mb-1 md:mb-4 rounded font-army">
          Support Our Soldiers – Donate a Step Forward!
        </h2>
        <p className="mb-1 md:mb-4 rounded w-full sm:w-4/5 md:w-4/5 text-[16px] md:text-[20px]">
          Our soldiers give their all to protect and serve. Now, it’s our turn
          to step up and support them. A good pair of running shoes can make a
          significant difference in a soldier's life...
        </p>
        <a href="https://www.paypal.com/paypalme/shoesforsoldiers?locale.x=en_US">
          <button className="text-[18px] sm:text-[20px] tracking-wider px-6 py-3 md:px-12 md:py-6 bg-red-900 text-white font-bold font-army rounded hover:bg-black shadow-lg hover:scale-105 transition-transform duration-300 mb-4">
            Donate Now
          </button>
        </a>
        <p className="rounded w-full md:w-3/5">
          Zelle donations can be made directly to{" "}
          <a href="mailto:shoesforsoldiers@gmail.com" className="text-blue-600">
            shoesforsoldiers@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default CTA;
