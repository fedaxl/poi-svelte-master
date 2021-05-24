<script>
    import lighthouse from "/src/assets/lighthouse.png";
    import {navBar, mainBar, subTitle, title} from "../stores"
    import AddPoiForm from "../components/AddPoiForm.svelte";

    title.set("POI - Lighthouses of Ireland");
    subTitle.set("Add a POI");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <img width="300" src="{lighthouse}" alt="POI">
        </div>
    </div>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <AddPoiForm/>
        </div>
    </div>
</div>