import { HeaderWrapper, Logo, Nav, NavItem } from "./Header.styles";

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo>IDT</Logo>
      <Nav>
        <NavItem className="active">About</NavItem>
        <NavItem>Project</NavItem>
        <NavItem>Diary</NavItem>
        <NavItem>QnA</NavItem>
      </Nav>
    </HeaderWrapper>
  );
}
