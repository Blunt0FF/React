import {useContext, useMemo} from "react";
import {StyledTotal, Title, Text,Action, Price, TextWrapper} from "./Total.styles";
import {CartContext} from "../../context/CartContext";


export default function Total() {
    const {cartItems} = useContext(CartContext)
    const total = useMemo(() => cartItems.reduce((sum, product) => {
        return sum + parseInt(product.price)
    }, 0), [cartItems])

    return (
        <StyledTotal>
            <Title>Total</Title>
            <TextWrapper>
                {
                    cartItems.map((product) => {
                        return <Text key={product.id}>{product.name}</Text>;
                    })
                }
            </TextWrapper>
            <Action>
                <Price>Price:</Price>
                <p>{total} $</p>
            </Action>
        </StyledTotal>
    );
}
