<script>
    import lighthouse from "/src/assets/lighthouse.png";
    import {navBar, mainBar, subTitle, title} from "../stores"
    import AddCategoryForm from "../components/AddCategoryForm.svelte";
    import {onMount} from "svelte";

    title.set("POI - Lighthouses of Ireland");
    subTitle.set("Add a POI");
    navBar.set({
        bar: mainBar
    });

    onMount(async () => {
        //categoryList = await poiService.getCategories()
        console.log("in add category page");
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
            <AddCategoryForm/>
        </div>
    </div>
</div>