function CartList({cartItem,removeFromCart}) {
    return (
        <>
          <li className="list-group-item d-flex justify-content-between align-items-start">
                      <div className="ms-2 me-auto">
                        <div className="text-start  fw-bold">{cartItem.color}</div>
                      </div>
                      <div className="mx-5 bg-warning ">{cartItem.currency}{cartItem.price2}</div>
                      <button className="badge  bg-primary rounded-pill" onClick={()=>{removeFromCart(cartItem)}}>Remove</button>
                    </li>

        </>
    );
}
export default CartList;