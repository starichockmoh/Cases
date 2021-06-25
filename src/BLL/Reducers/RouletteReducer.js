import {profileAPI} from "../../Api/Api";


const SET_WIN_CASE = 'SET_WIN_CASE'
const DEL_WIN_CASE = 'DEL_WIN_CASE'

let InitialState = {
    winCase: '',
    winCaseImg: ''
}


const RouletteReducer = (state = InitialState, action) => {
    switch (action.type){
        case SET_WIN_CASE:
            return {
                ...state,
                winCase: action.WinCase,
                winCaseImg: action.WinCaseImg
            }
        case DEL_WIN_CASE:
            return {
                ...state,
                winCase: '',
                winCaseImg: ''
            }
        default:
            return state

    }
}
const SetWinCase = (WinCase,WinCaseImg) => ({type:SET_WIN_CASE,WinCase,WinCaseImg})
const DelWinCase = () => ({type: DEL_WIN_CASE})

export const ShowWinCase = (WinCase,WinCaseImg,WinPrice) => async (dispatch) => {
    dispatch(SetWinCase(WinCase,WinCaseImg))
    setTimeout(() => {dispatch(DelWinCase())}, 5000)
    let profile = await profileAPI.getProfile()
    let response = await profileAPI.postUserWeapon(WinCase,WinPrice,profile.id)

}


export default RouletteReducer