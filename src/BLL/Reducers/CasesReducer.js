import {authAPI, caseAPI, profileAPI} from "../../Api/Api";
import {LoginUser} from "./AuthReducer";


const SET_CASES = 'SET_CASES'


let InitialState = {
    cases: [
        {id: 1, name: 'SuperGun', image: 'https://ggdrop.one/public/images/cases/q9aQ_kamin.png', price: 31},
        {id: 3, name: 'Huita', image: 'https://ggdrop.one/public/images/cases/kql9_za-stol.png', price: 69},
        {id: 2, name: 'Huita', image: 'https://ggdrop.one/public/images/cases/kql9_za-stol.png', price: 69},
        {id: 4, name: 'NameOfCase', image: 'https://ggdrop.one/public/storage/mystery/BkaVeEFhwAWQxZ7S5faVGbEKpgWbedZNG1XqSNTg.png', price: 100},
        {id: 5, name: 'SuperGun', image: 'https://ggdrop.one/public/images/cases/q9aQ_kamin.png', price: 31},
        {id: 6, name: 'Huita', image: 'https://ggdrop.one/public/images/cases/kql9_za-stol.png', price: 69},
        {id: 7, name: 'Huita', image: 'https://ggdrop.one/public/images/cases/kql9_za-stol.png', price: 69},
    ]
}


const CasesReducer = (state=InitialState,action) => {
    switch (action.type){
        case SET_CASES:
            return {
                ...state,
                cases: action.cases
            }
        default:
            return state
    }
}


const SetCases = (cases) => ({type:SET_CASES, cases})
export const GetCases = () => async (dispatch) => {
    let response = await caseAPI.getCases()
    if (response) {
        dispatch(SetCases(response))
    }

}



export default CasesReducer