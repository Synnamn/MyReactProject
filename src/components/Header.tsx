import { Children } from "react";

interface Props {
  children: string;
}

const Header = ({ children }: Props) => {
  return <div className="heading">{children}</div>;
};

export default Header;
