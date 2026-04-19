"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Select from "@/components/common/Select";
import TagFilter from "@/components/common/TagFilter/TagFilter";
import ProfileCard from "@/components/common/ProfileCard";
import ComingSoonCard from "@/components/common/ComingSoonCard";
import {
  EXECUTION_GROUP_FILTER_OPTIONS,
  CURRENT_SESSION,
  SESSION_FILTER_OPTIONS,
  SessionFilterOptionType,
} from "@/constants/pages/team";
import { ExecutionGroupType } from "@/types/filter-option";
import { client } from "@/sanity/lib/client";
import { staffQuery } from "@/sanity/lib/queries";
import type { Staff } from "@/types/team";

type FilterOptionType = ExecutionGroupType | "all";

const ContentWithFilter = () => {
  const [staffList, setStaffList] = useState<Staff[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchStaff() {
      const data = await client.fetch(staffQuery);
      setStaffList(data);
      setIsLoading(false);
    }
    fetchStaff();
  }, []);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const roleFromSearchParams = searchParams.get("role");
  const hasValidRole = EXECUTION_GROUP_FILTER_OPTIONS.some(
    ({ key }) => key === roleFromSearchParams
  );
  const selectedFilter = hasValidRole
    ? (roleFromSearchParams as FilterOptionType)
    : "all";

  const sessionOptions = [...SESSION_FILTER_OPTIONS];
  const sessionFromSearchParams = searchParams.get("session");
  const hasValidSession = sessionOptions.some(
    ({ value }) => value === sessionFromSearchParams
  );
  const selectedSession: SessionFilterOptionType = hasValidSession
    ? (sessionFromSearchParams as SessionFilterOptionType)
    : CURRENT_SESSION;

  const updateUrlWithSearchParams = useCallback(
    (searchParams: URLSearchParams) => {
      const qs = searchParams.toString();
      const updatedUrl = qs ? `${pathname}?${qs}` : pathname;

      router.replace(updatedUrl);
    },
    [pathname, router]
  );

  const updateSearchParam = useCallback(
    (key: "role" | "session", value: string) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(key, value);
      updateUrlWithSearchParams(newSearchParams);
    },
    [searchParams, updateUrlWithSearchParams]
  );

  useEffect(() => {
    if (hasValidRole && hasValidSession) return;

    const nextSearchParams = new URLSearchParams(searchParams);
    if (!hasValidRole) nextSearchParams.set("role", "all");
    if (!hasValidSession) nextSearchParams.set("session", CURRENT_SESSION);

    updateUrlWithSearchParams(nextSearchParams);
  }, [hasValidRole, hasValidSession, updateUrlWithSearchParams, searchParams]);

  const displayedGroups = EXECUTION_GROUP_FILTER_OPTIONS.filter(
    (opt) => opt.key !== "all"
  )
    .map(({ key, name: groupName }) => {
      const matchesRole = selectedFilter === "all" || key === selectedFilter;
      if (!matchesRole) return null;
      const profileList = staffList.filter(
        (staff) =>
          staff.role === key &&
          (selectedSession === "all" ||
            String(staff.session) === String(selectedSession))
      );
      const isComingSoon =
        !isLoading &&
        profileList.length === 0 &&
        selectedSession === CURRENT_SESSION;
      if (profileList.length === 0 && !isComingSoon) return null;
      return {
        key,
        groupName,
        profileList,
        isComingSoon,
      };
    })
    .filter(Boolean);

  const handleRoleSelect = (selectedOption: FilterOptionType) => {
    updateSearchParam("role", selectedOption);
  };

  const handleSessionSelect = (selectedOption: string) => {
    updateSearchParam("session", selectedOption);
  };

  return (
    <div className="container space-y-10 px-5 md:px-10 xl:px-0 mb-[112px] md:mb-[120px] min-h-[500px]">
      <TagFilter
        filterOptions={EXECUTION_GROUP_FILTER_OPTIONS}
        selectedFilter={selectedFilter}
        onSelect={(selectedFilter) => {
          handleRoleSelect(selectedFilter as FilterOptionType);
        }}
      />

      <div className="flex flex-col lg:flex-row lg:col-span-1 flex-wrap items-stretch">
        <div className="flex items-center justify-center py-4 px-6 bg-neutral-1 text-subtitle-md rounded-t-3 lg:rounded-none lg:rounded-l-3">
          按屆次搜索
        </div>
        <div className="flex flex-wrap grow gap-3 py-4 px-6 bg-white border border-neutral-1 rounded-b-3 lg:rounded-none lg:rounded-r-3">
          <Select
            options={sessionOptions}
            selectedValue={selectedSession}
            onChange={handleSessionSelect}
            name="session-select"
          />
        </div>
      </div>

      {displayedGroups.map(({ key, groupName, isComingSoon, profileList }) => (
        <div key={key}>
          <div className="mb-9 relative after:content-[''] after:absolute after:bottom-0 after:rounded-2 after:block after:w-[260px] after:h-[3px] after:bg-yellow-6">
            <p className="py-4 text-h3 text-blue-8 border-b-[1px] border-neutral-2">
              {groupName}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {isComingSoon ? (
              <ComingSoonCard title={groupName} />
            ) : (
              profileList.map((staff) => (
                <ProfileCard
                  key={staff._id}
                  team={staff.team}
                  name={staff.name}
                  title={staff.title}
                  subTitle={staff.subtitle}
                  quote={staff.quote}
                  imageUrl={staff.photo}
                />
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentWithFilter;
