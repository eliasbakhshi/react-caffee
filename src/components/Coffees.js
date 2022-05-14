import addIcon from '../graphics/add.svg';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/inCartReducer';


const Coffees = ({coffee}) => {
  const dispatch = useDispatch();

  function addToCartHandler (coffee) {
    dispatch( addToCart(coffee) );
    console.log("add to cart clicked");
  }

  return (
    <div className='coffee' id={coffee.id} onClick={() => {dispatch(addToCart( coffee) )}} >
      <div>
        <img src={ addIcon } alt="" />
      </div>
      <div>
        <p>{ coffee.title }</p>
        <span>{ coffee.desc }</span>
      </div>          
      <p>{ coffee.price }</p>
    </div>
  )

}

export default Coffees;