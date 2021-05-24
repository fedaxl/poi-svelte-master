<script lang="ts">
    import { onMount, getContext } from "svelte";
    import {push} from "svelte-spa-router";
    const poiService = getContext("PoiService");

    let name = "";
    let description = "";
    let errorMessage = "";

    onMount(async () => {
        //categoryList = await poiService.getCategories()
        console.log("in add category form");
    });

    async function addCategory() {
        const success = await poiService.addCategory(name, description)
        console.log(success);
        if (success) {
            await push("/pois");
        } else {
            errorMessage = "Addition of Category not completed - some error occurred";
        }
    }
</script>
<form on:submit|preventDefault={addCategory} class="uk-form-stacked uk-text-left">
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
                    <input bind:value={description} class="uk-input" id="rm-stacked-text" type="text" name="description" placeholder="Short Description">
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
  </form>