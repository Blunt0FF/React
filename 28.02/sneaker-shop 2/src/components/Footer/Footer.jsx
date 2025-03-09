import fbLogo from "../../assets/facebooklogo.svg";
import twitterLogo from "../../assets/twitterlogo.svg";
import instagramLogo from "../../assets/instagramlogo.svg";
import { ContactsInfo, Copyright, FooterContent, Icon, Info, Links, OtherContent, P, StyledFooter, StyledInput, Title } from './Footer.styles';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <FooterContent>
        <Info>
          <Title>Contacts</Title>
          <ContactsInfo>
            <P>8 800 000 00 00</P>
            <P>emailexample@email.com</P>
          </ContactsInfo>
          <Copyright>{currentYear} Sneaker shop. All rights reserved</Copyright>
        </Info>
        <OtherContent>
          <Links>
            <a href="https://facebook.com/">
              <Icon src={fbLogo} alt="facebook" />
            </a>
            <a href="https://www.x.com/">
              <Icon src={twitterLogo} alt="twitter" />
            </a>
            <a href="https://www.instagram.com/">
              <Icon src={instagramLogo} alt="Instagram" />
            </a>
          </Links>
          <StyledInput type="text" placeholder="Enter your email" />
        </OtherContent>
      </FooterContent>
    </StyledFooter>
  );
}