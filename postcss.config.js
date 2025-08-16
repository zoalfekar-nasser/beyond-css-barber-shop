import postcssPresetEnv from "postcss-preset-env"; // Use 'import'

export default {

  plugins: [
    postcssPresetEnv({
      stage: 3,
    }),
  ],
};
