import { ADD_COLOUMN } from "../actionTypes"

export const filterTable=(selectedColumnId)=>{
return ({
    type:ADD_COLOUMN,
    payload:selectedColumnId
})
}