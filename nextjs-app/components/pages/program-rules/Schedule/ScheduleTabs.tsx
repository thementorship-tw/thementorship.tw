"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/common/Button/Button";
import TabToggle from "./TabToggle";
import TabContentSailor from "./TabContentSailor";
import TabContentNavigator from "./TabContentNavigator";

const SCHEDULE_TAB_DATA = [
  {
    key: "sailor",
    label: "水手",
    content: <TabContentSailor />,
  },
  {
    key: "navigator",
    label: "航海士",
    content: <TabContentNavigator />,
  },
];

const ScheduleTabs = () => {
  const [activeTab, setActiveTab] = useState<string>(SCHEDULE_TAB_DATA[0].key);

  const handleTabSelect = (key: string) => {
    setActiveTab(key);
  };

  return (
    <div className="bg-white rounded-3 mt-7 px-5 md:px-10 py-11">
      <ol className="mx-auto flex max-w-[448px] p-2 bg-neutral-2 rounded-2 mb-10 items-center">
        {SCHEDULE_TAB_DATA.map(({ key, label }) => (
          <TabToggle
            key={key}
            label={label}
            isActive={key === activeTab}
            onClick={() => {
              handleTabSelect(key);
            }}
          />
        ))}
      </ol>
      <div className="mb-10">
        {SCHEDULE_TAB_DATA.find((tab) => tab.key === activeTab)?.content}
      </div>
      <div className="text-center">
        <Button variant="filled" color="blue">
          <Link href="/about/overview">曼陀號計劃詳細介紹</Link>
        </Button>
      </div>
    </div>
  );
};

export default ScheduleTabs;
