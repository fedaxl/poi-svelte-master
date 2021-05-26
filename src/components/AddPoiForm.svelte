<script lang="ts">
    import { onMount, getContext } from "svelte";
    import {push} from "svelte-spa-router";
    const poiService = getContext("PoiService");

    let categoryList = [];
    let name = "";
    let description = "";
    let category = "";
    let latitude = 0;
    let longitude = 0;
    let selectedCategory = 0;
    let errorMessage = "";

    onMount(async () => {
        categoryList = await poiService.getCategories()
    });

    async function addPoi() {
        const success = await poiService.addPoi(name, description, category, latitude, longitude, categoryList[selectedCategory])
        if (success) {
            await push("/home");

        } else {
            errorMessage = "Addition of POI not completed - some error occurred";
        }
    }
</script>
<form on:submit|preventDefault={addPoi} class="uk-form-stacked uk-text-left">
    <div class="uk-grid uk-grid-stack">
        <div class="uk-width-1-2@m">
            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Enter name</label>
                <div class="uk-form-controls">
                    <input bind:value={name} class="uk-input" id="form-stacked-text" type="text" name="name" placeholder="Name">
                </div>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Enter a Description</label>
                <div class="uk-form-controls">
                <input bind:value={description} class="uk-input" id="rm-stacked-text" type="text" name="description" placeholder="Description">
            </div>
             </div>
            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Enter a Description</label>
                <div class="uk-form-controls">
                    <input bind:value={category} class="uk-input" id="rm-stacked-text" type="text" name="category" placeholder="Category">
                </div>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Enter Latitude</label>
                <div class="uk-form-controls">
                    <input bind:value={latitude} class="uk-input" id="m-stacked-text" type="number" step="any" name="latitude" placeholder="Latitude">
                </div>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Enter Longitude</label>
                <div class="uk-form-controls">
                    <input bind:value={longitude} class="uk-input" id="-stacked-text" type="number" step="any" name="longitude" placeholder="Longitude">
                </div>
            </div>
        <div class=" uk-width-1-2@m">
            <div class="uk-margin uk-text-left">
                <div class="uk-form-label">Select Category </div>
                <div class="uk-form-controls ">
                    {#each categoryList as category, i}
                        <label>
                            <input bind:group={selectedCategory} value={i} class="uk-radio" type="radio" name="category" />
                            {category.name}
                        </label>
                        <br>
                    {/each}
                </div>
            </div>
            <div class="uk-margin">
                <button class="submit uk-button uk-button-primary uk-button-large uk-width-1-1">Add</button>
            </div>
            {#if errorMessage}
                <div class="uk-text-left uk-text-small">
                    {errorMessage}
                </div>
            {/if}
        </div>
    </div>
    </div>
</form>