import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    name: "Medium",
    icon: "⚪️",
    href: "#",
  },
  {
    name: "Instagram",
    icon: "📷",
    href: "#",
  },
  {
    name: "linkedin",
    icon: "💼",
    href: "#",
  },
  {
    name: "Facebook",
    icon: "👤",
    href: "#",
  },
];

const StayUpdated = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-h4 text-[#7E7059]">關注第一手消息</h2>
        <h3 className="text-[48px] leading-11 font-semibold font-eb-garamond mb-6 text-[#7E7059]">
          Stay Updated
        </h3>
        <Image
          src="/images/title-symbol-line.png"
          alt="title-symbol-line"
          width={57}
          height={5}
          className="mx-auto mb-9"
        />
        <div className="flex justify-center gap-7">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="border w-[212px] h-[219px] rounded-3 hover:shadow-lg transition-shadow border-[#7E7059] flex items-center justify-center"
            >
              <div className="flex flex-col items-center gap-4">
                <span className="text-xl">{link.name}</span>
                <span className="text-3xl">{link.icon}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StayUpdated;
