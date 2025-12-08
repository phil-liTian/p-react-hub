import { PresetColors } from "../../theme/interface/presetColors";
import { genCssVar } from "../../theme/utils/genStyleUtils";

const genVariantStyle = (token) => {
  const { componentCls, antCls } = token;
  const getCssVar = genCssVar(antCls, "btn");
  console.log("token.colorLink", token.colorLink);

  return {
    [componentCls]: [
      {
        // border
        [getCssVar("border-width")]: "1px",
        [getCssVar("border-color")]: "#000",
        [getCssVar("border-style")]: "solid",

        // text
        [getCssVar("text-color")]: "#000",
      },

      {
        backgroundColor: `var(${getCssVar("bg-color")})`,
        border: `var(${getCssVar("border-width")}) var(${getCssVar(
          "border-style"
        )}) var(${getCssVar("border-color")})`,
        color: getCssVar("text-color", true),
      },
      {
        [`&${componentCls}-variant-solid`]: {
          [getCssVar("solid-bg-color")]: `var(${getCssVar("color-base")})`,

          [getCssVar("bg-color")]: `var(${getCssVar("solid-bg-color")})`,

          [getCssVar("border-color")]: "transparent",
          [getCssVar("text-color")]: token.colorTextLightSolid,
        },

        [`&${componentCls}-variant-dashed`]: {
          [getCssVar("border-style")]: "dashed",
        },

        [`&${componentCls}-variant-text, &${componentCls}-variant-link`]: {
          [getCssVar("border-color")]: "transparent",
          [getCssVar("text-color")]: `var(${getCssVar("color-base")})`,
        },
      },
      // =======type======
      {
        [`&${componentCls}-color-primary`]: {
          [getCssVar("color-base")]: token.colorPrimary,
        },

        [`&${componentCls}-color-default`]: {
          [getCssVar("color-base")]: token.defaultBorderColor,
        },
      },
      {
        [`&${componentCls}-variant-link`]: {
          [getCssVar("color-base")]: token.colorLink,
        },
      },
      PresetColors.map((colorKey) => {
        return {
          [`&${componentCls}-color-${colorKey}`]: {
            [getCssVar("color-base")]: "red",
          },
        };
      }),
    ],
  };
};

export default genVariantStyle;
