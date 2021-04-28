import React from 'react'

const initialState = {
    isFetching : false
}

function isFetching(state = initialState, action) {
    switch (action.type) {
        case 'ON':
            return {...state,
            isFetching: true
            }

        case 'OFF':
            return {...state,
                isFetching: false
            }
        default:
            return state
    }
}


 const fetchingON = () =>({type: 'ON'})
 const fetchingOFF = () =>({type: 'OFF'})

export const setFetching = (boolean) => {
    if(boolean){
        return (dispatch) => { dispatch(fetchingON) }
    }else{
        return (dispatch) => { dispatch(fetchingOFF) }
    }


}

export default isFetching

