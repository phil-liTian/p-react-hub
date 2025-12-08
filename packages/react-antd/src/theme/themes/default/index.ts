/*
 * @Author: phil
 * @Date: 2025-12-03 20:39:55
 */
import type { SeedToken } from "../../interface/seeds";
import genColorMapToken from "../shared/genColorMapToken";
import { generateNeutralColorPalettes, generateColorPalettes } from "./colors";

export default function derivative(token: SeedToken) {
  return {
    ...token,

    ...genColorMapToken(token, {
      generateNeutralColorPalettes,
      generateColorPalettes,
    }),
  };
}
