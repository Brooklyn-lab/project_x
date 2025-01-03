// import original module declarations
import "styled-components"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string

    colors: {
      "base-accent": string
      secondary: string
    }
  }
}
