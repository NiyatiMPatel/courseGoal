import { type FC } from "react";
import goalsImg from '../assets/goals.webp';

const Header: FC = () => {
  return (
    <header>
     <img src={goalsImg} alt="Course Goal Image" />
     <h1>Your Course Goals</h1>
    </header>
  )
}

export default Header;