import { getImageProps } from "next/image";

const LOGO = { alt: "Amazon Web Services", width: 240, height: 141 };
const DARK_SCHEME = "(prefers-color-scheme: dark)";

const AwsLogo = () => {
  const { props: darkProps } = getImageProps({ ...LOGO, src: "/aws/aws-logo-dark.webp" });
  const { props: lightProps } = getImageProps({ ...LOGO, src: "/aws/aws-logo-light.webp" });

  return (
    <picture>
      <source media={DARK_SCHEME} srcSet={darkProps.srcSet ?? darkProps.src} />
      <img {...lightProps} alt={LOGO.alt} />
    </picture>
  );
};

export default AwsLogo;
