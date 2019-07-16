import *as types from './types'

let actions={
 [types.RECEIVE_ADDRESS] : ({commit,state},payloa) => {
   console.log(payloa)
 }

};
export default actions;
