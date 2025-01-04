import Image from "next/image";

const Partners = () => {
  return (
    <section className="py-16 bg-[#7E7059]">
      <div className="mx-auto text-center">
        <h2 className="text-h4 text-[#7E7059]">合作夥伴</h2>
        <h3 className="text-[48px] leading-11 font-semibold font-eb-garamond mb-6 text-[#090E3E]">
          Our Partners
        </h3>
        <Image
          src="/images/title-symbol-line.png"
          alt="title-symbol-line"
          width={57}
          height={5}
          className="mx-auto mb-9"
        />
        <div className="flex flex-wrap justify-center gap-5"></div>
      </div>
    </section>
  );
};

export default Partners;
