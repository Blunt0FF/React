import {useContext} from "react"
import CartCard from "../CartCard/CartCard"
import {CartContext} from "../../context/CartContext"
import Total from "../Total/Total"

export default function Cart() {
    const {cartItems} = useContext(CartContext);

    return (
        <div style={{margin: "50px auto", maxWidth: "1420px", minHeight: "100%" }}>
            <h1 style={{ paddingBottom: 50, fontSize: 36 }}>Cart</h1>
            {cartItems.length === 0
                ?
                <p>Cart is empty</p>
                :
                <div style={{display: "flex", gap: "130px", borderTop: "1px solid #eaeaea", paddingTop: 116 }}>
                    <div style={{display: "flex", flexDirection: "column", gap: "64px"}}
                    >{(
                        cartItems.map((product) => {
                            return (<CartCard product={product} key={product.id}/>)

                        })
                    )}
                    </div>
                    <Total/>
                </div>
            }
        </div>
    )
}
