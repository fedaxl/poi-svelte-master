<script>
    import {getContext, onMount} from 'svelte'
    import {push} from "svelte-spa-router";
    import {category} from "../stores";

    const poiService = getContext("PoiService");
    let userList = [];
    let id = "";
    let errorMessage = "";
    let user = "";


    onMount(async () => {
        userList = await poiService.getUsers();
         });


    async function deleteHandler(id) {
        const success
            = await poiService.deleteUser(id)
        if (success) {
            userList = await poiService.getUsers();   //refreshes the poi list showing only those still remaining

        } else {
            errorMessage = "Deletion of POI not completed - some error occurred";
        }
    }

</script>

<div class="uk-margin uk-width-3xlarge uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
    <table class="uk-table uk-table-hover uk-table-divider">
        <caption>
            Our Users:
        </caption>
        <thead>
        <th>
            First name
        </th>
        <th>
            Last name
        </th>
        <th>
            email
        </th>
        <th></th>
        </thead>
        <tbody class="uk-text-left">
        {#each userList as user}
            <tr>
                <td>
                    {user.firstName}
                </td>
                <td>
                    {user.lastName}
                </td>
                <td>
                    {user.email}
                </td>
                <td>
                    <button on:click={deleteHandler(user._id)} class="fas fa-trash-alt" style="color:red" title="delete"></button>
                </td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>