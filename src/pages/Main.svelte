<script>
    import {title, subTitle, navBar, welcomeBar} from "../stores"
    import background from "/src/assets/background.jpg";
    import {getContext} from "svelte";
    import Images from "../components/Images.svelte";

    const poiService = getContext("PoiService");

    title.set("POI - Lighthouses of Ireland");
    subTitle.set("Add a POI");
    navBar.set({
        bar: welcomeBar
    });
    poiService.logout();
</script>
<h1>POI - Lighthouses </h1>
<div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="{background}" uk-img>
</div>
<div class="uk-container uk-padding-small">
    <Images/>
</div>