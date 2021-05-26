<script>
    import {getContext, onMount} from 'svelte'
    import {push} from "svelte-spa-router";
    import redlighthouse from "/src/assets/red-lighthouse.jpg";


    const poiService = getContext("PoiService");
    let poiList = [];
    let categoryList = [];
    let userList = [];
    let id = "";
    let errorMessage = "";
    let poi = "";
    let poiCount = 0;
    let userCount = 0;
    let categoryCount = 0;


    onMount(async () => {
        poiList = await poiService.getPois();
        poiCount = poiList.length;
        categoryList = await poiService.getCategories();
        categoryCount = categoryList.length;
        userList = await poiService.getUsers();
        userCount = userList.length;
        console.log("in analytics header onMount");
    });

   </script>

<div class="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src={redlighthouse} uk-img>
    <div class="uk-grid-column-large uk-grid-row-large uk-text-left" uk-grid>
        <div>
            <i class style="color:black">Website Report:</i>
        </div>
        <div>
            <i style="color:black">{userCount} users</i>
        </div>
        <div>
            <i style="color:black">{poiCount} pois</i>

        </div>
        <div>
            <i style="color:black">{categoryCount} categories</i>
        </div>
    </div>
</div>