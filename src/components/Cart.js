import arrowUp from '../graphics/arrow-up.svg';
import arrowDown from '../graphics/arrow-down.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { increaseFromCart, resetCart } from '../store/inCartReducer';

const Cart = () => {
  const dispatch = useDispatch();
  const inCartList = useSelector(state => state.inCart.value);
  const cartTotalAmount = useSelector(state => state.inCart.cartTotalAmount);
  const navigate = useNavigate();
  async function componentDidMount() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    await fetch('http://localhost:5001/api/beans', requestOptions)
        .then(response => response.json())
        .then(data => {
          if( data.orderNr ) {
            dispatch(resetCart());
            navigate('/status', {state: {time: data.eta, orderNr:data.orderNr}})
          } else {
            alert("There is a problem in the server.")
          }
        });
  }

  return (
    <div className='cart'>
        <h2>Din beställning</h2>
        <div className='order-list'>
          {
            inCartList.map(e => {
              
              return (
                <div className='order' key={e.id}>
                  <div className='info'>
                    <p>{e.title}</p>
                    <span>{e.desc}</span>
                  </div>
                  <div className='action'>
                    <div className='inc-order'><img src={arrowUp} alt="" onClick={ () => { dispatch( increaseFromCart( {id: e.id, price: e.price}) ) } } /></div>
                    <p className=''>{e.quantity}</p>
                    <div className='dec-order'><img src={arrowDown} alt="" /></div>
                  </div>      
                </div>
              );
            })
          }
        </div>
        <div className='total'>
          <div>
          <p>Total</p>
          <span>incl moms + drönarleverans</span>
          </div>
          <p>{ cartTotalAmount }</p>
        </div>
        <Link to="#" className='take-money' onClick={ () => { componentDidMount(inCartList) } }>Take my money!</Link>
      </div>
  );
}

export default Cart;