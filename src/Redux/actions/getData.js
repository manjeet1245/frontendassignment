import { fetchData } from "../../api/request"
import { FETCH_DATA_FAILED, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "../actionTypes"

export const getData=(startDate,endDate)=>async(dispatch)=>{
    dispatch({
        type:FETCH_DATA_REQUEST,
        loading:true
    })
    try {
        const {data}=await fetchData(startDate,endDate)
        if(startDate && endDate)
        dispatch({
            type:FETCH_DATA_SUCCESS,
            payload:data,
            loading:false
        })
    } catch (error) {
        dispatch({
            type:FETCH_DATA_FAILED,
            payload:error,
            loading:false
        })
    }
}