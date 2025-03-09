import styled from "@emotion/styled";

export const Contacts = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: start;
  max-width: 1420px;
  margin: 40px auto;
  padding: 20px;
  min-height: 100%;
`;

export const ContactInfo = styled.div`
  flex: 1;
  padding-right: 20px;
`;

export const ContactTitle = styled.h1`
  font-size: 28px;
  font-weight: var(--font-bold);
`;

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ContactListItem = styled.li`
  font-size: var(--font-size-basic);
  margin: 5px 0;
`;

export const ContactForm = styled.form`
  margin-top: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #f8f8f8;
  font-size: var(--font-size-input);
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #f8f8f8;
  font-size: var(--font-size-input);
`;

export const Button = styled.button`
  background: black;
  color: var(--color-text-secondary);
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: var(--font-button);
  font-size: var(--font-size-input);
  transition: background 0.3s;

  &:hover {
    background: #333;
  }
`;

export const Socials = styled.div`
  flex: 0.5;
  padding: 20px;
  background: #f8f8f8;
  border-radius: 10px;
  text-align: center;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
`;

export const SocialIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
