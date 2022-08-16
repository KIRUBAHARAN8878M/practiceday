import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './Nav';
import Card from './Card';
import CartList from './CartList';
import { useState } from 'react';
import Home from './Home';
import Footer from './Footer';

function App() {
  const data = [
    {
      id: 1,
      color: 'Light Green Tee',
      price1: 9999,
      price2: 5000,
      currency: "$",
      url: "image/img1.jpg",
      rating: 4,
      isSale:false
    },
    {
      id: 2,
      color: 'Dark Green Tee',
      price1: 8999,
      price2: 4500,
      currency: "$",
      url: "image/img2.jpg",
      rating: 3,
      isSale:true
    },
    {
      id: 3,
      color: 'Shaddow Grey',
      price1: 6599,
      price2: 4500,
      currency: "$",
      url: "image/img3.jpg",
      rating: 2,
      isSale:true
    },
    {
      id: 4,
      color: 'Meroon Tee',
      price1: 5599,
      price2: 3000,
      currency: "$",
      url: "image/img4.jpg",
      rating: 4,
      isSale:false
    },
    {
      id: 5,
      color: 'Pink Tee',
      price1: 3999,
      price2: 1000,
      currency: "$",
      url: "image/img5.jpg",
      rating: 5,
      isSale:true
    },
    {
      id: 6,
      color: 'Black Tee',
      price1: 6999,
      price2: 2000,
      currency: "$",
      url: "image/img6.jpg",
      rating: 4,
      isSale:true
    },
    {
      id: 7,
      color: 'White Tee',
      price1: 4999,
      price2: 3000,
      currency: "$",
      url: "image/img7.jpg",
      rating: 3,
      isSale:true
    },
    {
      id: 8,
      color: 'Shaddow G-blue Tee',
      price1: 5999,
      price2: 2000,
      currency: "$",
      url: "image/img8.jpg",
      rating: 4,
      isSale:false
    }
  ];

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let addToCart = (item) => {
    setCart([...cart, item]);
    setTotal(total + item.price2);
  }

  let removeFromCart = (item) => {
    let index = cart.findIndex((obj) => obj.id === item.id);
    cart.splice(index, 1);
    setCart([...cart]);
    setTotal(total - item.price2);
  }

  return (
    <>
      <Nav className="navbar1"></Nav>
      <Home></Home>
      
      <section id="card">
        <div className="container-fluid px-4 px-lg-5  box">
          <div className="row">
            <div className="col-8 col-lg-8 col-md-8 col-sm-12 box1">
              <div className="row gx-4 gx-lg-5 ">
                {
                  data.map((item) => {
                    return <Card item={item}
                      presentCartItem={cart}
                      addToCart={addToCart}>
                    </Card>
                  })
                }
              </div>
            </div>
            <div className="col-4 col-lg-4 col-md-4 box2">
              <div className="mx-auto" >
                <div className="card mt-5" >
                  <div className="card-header fw-bold">
                    <h3 className="text-center"> Cart</h3>
                  </div>
                  {
                    cart.length === 0 ? <div className="mx-auto"><h5>Cart is Empty</h5></div> :
                      <>
                        <ul className="list-group list-group-numbered  ">
                          {
                            cart.map((cartItem) => {
                              return <CartList
                                cartItem={cartItem}
                                removeFromCart={removeFromCart}>
                              </CartList>
                            })
                          }
                        </ul>
                        <div className="card-footer ">
                          <h4 className=" offset-3"> Total -
                            <span className=" offset-2 bg-warning">${total}</span>
                          </h4>
                        </div>
                      </>
                  }

                </div>
              </div>

            </div>
          </div>
        </div>
      </section  >

    

      
        <Footer></Footer>
    
  
    </>
  );
}

export default App;
