declare module "eslint-config-next" {
  import type { Linter } from "eslint";

  const importPlugin: {
    flatConfigs: {
      recommended: Linter.Config;
      typescript: Linter.Config;
    };
  };

  export default importPlugin;
}

declare module "eslint-config-next/core-web-vitals" {
  import type { Linter } from "eslint";

  const importPlugin: {
    flatConfigs: {
      recommended: Linter.Config;
      typescript: Linter.Config;
    };
  };

  export default importPlugin;
}
