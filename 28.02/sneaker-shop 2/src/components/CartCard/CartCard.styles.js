import styled from '@emotion/styled';

export const Card = styled.div`
  width: 903px;
  height: 134px;
  background-color: #FAFAFA;
  border-radius: 10px;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`

export const Image = styled.img`
  /* width: 197px; */
  height: 90px;
  margin-right: 36px;
  object-fit: contain;
`

export const Title = styled.h3`
  font-size: 24px;
  width: 400px;
  padding: 20px 20px 20px 36px;
  border-left: 1px solid black;
  font-weight: var(--font-regular);
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 42px; */
`

export const Price = styled.p`
  color: #666;
`

export const Amount = styled.p`
  font-weight: var(--font-bold);
  font-size: 24px;
  margin-top: 12px;
`

export const AddButton = styled.button`
  width: 76px;
  height: 76px;
  border: 1px solid rgba(255, 255, 255, .5);
  border-radius: 50%;
  background-color: #e9e9e9;

  &:hover {
    background-color: #000;
    color: #fff;

    & img, svg {
     filter: invert(1);
    }
  }
  

`
