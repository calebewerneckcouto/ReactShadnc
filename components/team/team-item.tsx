"use client";

import { Member } from "@/app/types/member";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ComboboxDemo } from "./team-combobox";
import { useEffect, useState } from "react";

type Props = {
  data: Member;
};

export const TeamItem = ({ data }: Props) => {
  const localStorageKey = `role-${data.id}`;

  const [role, setRole] = useState(data.role); // default role
  const [isMounted, setIsMounted] = useState(false); // to avoid SSR issues

  // Get role from localStorage after component mounts
  useEffect(() => {
    const stored = localStorage.getItem(localStorageKey);
    if (stored) {
      setRole(stored as typeof data.role);
    }
    setIsMounted(true);
  }, []);

  // Update localStorage when role changes
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem(localStorageKey, role);
    }
  }, [role, isMounted]);

  return (
    <div className="flex w-full flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-3 border rounded-md">
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <Avatar>
          <AvatarImage src={data.avatar} />
          <AvatarFallback>
            {data.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col overflow-hidden">
          <span className="truncate font-medium">{data.name}</span>
          <span className="truncate text-sm text-muted-foreground">
            {data.email}
          </span>
        </div>
      </div>

      <div className="w-full sm:w-[220px]">
        <ComboboxDemo value={role} setValue={setRole} />
      </div>
    </div>
  );
};
