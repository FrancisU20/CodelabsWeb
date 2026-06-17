#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { getEnvironmentConfig } from "../lib/config";
import { StaticSiteStack } from "../lib/static-site-stack";

const app = new cdk.App();
const stage = app.node.tryGetContext("stage") ?? "prod";
const config = getEnvironmentConfig(stage);

new StaticSiteStack(app, config.stackName, {
  env: config.env,
  config,
});
