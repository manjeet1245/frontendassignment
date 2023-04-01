import {
  ADD_COLOUMN,
  FETCH_APP_FAILED,
  FETCH_APP_REQUEST,
  FETCH_APP_SUCCESS,
  FETCH_DATA_FAILED,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "../actionTypes";


export const dimensionsList = [
    {
      id: 'date',
      title: "Date",
      isVisible: true,
    },
    {
      id: 'app_id',
      title: "App ",
      isVisible: true,
    },
    {
      id: 'requests',
      title: "Requests",
      isVisible: false,
    },
    {
      id: 'responses',
      title: "Responses",
      isVisible: false,
    },
    {
      id: 'impressions',
      title: "Impressions",
      isVisible: false,
    },
    {
      id: 'clicks',
      title: "Clicks",
      isVisible: false,
    },
    {
      id: 'revenue',
      title: "Revenue",
      isVisible: false,
    },
    {
      id: 'fillrate',
      title: "Fill Rate",
      isVisible: false,
    },
    {
      id: 'ctr',
      title: "ctr",
      isVisible: false,
    }
  ];


const initialState = {
  reports: [],
  selectedColumns: dimensionsList,
  apps:[]
};

export const fetchReports = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state.reports,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state.reports,
        reports: payload,
        loading: false,
      };
    case FETCH_DATA_FAILED:
      return {
        ...state.reports,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const filterTheTable = (state = initialState, action) => {
  const { type, payload: colId } = action;

  switch (type) {
    case ADD_COLOUMN:
        return {
            ...state.selectedColumns,
            selectedColumns: state.selectedColumns.map((col) =>
            col.id === colId ? { ...col, isVisible: !col.isVisible } : col
            ),
            
        }
    default:
      return state;
  }
};



export const fetchTheApps=(state=initialState,action)=>{
  const {type,payload}=action;
  switch(type){
    case FETCH_APP_REQUEST:return {...state.apps,loading:true};
    case FETCH_APP_SUCCESS:return {...state.apps,apps:payload,loading:false};
    case FETCH_APP_FAILED:return {...state.apps,error:payload,loading:false};
    default:return state;
  }
}