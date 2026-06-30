import Image from "next/image";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

const Logo = ({ variant = "dark", className = "h-8 w-auto" }: LogoProps) => {
  const src = variant === "light" ? "/brand/wordmark-dark.svg" : "/brand/wordmark-light.svg";

  return (
    <Image
      src={src}
      alt="CodeLabs"
      width={170}
      height={45}
      priority
      className={className}
    />
  );
};

export default Logo;
