<script>
    import {title, subTitle, navBar, welcomeBar} from "../stores"
    import background from "/src/assets/background.jpg";
    import {getContext} from "svelte";
    //import Images from "../components/Images.svelte";

    const poiService = getContext("PoiService");

    title.set("POI - Lighthouses of Ireland");
    subTitle.set("Add a POI");
    navBar.set({
        bar: welcomeBar
    });
    poiService.logout();
</script>

<div class="uk-container-xlarge uk-align-center">
    <div class="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="{background}" uk-img>
        <div>
            <h1>Lighthouses of Ireland</h1>
            <a href="https://www.irishlights.ie/tourism/our-lighthouses/lighthouse-list.aspx"> <button class="uk-button uk-button-default">For more info: irishlights.ie</button></a></div>
    </div>

    <div class="uk-child-width-1-1@s" uk-grid>
        <div>
            <div class="uk-light uk-background-secondary uk-padding">
                <h3>Lighthouses of Ireland</h3>
                <h4>POI assignment 1 for Enterprise Web Development</h4>
                <p>For hundreds of years lighthouses have helped seafarers find their way. Now they shine their light on a truly unique experience around the stunning coastline of Ireland.</p>
                <p>Sign Up or Log In to discover all the point of interests added to the Irish Coasts.</p>
            </div>
        </div> </div></div>