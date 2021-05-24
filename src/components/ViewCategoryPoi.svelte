<script>
    import {getContext, onMount} from 'svelte'
    import {push} from "svelte-spa-router";
    import {category} from "../stores";

    const poiService = getContext("PoiService");
    let poiList = [];
    let id = "";
    let errorMessage = "";
    let poi = "";


    onMount(async () => {
        poiList = await poiService.getCategoryPois($category.id);
        console.log("in poi list by Category");
        console.log(poiList);
    });

   // $: poiList = poiService.getCategoryPois($category.id);

    async function deleteHandler(id) {
        const success = await poiService.deletePoi(id)
        if (success) {
            poiList = await poiService.getPois();   //refreshes the poi list showing only those still remaining

        } else {
            errorMessage = "Deletion of POI not completed - some error occurred";
        }
    }

    async function showPoi(id) {
        poi = await poiService.getOnePoi(id)
        if (poi) {

            await push("/viewpoi");
            //return poi;

        } else {
            errorMessage = "POI not completed - some error occurred";
        }
    }

</script>

<div class="uk-margin uk-width-3xlarge uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
    <table class="uk-table uk-table-hover uk-table-divider">
        <caption>
            Here's what we have so far:
        </caption>
        <thead>
        <th>
            Name
        </th>
        <th>
            Intro
        </th>
        <th>
            Category
        </th>
        <th>
            Added By
        </th>
        </thead>
        <tbody class="uk-text-left">
        {#each poiList as poi}
            <tr>
                <td><a on:click={showPoi(poi._id)}>
                    {poi.name}
                </a></td>
                <td><a on:click={showPoi(poi._id)}>
                    {poi.descshort}
                </a></td>
                <td>
                    {poi.category.name}
                </td>
                <td>
                    {poi.contributor.firstName}, {poi.contributor.lastName}
                </td>
                <td>
                    <button on:click={deleteHandler(poi._id)} class="fas fa-trash-alt" style="color:red" title="delete"></button>
                </td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>