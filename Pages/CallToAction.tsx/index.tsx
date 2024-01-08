import Image from "next/image";

const aboutUsText =
  "We exist to serve those who continue to serve us.  Started as a small project to give back to local active duty service members has grown to giving all across the world.  Anywhere our uniformed men and women hang their hat, we can deliver help and support for their feet.Our founder, Shain Davis served as an active duty Soldier in the United States Army. Shain deployed to Afghanistan for 12 months in 2010.  Shain experienced a multitude of feet and ankle problems in which he struggled for years. After leaving the military, Shain's problems still existed.  He then took matters into his own hands and started his own research. Eventually landing on his feet as the problem.  Soon after founding Shoe for Soldiers to help active duty service members before they have the same problems Shain did. Shoes for Soldiers is an organization run by Soldiers... for Soldiers.  We will always be vigilant in our mission to be of the troops and for the troops.  With every donation and every dollar we are committed to making service members lives better.";

const CallToAction = () => {
  return (
    <div className="flex items-center justify-center bg-cover bg-center bg-white overflow-hidden p-4 md:p-12 lg:p-0">
      <div
        className="flex flex-col items-center justify-center max-w-[1000px] space-y-6 my-4  bg-opacity-90 p-6 rounded-lg border-spacing-1 bg-gradient-to-b from-red-900 to-black"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
        }}
      >
        <div className="flex flex-row items-center justify-center md:space-x-4">
          <Image
            alt="army1"
            width={400}
            height={400}
            src="/images/about-shoe.jpeg"
            className="rounded-lg shadow-lg transition duration-300 hover:scale-105 hidden lg:flex"
          />
          <Image
            alt="army2"
            width={400}
            height={400}
            src="/images/crowd.jpeg"
            className="rounded-lg shadow-lg transition duration-300 hover:scale-105"
          />
          <Image
            alt="army3"
            width={400}
            height={400}
            src="/images/about-stand.jpeg"
            className="rounded-lg shadow-lg transition duration-300 hover:scale-105 hidden lg:flex"
          />
        </div>
        <div className="text-white">
          <p className="font-bold font-primary text-center text-[26px] md:text-[36px] font-army">
            Mission Briefing: Our Story
          </p>
          <p className="font-secondary text-left text-[12px] md:text-[18px]">
            {aboutUsText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
