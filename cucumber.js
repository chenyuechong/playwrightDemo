module.exports = {
    default: `--require-module ts-node/register --require test/step-definitions/*.ts --require src/hooks/hooks.ts --format progress-bar --format json:cucumber-report.json test/features/*.feature`
  };
  