<script>
    import {onMount, getContext} from 'svelte'
    import {push} from "svelte-spa-router";
    //import {category} from "../stores";
    const poiService = getContext("PoiService");

    let categoryList;
    let poiFiltered = [];
    let errorMessage = "";
    let category = "";

    onMount(async () => {
        categoryList = await poiService.getCategories()
    })

    async function poiFilter(id) {
        category = await poiService.getOneCategory(id)
        if (category) {
          await push("/viewcategory");
        //return poi;
    } else {
           errorMessage = "Category not found - some error occurred";
        }
    }

</script>


<div>
    <h4 class="uk-heading-bullet"><a href="/#/pois">Show All</a></h4>
    <h4 class="uk-heading-bullet">Filter By Category</h4>
    <ul class="uk-list uk-list-disc">
        {#if categoryList}
            {#each categoryList as category}
        <li><a on:click={poiFilter(category._id)}>{category.name}</a></li>
            {/each}
        {/if}
    </ul>
    <h5 class="uk-heading-bullet"><a href="/#/categoryform" >Add a new Category</a></h5>

</div>