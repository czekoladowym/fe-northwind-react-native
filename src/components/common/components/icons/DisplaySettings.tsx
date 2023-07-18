import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    {...props}
  >
    <Path d="M300-370h40v-140h-40v50h-60v40h60v50Zm100-50h320v-40H400v40Zm220-110h40v-50h60v-40h-60v-50h-40v140Zm-380-50h320v-40H240v40Zm90 460v-80H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H630v80H330ZM140-260h680v-520H140v520Zm0 0v-520 520Z" 
    			fill="#d1d5db"
          />
  </Svg>
)
export default SvgComponent
