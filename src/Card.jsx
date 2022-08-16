import ReactStars from "react-rating-stars-component";

function Card({ item, presentCartItem, addToCart }) {
    return (
        <>
            <div className="col-4 col-lg-4 col-md-6 col-sm-12 mt-5 mb-3">
                <div className="card productCard" >
                {
                  item.isSale ?   <div class="badge bg-success text-white m-1 position-absolute" style={{ top:'0.5rem',right:'0.5rem' }}>Sale</div> :  <div class="badge bg-danger text-white m-1 position-absolute" style={{ top:'0.5rem',right:'0.5rem' }}> Out of Sale</div>
                }
               
                    <img className="card-img-top" src={item.url} alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title text-center">{item.color}</h5>
                       <div  className=" mt-0 mb-0 mx-5 px-3 text-center offset-3"><ReactStars activeColor="#F9BC07" size={22} value={item.rating} /></div> 
                        <div className="card-text text-center mb-2">
                       
                        <strike><span>{item.currency}{item.price1}</span></strike>
                          &nbsp;<span>{item.currency}{item.price2}</span>
                                               
                        </div>
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center">
                                <button disabled={!item.isSale||presentCartItem.some((obj) => obj.id === item.id)} onClick={() => { addToCart(item) }} className="btn  bg-info btn-outline-dark" type="button" >Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
             

            </div>

        </>
    );
}
export default Card;