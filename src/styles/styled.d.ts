import "styled-components";

import Default from "./themes/default";

export type ITheme = typeof Default;

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
