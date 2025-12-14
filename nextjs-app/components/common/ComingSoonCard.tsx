import type { FC } from "react";

interface IComingSoonCardProps {
  title: string;
}

const ComingSoonCard: FC<IComingSoonCardProps> = ({ title }) => {
  return (
    <div className="px-5 py-9 rounded-3 bg-blue-1 flex flex-col gap-7 text-center">
      {/* 留空，不顯示團隊資訊 */}
      <div className="h-[52px]"></div>

      {/* Coming Soon 圓形區域 */}
      <div className="px-2">
        <div className="w-full aspect-square rounded-circle relative overflow-hidden bg-yellow-1 flex items-center justify-center border-2 border-dashed border-yellow-6">
          <div className="text-center">
            <p className="text-h2 text-yellow-6 font-bold mb-2">Coming Soon</p>
            <p className="text-subtitle-lg text-neutral-10">敬請期待</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <p className="text-h5 text-neutral-10">{title}</p>
        </div>

        <p className="py-3 border-t-[1px] border-b-[1px] border-yellow-6 text-h3 text-yellow-6">
          預備招募中
        </p>

        <p className="px-5 py-2 text-subtitle-lg text-neutral-10 italic">
          第八屆{title}招募即將開始
        </p>
      </div>
    </div>
  );
};

export default ComingSoonCard;
