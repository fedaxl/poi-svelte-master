<script>
    import {title, subTitle, navBar, welcomeBar} from "../stores"
    import LoginForm from "../components/LoginForm.svelte"
    import lighthouse from "/src/assets/lighthouse.png";
    title.set("POI - Lighthouses of Ireland");
    subTitle.set("Add a POI");

    navBar.set({
        bar: welcomeBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-2-3@m">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <h3 class="uk-card-title uk-text-center">Welcome back!</h3>
            <LoginForm />
        </div>
    </div>
    <div class="uk-width-1-3@m ">
        <img width="300" src="{lighthouse}" alt="POI">
    </div>
</div>