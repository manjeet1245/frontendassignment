import { fetchApps } from "../../api/request"
import { FETCH_APP_FAILED, FETCH_APP_REQUEST, FETCH_APP_SUCCESS } from "../actionTypes"

export const fetchApp=()=>async(dispatch)=>{
dispatch({
    type:FETCH_APP_REQUEST
})
try {
    const {data:apps}=await fetchApps();
    dispatch({
        type:FETCH_APP_SUCCESS,
        payload:apps.data
    })
} catch (error) {
    dispatch({
        type:FETCH_APP_FAILED,
        payload:error
    })
}


}