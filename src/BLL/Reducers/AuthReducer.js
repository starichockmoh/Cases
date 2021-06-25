import {authAPI} from "../../Api/Api";

const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'

let  InitialState = {
    isAuth: false
}

export const AuthReducer = (state = InitialState, action) => {
    switch (action.type){
        case LOGIN_USER_SUCCESS:
            return{
                ...state,
                isAuth: true
            }
        case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                isAuth: false
            }
        default:
            return state
    }

}

const LogInSuccess = () => ({type: LOGIN_USER_SUCCESS})
const LogOutSuccess = () => ({type: LOGOUT_USER_SUCCESS})

export const LoginUser = (username, password) => async (dispatch) => {
    let response = await authAPI.login(username,password)
    dispatch(LogInSuccess())
}
export const LogoutUser = () => async (dispatch) => {
    await authAPI.logout()
    dispatch(LogOutSuccess())
}
export const AuthUser = () => async(dispatch) => {
    let tmp = localStorage.getItem('token')
    if (tmp){
        dispatch(LogInSuccess())
    }
    else{
        dispatch(LogOutSuccess())
    }
}
