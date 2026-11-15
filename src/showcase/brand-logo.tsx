import Image from "next/image";

type BrandLogoProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  className?: string;
};

const BrandLogo = ({ src, name, width, height, className }: BrandLogoProps) => (
  <Image src={src} alt={name} width={width} height={height} className={className} />
);

export default BrandLogo;
