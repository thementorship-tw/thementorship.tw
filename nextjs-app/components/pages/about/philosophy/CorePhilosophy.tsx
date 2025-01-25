import { FC } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface ICoreValueCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
}

const CoreValueCard: FC<ICoreValueCardProps> = ({
  imageSrc,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="rounded-3 relative h-full flex flex-col items-center text-center px-7 py-8 bg-blue-1 md:flex-row md:justify-between md:items-center">
      <div className="flex flex-col items-center md:flex-row gap-6 md:gap-8 md:flex-shrink-0">
        <Image
          src={imageSrc}
          alt={title}
          width={80}
          height={80}
          className="w-[80px] h-[80px] object-cover"
        />
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-h3 text-yellow-6 mb-1">{title}</h3>
          <h6 className="text-h6 text-neutral-10 mb-4 md:mb-0">{subtitle}</h6>
        </div>
      </div>
      <p className="text-body-md text-neutral-10 md:ml-8 md:flex-1 md:text-left">
        {description}
      </p>
    </div>
  );
};

const styles = {
  contentRow:
    "py-9 text-neutral-10 border-b border-neutral-2 flex flex-col gap-7 lg:flex-row justify-between",
  rowTitle: "lg:w-[200px] xl:w-[330px] text-center lg:text-left text-h4",
  rowContent: "lg:flex-1 text-center lg:text-left text-h6 lg:text-h5",
} as const;

const CorePhilosophy = () => {
  return (
    <div className="w-full bg-white">
      <section className="max-w-[1152px] mx-auto px-5 py-[72px] md:px-10 md:py-[120px] text-center flex flex-col">
        <h3 className="text-h3 text-blue-8 border-b border-neutral-2 pb-11">
          曼陀號理念
        </h3>

        <div className={twMerge(styles.contentRow, "items-center")}>
          <h4 className={styles.rowTitle}>使命</h4>
          <div className={styles.rowContent}>
            <p>建立橋樑，讓不同背景的參加者互為良師益友，激盪職涯無限可能</p>
          </div>
        </div>

        <div className={twMerge(styles.contentRow, "items-center")}>
          <h4 className={styles.rowTitle}>願景</h4>
          <div className={styles.rowContent}>
            <p>讓每位迷惘的職涯旅人都能得到啟發，並建立長期夥伴支持系統</p>
          </div>
        </div>

        <div className={styles.contentRow}>
          <h4 className={styles.rowTitle}>核心價值</h4>
          <div className="lg:flex-1 text-center lg:text-left">
            <div className="flex flex-col gap-5">
              <CoreValueCard
                imageSrc="/images/icon-map.png"
                title="人脈連結"
                subtitle="交織彼此的航線"
                description="三人行必有我師，這裡臥虎藏龍，只要願意積極參與，就能結識良師益友，串起人脈網絡"
              />
              <CoreValueCard
                imageSrc="/images/icon-lighthouse.png"
                title="職涯探索"
                subtitle="互為迷航的燈塔"
                description="迷惘乃人之常情，但眼前的迷霧也許能折射出別人的光。我們在交流中點亮職涯新的可能性"
              />
              <CoreValueCard
                imageSrc="/images/icon-rudder.png"
                title="經驗傳承"
                subtitle="共享掌舵的智慧"
                description="經驗是最好老師，曼陀號有資深前輩不藏私分享經驗，讓我們少走冤枉路，發揮正向影響力"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorePhilosophy;
