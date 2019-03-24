import { Dimensions, ScaledSize } from "react-native";

export const pixelRatio: number = 2;
export const window: ScaledSize = Dimensions.get("window");

export const pageHeight: number = window.height;
export const pageWidth: number = window.width;

export const smallGap: number = pageWidth * (0.0125 * pixelRatio);
export const mediumGap: number = smallGap * 2;
export const largeGap: number = smallGap * 4;
