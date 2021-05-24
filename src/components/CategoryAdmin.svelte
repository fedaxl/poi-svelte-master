<script>
    import {getContext, onMount} from 'svelte'
    import {push} from "svelte-spa-router";
    //import {category} from "../stores";

    const poiService = getContext("PoiService");
    let categoryList = [];
    let id = "";
    let errorMessage = "";
    let category = "";


    onMount(async () => {
        categoryList = await poiService.getCategories();
    });


    async function deleteHandler(id) {
        const success
            = await poiService.deleteCategory(id)
        if (success) {
            categoryList = await poiService.getCategories();

        } else {
            errorMessage = "Deletion of POI not completed - some error occurred";
        }
    }

</script>

<div class="uk-margin uk-width-3xlarge uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
    <table class="uk-table uk-table-hover uk-table-divider">
        <caption>
            Our Categories:
        </caption>
        <thead>
        <th>
            Name
        </th>
        <th>
            Description
        </th>
        <th></th>
        </thead>
        <tbody class="uk-text-left">
        {#each categoryList as category}
            <tr>
                <td>
                    {category.name}
                </td>
                <td>
                    {category.description}
                </td>
                <td>
                    <button on:click={deleteHandler(category._id)} class="fas fa-trash-alt" style="color:red" title="delete"></button>
                </td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>