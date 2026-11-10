import Image from "next/image";
import { IMAGES } from "@/content/images";

const LOGO = { alt: "Amazon Web Services", width: 240, height: 141 };

const AwsLogo = () => <Image src={IMAGES.aws.logo} alt={LOGO.alt} width={LOGO.width} height={LOGO.height} />;

export default AwsLogo;
