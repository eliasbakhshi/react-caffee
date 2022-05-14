import { createSlice } from '@reduxjs/toolkit'

export const inCartReducer = createSlice({
  name: 'inCart',
  initialState: {
    value: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
  },
  reducers: {
    resetCart: (state, action) => {
      state = {
                value: [],
                cartTotalQuantity: 0,
                cartTotalAmount: 0
              };
      console.log(state)
      console.log(action)
              
    },
    addToCart: (state, action) => {
      let itemIndex = state.value.findIndex( item => item.id === action.payload.id );
      if ( itemIndex >= 0 ) {
        state.value[itemIndex].quantity += 1;
      } else {
        const tempProduct = {...action.payload, quantity: 1}
        state.value.push(tempProduct);
      }
      
      state.cartTotalQuantity++;
      state.cartTotalAmount += action.payload.price;    
    },
    increaseFromCart: (state, action) => {
      let itemIndex = state.value.findIndex( item => item.id === action.payload.id );
      if ( itemIndex >= 0 ) {
        state.value[itemIndex].quantity += 1;
      }
      state.cartTotalQuantity++;
      console.log(action.payload)
      state.cartTotalAmount += action.payload.price;    
      
    },
    decreaseFromCart: (state, action) => {
      console.log(state)
      console.log(action)
      let itemIndex = state.value.findIndex( item => {
        console.log(item)
        return item.id === action.payload 
      }
        );
      if ( itemIndex <= 0 ) {
        console.log(itemIndex);
        if ( itemIndex.quantity <= 1 ) {
          state.value[itemIndex].quantity -= 1;
        } else {
          state.value.splice(itemIndex, 1);
        }
      } else {
      }
      state.cartTotalQuantity--;
      state.cartTotalAmount -= action.payload.price;    
    },
  }
})

// Action creators are generated for each case reducer function
export const { resetCart, addToCart, increaseFromCart, decreaseFromCart } = inCartReducer.actions

export default inCartReducer.reducer