<script lang="ts">
    import {getContext, onMount} from "svelte";
    import {user} from "../stores";
    import {poi} from "../stores";
    import {push} from "svelte-spa-router";

    let firstName = $user.firstName;
    let lastName = $user.lastName;
    let email = $user.email;
    let password = $user.password
    let message = "";
    console.log($user._id);
    let poiView = {
       poi: {name:"",
            description: "",
            latitude: "",
            longitude: "",
            category: {},
            contributor:{},},
        weather: {
            temperature: "",
            feelsLike: "",
            clouds: "",
            windSpeed: "",
            windDirection: "",
            visibility: "",
            humidity: ""
        }
    };
    let category = {};
    let contributor = {};
    let name = "";
    let description = "";
    let latitude = "";
    let longitude = "";
    //let weather = {};
    let clouds = "";
    let temperature = "";
    let feelsLike = "";
    let windSpeed = "";
    let humidity = "";
    let categoryList = [];
    let selectedCategory = 0;

    const poiService = getContext("PoiService");

    onMount(async () => {
        poiView = await poiService.getOnePoi($poi.id);
        name = poiView.poi.name;
        description = poiView.poi.description;
        latitude = poiView.poi.latitude;
        longitude = poiView.poi.longitude;
        category = poiView.poi.category;
        contributor = poiView.poi.contributor;
        clouds = poiView.weather.clouds;
        temperature = poiView.weather.temperature;
        feelsLike = poiView.weather.feelsLike;
        windSpeed = poiView.weather.windSpeed;
        humidity = poiView.weather.humidity;
        console.log(poiView);
        categoryList = await poiService.getCategories();
        console.log(categoryList);
    });

    //const poi = await poiService.getOnePoi($poi.id)
    //let name

    async function save() {
        console.log(name, description, latitude, longitude, $poi.id)
        let success = await poiService.updatePoi(name,  description, latitude, longitude, $poi.id, categoryList[selectedCategory])
        if (success) {
            message = "Settings updated";
            //await push("/pois");
        } else {
            message = "Error Trying to save settings";
        }
    }
</script>

div class="uk-container">
<div class="uk-margin"></div>
<h3>{name}</h3>
<div class="uk-text-center uk-grid" uk-grid="">
    <div class="uk-width-expand@m uk-animation-slide-left uk-first-column">
        <div id="map-main" class="leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom" tabindex="0" style="height: 560px; position: relative;">
        <div class="uk-card uk-card-default uk-card-body">
            <div class="uk-text-center uk-text-small uk-grid" uk-grid="">
                <div class="uk-width-expand@m uk-first-column">
                    <div class="uk-card uk-card-default uk-card-body uk-padding-small">
                        <caption>GPS-compatible</caption>
                        <table class="uk-table uk-table-divider uk-table-small">
                            <tbody>
                            <tr>
                                <td>Latitude</td> <td>{poi.latitude}</td>
                            </tr>
                            <tr><td>Longitude</td> <td>{poi.longitude}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div> <div class="uk-width-1-2@m">
                <div class="uk-card uk-card-default uk-card-body uk-padding-small">
                    <caption>Category</caption>
                    <table class="uk-table uk-table-divider uk-table-small">
                        <tbody>
                        <tr>
                            <td>Location</td> <td>{poi.category.name}</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
            <div class="uk-text-center uk-text-small uk-grid" uk-grid="">
                <div class="uk-width-expand@m uk-first-column">
                    <div class="uk-card uk-card-default uk-card-body uk-padding-small">
                        <caption>Local Weather</caption>
                    </div>
                            <div class="uk-text-left uk-flex-center uk-flex-top" uk-grid>
                                <div class="uk-width-2-5">
                                    <h4>Current weather:</h4>
                                    <p>Clouds: {clouds}</p>
                                    <p>Temperature: {temperature}C</p>
                                    <p>Feels like: {feelsLike}C</p>
                                    <p>Wind Speed: {windSpeed}</p>
                                    <p>Humidity: {humidity}%</p>
                                </div>
                </div>
            </div></div>
    </div>
    <div class="uk-width-1-3@m uk-animation-slide-right">
        <div class="ui segment">
            <div class="description"><p>
                <strong>{poi.name}: </strong>{poi.description}
            </p>
            </div>
        </div>
    </div>
</div>
<div class="uk-margin">
    <a href="/delete-poi/{poi._id}" class="uk-icon-link" uk-icon="trash">Delete POI</a>
    <a href="/update-poi/{poi._id}" class="uk-icon-link" uk-icon="pencil">Update POI</a>
</div>
<div class="uk-margin"></div>
</div>

