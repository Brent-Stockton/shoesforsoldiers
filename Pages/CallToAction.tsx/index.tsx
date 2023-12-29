import Image from "next/image";

const aboutUsText =
  "Thank you for visiting my website and exploring the services I offer. With seven years of experience as a Mortgage Loan Originator, I specialize in assisting clients with their mortgage needs, whether it's refinancing an existing home or facilitating the purchase of a new one. My background as an Army Veteran, having served eight years as a Military Police Officer with a tour of duty in Afghanistan during Operation Enduring Freedom, has instilled in me a deep commitment to giving back to the community, particularly to those in active service. One of the ways I contribute is by donating Brooks running shoes to active-duty soldiers. I understand the significance of having the right footwear during exercise and physical training, and it brings me immense satisfaction to know that I am making a positive impact in the lives of soldiers. I have set a personal goal: with every home loan I close, I aim to send a pair of quality running shoes to an active-duty soldier anywhere in the United States. You can be a part of this endeavor. By choosing me for your home buying or refinancing needs, or by referring someone you know who could benefit from my services, you not only receive professional mortgage assistance but also contribute to a noble cause supporting our soldiers. Let's work together to make a difference.";

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
