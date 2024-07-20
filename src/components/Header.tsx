import { type FC } from "react";
import { HeaderProps } from "../types";


const Header: FC<HeaderProps> = ({image, children}) => {
  return (
    <header>
     <img src={image.src} alt={image.alt} />
     {children}
    </header>
  )
}

export default Header;