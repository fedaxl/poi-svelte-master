import { writable } from "svelte/store";

export const welcomeBar = [
    {
        title: "Join Us",
        icon: "fas fa-user-cog fa-3x",
        colour: "color:rgb(70,130,180)",
        link: "/signup",
    },
    {
        title: "Login",
        icon: "fas fa-user-edit fa-3x",
        colour: "color:rgb(0,191,255)",
        link: "/login",
    },
];

export const mainBar = [{
    title: "Report",
    icon: "fas fa-map-marked fa-3x",
    colour: "color:rgb(6, 66, 115)",
    link: "/#/pois",
}, {
    title: "Poi Map",
    icon: "fas fa-globe-europe fa-3x",
    colour: "color:rgb(118,182,196)",
    link: "/#/map",
},{
    title: "Add POI",
    icon: "fas fa-plus-square fa-3x",
    colour: "color:rgb(127,205,255)",
    link: "/#/addpoi",
}, {
    title: "Settings",
    icon: "fas fa-user-edit fa-3x",
    colour: "color:rgb(29,162,216)",
    link: "/#/settings",
}, {
    title: "Logout",
    icon: "fas fa-sign-out-alt fa-3x",
    colour: "color:rgb(249, 209, 153)",
    link: "/#/logout",
}];

export const adminBar = [{
    /*
    title: "Report",
    icon: "fas fa-umbrella-beach fa-3x",
    colour: "color:rgb(63, 122, 139)",
    link: "/#/pois",
}, {
    title: "Add POI",
    icon: "fas fa-plus-square fa-3x",
    colour: "color:rgb(153, 196, 74)",
    link: "/#/addpoi",
}, {
    title: "Settings",
    icon: "fas fa-user-edit fa-3x",
    colour: "color:rgb(14, 168, 160)",
    link: "/#/settings",
}, { */
    title: "Admin",
    icon: "fas fa-users-cog fa-3x",
    colour: "color:rgb(14, 168, 160)",
    link: "/#/admin",
    }, {
    title: "Logout",
    icon: "fas fa-sign-out-alt fa-3x",
    colour: "color:rgb(156, 70, 128)",
    link: "/#/logout",
}];

export const user = writable({
    email: "",
    token: "",
    id:"",
    firstName:"",
    lastName: "",
    password: ""
});

export const poi = writable({
    id: ""
});

export const category = writable({
    id: ""
});

export const navBar = writable({
    bar: [],
});
export const title = writable("");
export const subTitle = writable("");