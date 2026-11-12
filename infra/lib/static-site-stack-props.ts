import type { StackProps } from "aws-cdk-lib";
import type { StaticSiteConfig } from "./config";

export interface StaticSiteStackProps extends StackProps {
  readonly config: StaticSiteConfig;
}
