import { FC } from "react";

interface IBreadcrumbProps {
  items: string[];
}

const Breadcrumb: FC<IBreadcrumbProps> = ({ items }) => {
  return (
    <nav className="p-5 md:px-7 max-h-10">
      <ol className="flex items-center">
        {items.map((item, idx) => (
          <li key={item} className="flex items-center">
            <span
              className={`text-body-sm ${idx === 0 ? "text-yellow-6" : "text-neutral-10"}`}
            >
              {item}
            </span>
            {idx < items.length - 1 && (
              <div className="mx-3 w-3 h-[1px] bg-yellow-6" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
