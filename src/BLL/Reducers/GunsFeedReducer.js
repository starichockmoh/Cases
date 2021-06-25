import {gunsFeedAPI} from "../../Api/Api";

const SET_GUNS_FEED = 'SET_GUNS_FEED'

let InitialState = {
    GunsFeed: [
        {id: 1, name: 'AK47', image: 'https://ggdrop.one/public/images/cases/fHgd_usp-s.png'},
        {id: 2, name: 'AK48', image: 'https://ggdrop.one/public/images/cases/fHgd_usp-s.png'},
        {id: 3, name: 'AK49', image: 'https://ggdrop.one/public/images/cases/fHgd_usp-s.png'},
        {id: 4, name: 'AK49', image: 'https://ggdrop.one/public/images/cases/fHgd_usp-s.png'},
        {id: 5, name: 'AK49', image: 'https://ggdrop.one/public/images/cases/fHgd_usp-s.png'},
        {id: 6, name: 'AK49', image: 'https://ggdrop.one/public/images/cases/fHgd_usp-s.png'},
        {id: 7, name: 'AK49', image: 'https://ggdrop.one/public/images/cases/fHgd_usp-s.png'},
        {id: 8, name: 'AK49', image: 'https://ggdrop.one/public/images/cases/fHgd_usp-s.png'},
        {id: 9, name: 'AK49', image: 'https://ggdrop.one/public/images/cases/fHgd_usp-s.png'},
        {id: 10, name: 'AK49', image: 'https://ggdrop.one/public/images/cases/fHgd_usp-s.png'},
    ],
    TotalUserCount: 2121,
    TotalOpenCases: 2323
}

const GunsFeedReducer = (state=InitialState, action) => {
    switch (action.type){
        case SET_GUNS_FEED:
            return {
                ...state,
                GunsFeed: action.gunsFeed
            }
        default:
            return state
    }
}
const setGunsFeed = (gunsFeed) => ({type:SET_GUNS_FEED, gunsFeed})
export const GetGunsFeed = () => async (dispatch) => {
    let response = await gunsFeedAPI.getGuns()
    if (response) {
        dispatch(setGunsFeed(response))
    }
}

export default GunsFeedReducer