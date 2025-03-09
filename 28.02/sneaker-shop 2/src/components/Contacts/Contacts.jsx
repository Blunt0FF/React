import { Contacts, ContactInfo, ContactTitle, ContactList, ContactListItem, ContactForm, InputGroup, Input, Textarea, Button, Socials, SocialIcons, SocialIcon
} from './Contacts.styles';

import snapchatLogo from '../../assets/snapchatlogocontacts.svg';
import facebookLogo from '../../assets/facebooklogocontacts.svg';
import xLogo from '../../assets/xlogocontats.svg';

export default function ContactsComponent() {
  return (
    <Contacts>
      <ContactInfo>
        <ContactTitle>Contacts</ContactTitle>
        <ContactList>
          <ContactListItem>8 800 000 00 00</ContactListItem>
          <ContactListItem>emailexample@email.com</ContactListItem>
        </ContactList>
        <ContactForm>
          <InputGroup>
            <Input type="email" placeholder="Your email" required />
            <Input type="text" placeholder="Your name" required />
          </InputGroup>
          <Textarea placeholder="Enter your message" required />
          <Button type="submit">Send</Button>
        </ContactForm>
      </ContactInfo>
      <Socials>
        <p>Find us:</p>
        <SocialIcons>
          <a href="https://www.snapchat.com">
            <SocialIcon src={snapchatLogo} alt="Snapchat" />
          </a>
          <a href="https://www.facebook.com">
            <SocialIcon src={facebookLogo} alt="Facebook" />
          </a>
          <a href="https://twitter.com">
            <SocialIcon src={xLogo} alt="X" />
          </a>
        </SocialIcons>
      </Socials>
    </Contacts>
  );
};