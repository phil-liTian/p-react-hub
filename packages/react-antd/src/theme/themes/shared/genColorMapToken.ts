import type { SeedToken } from "../../interface/seeds";
import type { GenerateNeutralColorMap, GenerateColorMap } from "../ColorMap";

interface PaletteGenerators {
  generateColorPalettes: GenerateColorMap;
  generateNeutralColorPalettes: GenerateNeutralColorMap;
}

export default function genColorMapToken(
  seed: SeedToken,
  { generateNeutralColorPalettes, generateColorPalettes }: PaletteGenerators
) {
  const { colorBgBase } = seed;
  const neutralColors = generateNeutralColorPalettes(colorBgBase);

  const colorLink = seed.colorLink || seed.colorInfo;
  const linkColors = generateColorPalettes(colorLink);
  console.log("linkColors[6]", linkColors[6]);

  return {
    ...neutralColors,

    colorWhite: "#fff",

    colorLink: linkColors[6],
  };
}
