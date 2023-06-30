import type { SSTConfig } from "sst";
import { StaticSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "astro-static-sst",
      region: "us-east-1",
      profile: "dev",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new StaticSite(stack, "site", {
        buildOutput: "dist",
      });
      stack.addOutputs({
        url: site.url,
      });
    });
  },
} satisfies SSTConfig;
