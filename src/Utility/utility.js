export const formatDate=(dte)=>{
    
    let date = new Date(dte);
    let options = { month: 'long', day: 'numeric', year: 'numeric'};
    let formattedDate = date.toLocaleDateString('en-US',options);
return formattedDate.replace(',','')
}

export const formatDateString=(dateString)=>{
let date = new Date(dateString);
let isoDate = date.toISOString().slice(0, 10);
return isoDate
}


export const calculateFillRate=(adRequest,adResponse)=>{
return adRequest/adResponse *100
}

export const calculateCtr=(clicks,impression)=>{
return clicks/impression *100
}


export const getAppName=(apps,appId)=>{
return apps?.find(app=>app.app_id===appId)?.app_name
}

