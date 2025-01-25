module.exports = {
    default: `--require-module ts-node/register --require features/step-definitions/*.ts --format progress-bar --format json:cucumber-report.json features/*.feature`
  };
  