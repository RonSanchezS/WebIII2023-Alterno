<script lang="ts">
    import { Router, Link, Route } from "svelte-navigator";
    import type {Post} from "../Models/Post";
    import axios from "axios";
  import { onMount } from "svelte";

    let post : Post[] = [];

    async function getData() {
        try {
            const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
            post = response.data;
        } catch (error) {
            console.log(error);
        }
        
    }

    onMount(() => {
        getData();
    });
</script>
<main>
    <h1>Posts works!</h1>
    {#if post.length > 0}
        {#each post as post}
            <div>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        {/each}
    {/if}
</main>
