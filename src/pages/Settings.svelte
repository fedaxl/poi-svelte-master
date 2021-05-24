<script lang="ts">
    import {mainBar, navBar, subTitle, title} from "../stores";
    import lighthouse from "/src/assets/lighthouse.png";
    import SettingsForm from "../components/SettingsForm.svelte";

    title.set("POI - Lighthouses of Ireland");
    subTitle.set("Add a POI");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <img width="300" src="{lighthouse}" alt="POI">
    </div>
    <div class="uk-width-1-2@m">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge">
            <h3 class="uk-card-title uk-text-center">Edit any entry and press save</h3>
            <SettingsForm />
        </div>
    </div>
</div>
