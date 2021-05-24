<script>
    import CategoryList from "../components/CategoryList.svelte";
    import lighthouse from "/src/assets/lighthouse.png";
    import {navBar, mainBar, subTitle, title} from "../stores"

    title.set("POI - Lighthouses of Ireland");
    subTitle.set("Add a POI");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <img width="300" src="{lighthouse}" alt="POI">
    </div>
    <div class="uk-width-1-2@m">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <CategoryList/>
        </div>
    </div>
</div>