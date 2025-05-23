import { twMerge } from "tailwind-merge";
import { HTMLAttributes } from "react";

// Windsurf: Refactor | Explain | Generate JSDoc
export const SectionContent = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, ...otherProps } = props;
  return (
    <div
      className={twMerge(
        "container py-24 md:py-36 lg:py-48 overflow-hidden",
        className
      )}
      {...otherProps}
    />
  );
};
