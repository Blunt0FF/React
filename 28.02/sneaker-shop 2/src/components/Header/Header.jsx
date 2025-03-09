import { NavLink } from 'react-router-dom';
import { HeaderContent, Navigation, StyledHeader, Title } from './Header.styles';

export default function Header() {

  return (
    <StyledHeader>
      <HeaderContent>
        <Title>Sneaker shop</Title>
        <Navigation>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? '#fff' : "rgba(255, 255, 255, .5)"
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/cart"
            style={({ isActive }) => ({
              color: isActive ? '#fff' : "rgba(255, 255, 255, .5)"
            })}
          >
            Cart
          </NavLink>
          <NavLink
            to="/contacts"
            style={({ isActive }) => ({
              color: isActive ? '#fff' : "rgba(255, 255, 255, .5)"
            })}
          >
            Contacts
          </NavLink>
        </Navigation>
      </HeaderContent>
    </StyledHeader>
  );
}