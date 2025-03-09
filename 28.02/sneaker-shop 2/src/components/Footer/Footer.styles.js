import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
  background-color: #232425;
  width: 100%;
  padding-top: 64px;
  padding-bottom: 48px;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1420px;
  margin: 0 auto;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactsInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-top: 39px;
  margin-bottom: 93px;
`

export const P = styled.p`
  color: rgba(255, 255, 255, .5);
  font-size: var(--font-size-input);
`

export const Title = styled.p`
  color: var(--color-text-secondary);
  font-size: 24px;
`

export const Copyright = styled(P)`
  font-size: 20px;
`

export const OtherContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 170px;
`

export const Links = styled.nav`
  display: flex;
  gap: 26px;
`

export const Icon = styled.img`
  width: 32px;
  height: 32px;
`

export const StyledInput = styled.input`
  width: 407px;
  border-bottom: 1px solid rgba(255, 255, 255, .5);
  padding-bottom: 15px;
  color: var(--color-text-secondary);
`