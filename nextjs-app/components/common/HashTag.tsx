import { FC, PropsWithChildren } from "react";

const HashTag: FC<PropsWithChildren> = ({ children }) => {
  return (
    <p className="px-4 py-2 rounded-pill bg-blue-2 text-body-sm">
      {"#"}
      {children}
    </p>
  );
};

export default HashTag;
