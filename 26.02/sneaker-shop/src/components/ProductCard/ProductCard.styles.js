import styled from '@emotion/styled';

export const Card = styled.div`
  width: 386px;
  height: 393px;
  border: 2px solid rgba(0, 0, 0, .15);
  border-radius: 42px;
  padding: 39px;
`

export const Image = styled.img`
  width: 278px;
  height: 127px;
  margin-bottom: 32px;
`

export const Title = styled.h3`
  font-size: 24px;
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 42px;
`

export const Price = styled.p`
  color: rgba(255, 255, 255, .5);
`

export const Amount = styled.p`
  font-weight: var(--font-bold);
`

export const AddButton = styled.button`
  width: 37px;
  height: 37px;
  border: 1px solid rgba(255, 255, 255, .5);
  border-radius: 50%;
  background-color: #e9e9e9;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`