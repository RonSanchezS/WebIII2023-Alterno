<script>
import Home from "./Pages/Home.svelte";
import { Router, Link, Route } from "svelte-navigator";
import Posts from "./Pages/Posts.svelte";
import About from "./Pages/About.svelte";

</script>

<main>
  <Router>
    <nav>
      <Link to ="/" >Home</Link>
      <Link to ="/about" >About</Link>
      <Link to ="/posts" >Posts</Link>
    </nav>
      <div>
        <Route path="/">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/posts">
          <Posts></Posts>
        </Route>
      </div>
  </Router>
</main>