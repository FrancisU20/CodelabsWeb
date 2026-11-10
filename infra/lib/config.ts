import type { Environment } from "aws-cdk-lib";

export interface StaticSiteConfig {
  readonly stage: "prod";
  readonly stackName: string;
  readonly env: Environment;
  readonly domainName: string;
  readonly alternateDomainNames: readonly string[];
  readonly hostedZoneDomainName: string;
  readonly githubOwner: string;
  readonly githubRepository: string;
  readonly githubBranch: string;
}

const prodConfig: StaticSiteConfig = {
  stage: "prod",
  stackName: "CodelabsWebProdStack",
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: "us-east-1",
  },
  domainName: "codelabsecuador.com",
  alternateDomainNames: ["www.codelabsecuador.com"],
  hostedZoneDomainName: "codelabsecuador.com",
  githubOwner: "FrancisU20",
  githubRepository: "CodelabsWeb",
  githubBranch: "master",
};

export const getEnvironmentConfig = (stage: string): StaticSiteConfig => {
  if (stage === "prod") {
    return prodConfig;
  }

  throw new Error(`Unsupported stage: ${stage}`);
};
