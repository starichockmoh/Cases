import {caseAPI} from "../../Api/Api";

const SET_CASE_INFO = 'SET_CASE_INFO'

let InitialState = {
    id: 1,
    name: 'SuperGunGun',
    price: 123,
    image: 'https://ggdrop.one/public/images/cases/q9aQ_kamin.png',
    weapon: [
        {id: 1, name: 'AK47', image: 'https://ggdrop.one/public/images/cases/fHgd_usp-s.png'},
        {id: 2, name: 'AK48', image: 'https://ggdrop.one/public/images/cases/q9aQ_kamin.png'},
        {id: 3, name: 'AK49', image: 'https://ggdrop.one/public/images/cases/kql9_za-stol.png'},
        {id: 4, name: 'AK49', image: 'https://ggdrop.one/public/storage/mystery/BkaVeEFhwAWQxZ7S5faVGbEKpgWbedZNG1XqSNTg.png'},
        {id: 5, name: 'AK49', image: 'https://cdn0.iconfinder.com/data/icons/fruits/128/Lemon.png'},
        {id: 6, name: 'AK49', image: 'https://cdn0.iconfinder.com/data/icons/fruits/128/Kiwi.png'},
        {id: 7, name: 'AK49', image: 'https://cdn0.iconfinder.com/data/icons/fruits/128/Pear.png'},
    ],
}


const CaseInfoReducer = (state = InitialState, action) => {
    switch (action.type){
        case SET_CASE_INFO:
            return action.caseInfo
        default:
            return state

    }
}
const SetCaseInfo = (caseInfo) => ({type: SET_CASE_INFO, caseInfo})
export const GetCaseInfo = (id) => async (dispatch) => {
    let response = await caseAPI.getWeapon(id)
    if (response) {
        dispatch(SetCaseInfo(response))
    }
}

export default CaseInfoReducer