<script>
    import 'leaflet/dist/leaflet.css';
    import {mainBar, navBar, subTitle, title} from "../stores"
    import {LeafletMap} from '../services/leaflet-map';
    import {getContext, onMount} from "svelte";
    const poiService = getContext("PoiService");

    let poiList = [];
    //the geographical centre on Ireland
    let latitude = 53.5004;
    let longitude = -7.9996;

    let map;
    onMount(async () => {
        const mapConfig = {
            location: {lat: latitude, lng: longitude},
            zoom: 7,
            minZoom: 5,
        };
        map = new LeafletMap("poi-map", mapConfig, 'Terrain');
        map.addLayerGroup('Lighthouses');
        map.showZoomControl();
        map.showLayerControl();
        poiList = await poiService.getPois();
        poiList.forEach(poi=>{
            const poiStr = `${poi.name} added by ${poi.contributor.firstName}`;
            if (poi.name) {
                map.addMarker({lat: poi.latitude, lng: poi.longitude}, poiStr, 'Lighthouses');
            }
        });
    });


    title.set("POI - Lighthouses of Ireland");
    subTitle.set("Add a POI");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-1-1">
        <div id="poi-map" class="ui embed" style="height:800px"></div>
    </div>
</div>