module.exports = {
  default: {
    require: ["features/step-definitions/**/*.js"],
    publishQuiet: true,
    paths: ["features/**/*.feature"],
    worldParameters: {
      browser: "chromium",
    },
  },
};
