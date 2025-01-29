import { FC } from "react";
import Image from "next/image";
import Wave from "@/components/common/Wave";

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
          className="object-cover"
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
  rowContent: "lg:flex-1 text-center lg:text-left text-h6 lg:text-h4",
} as const;

const CorePhilosophy = () => {
  return (
    <div className="w-full bg-white relative">
      <Wave color="white" />
      <section className="container px-5 py-[72px] md:px-10 md:py-[120px] text-center flex flex-col">
        <h3 className="text-h3 text-blue-8 border-b border-neutral-2 pb-11">
          曼陀號理念
        </h3>

        <div className={styles.contentRow}>
          <h4 className={styles.rowTitle}>使命</h4>
          <div className={styles.rowContent}>
            <p>建立橋樑，讓不同背景的參加者互為良師益友，激盪職涯無限可能</p>
          </div>
        </div>

        <div className={styles.contentRow}>
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
                description="三人行必有我師，在曼陀號到處充滿樂於分享的各路好手，只要願意積極參與，就能在結識能長期陪伴的良師益友，串起緊密的海上人際網絡"
              />
              <CoreValueCard
                imageSrc="/images/icon-lighthouse.png"
                title="職涯探索"
                subtitle="互為迷航的燈塔"
                description="迷惘乃人之常情，但也許你眼前的迷霧，能折射出別人的光。透過夥伴間的激盪交流，我們互為彼此的燈塔，點燃迷航的微光，幫助認識自己在地圖上的座標，看見未曾想過的可能性"
              />
              <CoreValueCard
                imageSrc="/images/icon-rudder.png"
                title="經驗傳承"
                subtitle="共享掌舵的智慧"
                description="經驗是最好老師，在曼陀號有資歷豐富的前輩不藏私分享心路歷程，交換乘風破浪的獨門心法，讓我們可以少走冤枉路，也能夠將所學回饋社會，發揮正向影響力"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorePhilosophy;
