import * as axios from "axios";


const instanse = axios.create({
    baseURL: 'https://ancient-thicket-21722.herokuapp.com/api',
    headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
});


export const authAPI = {
    login(name , password){
        console.log(name, password)
        return instanse.post('/token/', {
            username: name,
            password: password,
        }).then(function (response) {
            console.log(response);
            localStorage.setItem('token', response.data.access);
            return response
        }).catch(function (error) {
            console.log(error);
        });
    },
    logout() {
        localStorage.removeItem('token')
    }
}

export const profileAPI ={
    getProfile(){
        return instanse.get("/v2/current-user/")
            .then(response => {
                console.log(response);
                return response.data;
            }).catch(function (error) {
                console.log(error);
            });
    },
    getUserWeapon(){
        return instanse.get("/v2/weapon_user/")
            .then(response => {
                return response.data
            })
    },
    postUserWeapon(name, price, profile) {
        return instanse.post("/v2/weapon_user/", {name, price, profile})
            .then(response => {
            })
    }
}

export const caseAPI = {
    getCases(){
        return instanse.get("/v1/case/")
            .then(response => {
                console.log(response);
                return response.data;
            }).catch(function (error) {
                console.log(error);
            });
    },
    getWeapon(id){
        let url = "/v1/case/" + id
        return instanse.get(url)
            .then(response => {
                console.log(response);
                return response.data;
            }).catch(function (error) {
                console.log(error);
            });
    },
}

export const gunsFeedAPI = {
    getGuns(){
        return instanse.get("/v1/weapon")
            .then(response => {
                console.log(response);
                return response.data;
            }).catch(function (error) {
                console.log(error);
            });
    }
}



