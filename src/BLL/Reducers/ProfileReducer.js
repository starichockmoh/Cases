import {profileAPI} from "../../Api/Api";

const SET_PROFILE = 'SET_PROFILE'
const SET_USER_WEAPON = 'SET_USER_WEAPON'

let InitialState = {
    username: 'Yri',
    is_active: false,
    status: 'HelloWorld',
    user_guns: [
        {id: 1, name: 'AK47', img: 'https://ggdrop.one/public/images/cases/fHgd_usp-s.png'},
        {id: 2, name: 'AK48', img: 'https://ggdrop.one/public/images/cases/fHgd_usp-s.png'},
        {id: 3, name: 'AK49', img: 'https://ggdrop.one/public/images/cases/fHgd_usp-s.png'},
        {id: 4, name: 'AK49', img: 'https://ggdrop.one/public/images/cases/fHgd_usp-s.png'},
        {id: 5, name: 'AK49', img: 'https://ggdrop.one/public/images/cases/fHgd_usp-s.png'},
        {id: 6, name: 'AK49', img: 'https://ggdrop.one/public/images/cases/fHgd_usp-s.png'},
    ],
    balance: 1000,
    avatar: 'https://klike.net/uploads/posts/2019-03/1551511804_3.jpg',
    gender: 'male'
}

export const ProfileReducer = (state = InitialState, action) => {
    switch (action.type){
        case SET_PROFILE:
            return action.profile
        case SET_USER_WEAPON:
            return {
                ...state,
                user_guns: action.weapon
            }
        default:
            return state
    }
}

const SetProfile = (profile) => ({type: SET_PROFILE, profile})
const SetUserWeapon = (weapon) => ({type: SET_USER_WEAPON, weapon})
export const GetProfile = () => async (dispatch) => {

    let response = await profileAPI.getProfile()
    if (response) {
        dispatch(SetProfile(response))
    }
    let response2 = await profileAPI.getUserWeapon()
    if (response2) {
        dispatch(SetUserWeapon(response2))
    }

}




