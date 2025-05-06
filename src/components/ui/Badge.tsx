"use client";

import clsx from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}

export const Badge = ({ children, onClick, active }: BadgeProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-full px-5 py-2.5 text-sm transition-all font-medium",
        active
          ? "bg-white text-black ring-2 ring-offset-2 ring-sky-300"
          : "bg-white text-black hover:bg-sky-100"
      )}
    >
      {children}
    </button>
  );
};
