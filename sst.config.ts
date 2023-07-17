import type { SSTConfig } from "sst";
import {
  Function,
  FunctionCode,
  FunctionEventType,
} from "aws-cdk-lib/aws-cloudfront";
import { AstroSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "hybrid-project",
      region: "us-east-1",
      profile: "dev",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new AstroSite(stack, "site", {
        cdk: {
          distribution: {
            defaultRootObject: "index.html",
          },
        },
      });
      stack.addOutputs({
        url: site.url,
      });
    });
  },
} satisfies SSTConfig;
