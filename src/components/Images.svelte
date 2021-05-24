<script>
    import {getContext, onMount} from 'svelte'
    import {push} from "svelte-spa-router";
    import {category} from "../stores";

    const poiService = getContext("PoiService");
    let images = [];
    let errorMessage = "";

    onMount(async () => {
        images = await poiService.getImages();
        console.log("in images");
        console.log(images);
           });


</script>


<div class="uk-container uk-padding-small">
    <div class="uk-child-width-1-2@s uk-flex uk-flex-center" uk-grid uk-height-match="target: .uk-card">
        <div uk-slideshow="autoplay: true autoplay-interval: 1500">
            <ul class="uk-slideshow-items">
                {#each images as image}
            <li>
                <div>
                    <div className="uk-card uk-card-small uk-card-default uk-animation-scale-up">
                        <div className="uk-card-media-top">
                                <img src="{image}">
                        </div>
                    </div>
                </div>
            </li>
            {/each}
            </ul>
        </div>
    </div>
</div>

