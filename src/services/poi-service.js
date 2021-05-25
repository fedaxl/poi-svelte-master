import axios from "axios";
import {user} from "../stores";
import {category} from "../stores";
import {poi} from "../stores"

export class PoiService {
    categoryList = [];
    poiList = [];
    baseUrl = "";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        if (localStorage.poi) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.poi);
        }
    }

    async getCategories() {
        try {
            const response = await axios.get(this.baseUrl + "/api/categories")
            this.categoryList = await response.data;
            return this.categoryList;
        } catch (error) {
            return [];
        }
    }

    async getPois() {
        try {
            const response = await axios.get(this.baseUrl + "/api/pois")
            this.poiList = await response.data;
            return this.poiList;
        } catch (error) {
            return [];
        }
    }

    async getImages() {
        try {
            const response = await axios.get(this.baseUrl + "/api/pois/addimage")
            this.imageList = await response.data;
            return this.imageList;
        } catch (error) {
            return [];
        }
    }

    async getUsers() {
        try {
            const response = await axios.get(this.baseUrl + "/api/users")
            this.userList = await response.data;
            return this.userList;
        } catch (error) {
            return [];
        }
    }

    async getOnePoi(id) {
        try {
            const response = await axios.get(this.baseUrl + "/api/pois/"+id )
            this.poi = await response.data;
            poi.set({
                id: id
            })
            console.log(response.data);
            return this.poi;
        } catch (error) {
           // return [];
        }
    }

    async getOneCategory(id) {
        try {
            const response = await axios.get(this.baseUrl + "/api/categories/"+id)
            this.category = await response.data;
            category.set({
                id: id
            })
            console.log(response.data);
            return this.category;
        } catch (error) {
            // return [];
        }
    }

    async getCategoryPois(id) {
        try {
            const response = await axios.get(this.baseUrl + "/api/pois/"+id+"/category")
            this.poiCategoryList = await response.data;
            category.set({
                id: id
            })
            console.log(response.data);
            return this.poiCategoryList;
        } catch (error) {
            return [];
        }
    }

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                user.set({
                    email: email,
                    id: response.data.id,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    password: response.data.password,
                    token: response.data.token
                });
                localStorage.poi = JSON.stringify(response.data.token);
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async adminlogin(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/adminusers/authenticate`, {email, password});
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            console.log(response);
            if (response.data.success) {
               user.set({
                    email: email,
                    token: response.data.token,
                    id: response.data.id,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    password: response.data.password
                });
                localStorage.poi = JSON.stringify(response.data.token);
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    }


    async logout() {
        user.set({
            email: "",
            firstName: "",
            lastName: "",
            token: ""
    });
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.poi = null;
    }


    async addPoi(name, description, latitude, longitude, category) {
        try {
            const poi = {
                name: name,
                description: description,
                latitude: latitude,
                longitude: longitude,
                category: category,
            };
            const response = await axios.post(this.baseUrl + "/api/categories/" + category._id + "/pois", poi);
            return response.status == 200;
        } catch (error) {
            return false;
        }
    }

    async addCategory(name, description) {
        try {
            const category = {
                name: name,
                description: description,
            };
            console.log(category);
            const response = await axios.post(this.baseUrl + "/api/categories", category);
            console.log(response);
            return response.status == 200;
        } catch (error) {
            return false;
        }
    }

    async updatePoi(name, description, latitude, longitude, id, category){
        try {
            const poiDetails = {
                name: name,
                description: description,
                latitude: latitude,
                longitude: longitude,
                _id: id,
                category: category
            };
            console.log(id);
            console.log(poiDetails);
            const response = await axios.put(`${this.baseUrl}/api/pois/update/${id}`, poiDetails);
            console.log(response.data)
            const newPoi = await response.data;
            poi.set(newPoi);
            return true;
        } catch (error) {
            return false;
        }

}

    async signup(firstName, lastName, email, password) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            };
            const response = await axios.post(this.baseUrl + "/api/users", userDetails);
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                user.set({
                    email: email,
                    token: response.data.token,
                    id: response.data.id,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    password: response.data.password
                });
                localStorage.poi = JSON.stringify(response.data.token);
                return true;
            }
            return false;
        }catch (error) {
            return false;
        }
    }

    async updateSettings(firstName, lastName, email, password, id) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                _id: id
            };
            console.log(id);
            console.log(userDetails);
            const response = await axios.put(`${this.baseUrl}/api/users/${id}`, userDetails);
            console.log(response.data)
            const newUser = await response.data;
            user.set(newUser);
            return true;
        } catch (error) {
            return false;
        }
    }



    async deletePoi(id) {
        try {
            console.log("in the poi-service deletePOi")
            const response = await axios.delete(`${this.baseUrl}/api/pois/${id}`);
            console.log(response.data)
            const newPoi = await response.data;
            user.set(newPoi);
            return true;
        } catch (error) {
            return false;
        }
    }

    async deleteUser(id) {
        try {
            console.log("in the poi-service deleteUser")
            const response = await axios.delete(`${this.baseUrl}/api/users/${id}`);
            console.log(response.data)
            const newUser = await response.data;
            user.set(newUser);
            return true;
        } catch (error) {
            return false;
        }
    }

    async deleteCategory(id) {
        try {
            console.log("in the poi-service deleteCategory")
            const response = await axios.delete(`${this.baseUrl}api/categories/${id}`);
            console.log(response.data)
            return true;
        } catch (error) {
            return false;
        }
    }


}