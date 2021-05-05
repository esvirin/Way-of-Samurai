const initialState = {
    isFetching: false as boolean
}
export type initialStateType = typeof initialState


function isFetching(state = initialState, action: any): initialStateType {
    switch (action.type) {
        case 'ON':
            return {
                ...state,
                isFetching: true,

            }

        case 'OFF':
            return {
                ...state,
                isFetching: false
            }
        default:
            return state
    }
}

type fetchingONActiontype = {type: 'ON'}
type fetchingOFFActiontype = {type: 'OFF'}

const fetchingON = ():fetchingONActiontype => ({type: 'ON'})
const fetchingOFF = ():fetchingOFFActiontype => ({type: 'OFF'})

export const setFetching = (boolean: boolean) => {
    if (boolean) {
        return (dispatch: any) => {
            dispatch(fetchingON)
        }
    } else {
        return (dispatch: any) => {
            dispatch(fetchingOFF)
        }
    }


}

export default isFetching

