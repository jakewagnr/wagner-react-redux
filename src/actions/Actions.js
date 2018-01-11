import axios from "axios/index";

export const FETCH = "FETCH";
export const LIST = "LIST";
export const DETAIL = "DETAIL";

export function getGeolocalizedList() {
    return (dispatch)=> {
       dispatch(isFetching(2));
        navigator.geolocation.getCurrentPosition(
            (position) => {
                dispatch(fetchList(position.coords.latitude, position.coords.longitude));
            },
            (error) => {
                console.log("Error", error);
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
    }
}

export function fetchList(lat, long) {
    return (dispatch) => {
        axios.get('https://api.yelp.com/v3/businesses/search?latitude='+lat+'&longitude='+long+'&sort_by=distance&term=restaurants',
            {
                headers: {"Authorization": "Bearer lGHVdymUf0bnx3AlJdOqWuW5p7nn750uXpTN9WTeHFWLoyzm22a1MVlDUHjjkelhem2gO0B3JNpjTaUt_Sh6eI4Vayvf-OGobYHvfQ5XZLhdenvAWGTyE9PxTZVWWnYx"}
            })
            .then(function (response) {
                console.log(response);
                let data = response.data.businesses;
                console.log(data);
                dispatch(isFetching(3));
                dispatch(storeList(data));
                return data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export function isFetching(status) {
    return {
        type: FETCH,
        status: status
    }

}

export function storeList(data) {
    return{
        type: LIST,
        data: data
    }

}
export function detailDispatch(id){
    return(dispatch)=>{
        dispatch(toDetail(id));
        dispatch(isFetching(4))
    }
}
export function toDetail(id) {
    return{
        type: DETAIL,
        item: id
    }
}
