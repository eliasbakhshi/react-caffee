import graphicsFooter from '../graphics/graphics-footer.svg';
import graphicsHeader from '../graphics/graphics-header.svg';
import bagIcon from '../graphics/bag.svg';
import Cart from './Cart';
import Overlay from './Overlay';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../store/inCartReducer';
import { set } from '../store/listReducer';
import { useEffect, useRef, useState } from 'react';
import Coffees from './Coffees';


const Menu = () => {
  const cartTotalQuantity = useSelector(state => state.inCart.cartTotalQuantity)
  const menu = useSelector(state => state.list.value)
  const dispatch = useDispatch()
  const list = useRef();
  const [toggleMenu, setToggleMenu] = useState(false)



  
  

  useEffect( () => {
    async function getMenu() {
      const response = await fetch('http://localhost:5001/api/beans');
      const data = await response.json();
      dispatch(set(data.menu))     
    }

    getMenu();
  },[]);

  const coffeeList = menu.map( coffeeInfo => {
    return <Coffees coffee={coffeeInfo} key={coffeeInfo.id} />
  });


  return(
    <>
    <section className="frame menu">
      <div className='bag' onClick={ () => setToggleMenu( !toggleMenu ) }>
        <img src={bagIcon} alt="" />
        <div>{ cartTotalQuantity }</div>
      </div>
      <h2>Meny</h2>
      <div className='list' ref={ list }>
        { coffeeList }
      </div>
      { toggleMenu ? <Cart /> : null}
      { toggleMenu ? <Overlay /> : null}
      

      <img className='bg-top' src={graphicsHeader} alt="" />
      <img className='bg-bottom' src={ graphicsFooter } alt="" />

    </section>
    </>
  );
  }
  
  export default Menu;