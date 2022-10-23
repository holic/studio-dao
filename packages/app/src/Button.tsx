import classNames from "classnames";
import Link from "next/link";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from "react";

import { PendingIcon } from "./icons/PendingIcon";

type ButtonSize = "sm" | "md";
type ButtonVariant = "primary" | "secondary";

const buttonClasses = (size: ButtonSize, variant: ButtonVariant) => {
  const sizeClassNames: Record<ButtonSize, string> = {
    sm: "px-3 py-1 md:px-4 md:py-2",
    md: "px-6 py-3",
  };
  const variantClassNames: Record<ButtonVariant, string> = {
    primary:
      "font-medium text-white bg-emerald-700 hover:bg-green-600 active:bg-green-700 border border-transparent disabled:opacity-50 disabled:pointer-events-none",
    secondary:
      "text-zinc-300 hover:text-zinc-100 bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 disabled:opacity-50 disabled:pointer-events-none",
  };
  return classNames(
    "transition rounded flex",
    sizeClassNames[size],
    variantClassNames[variant]
  );
};

type Props = {
  pending?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type ButtonProps = Props &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonLinkProps = Props & {
  href: string;
  disabled?: boolean;
} & DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >;

export const Button = ({
  pending,
  type = "button",
  className,
  children,
  disabled,
  size = "md",
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={classNames(buttonClasses(size, variant), className)}
      disabled={disabled || pending}
      {...props}
    >
      {children}
      {pending ? (
        <span className="self-center ml-2 -mr-1">
          <PendingIcon />
        </span>
      ) : null}
    </button>
  );
};

export const ButtonLink = ({
  href,
  pending,
  className,
  children,
  disabled,
  size = "md",
  variant = "primary",
  target,
  rel = target === "_blank" ? "noopener noreferrer" : undefined,
  ...props
}: ButtonLinkProps) => (
  <Link href={href} passHref>
    <a
      target={target}
      rel={rel}
      aria-disabled={disabled}
      aria-busy={pending}
      className={classNames(buttonClasses(size, variant), className)}
      {...props}
    >
      {children}
      {pending ? (
        <span className="self-center ml-2 -mr-1">
          <PendingIcon />
        </span>
      ) : null}
    </a>
  </Link>
);
