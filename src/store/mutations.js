
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from "./types";
let mutations={
  [RECEIVE_ADDRESS](state,address){
    state.address=address
  },
  [RECEIVE_CATEGORYS](state,{catagorys}){
    state.catagorys=catagorys
  },
  [RECEIVE_SHOPS](state,shops){
    state.shops=shops
  }
}
export default  mutations
