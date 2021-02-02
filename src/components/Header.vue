<template>
    <div>
     <b-navbar toggleable="lg" type="dark" variant="dark">
              <b-navbar-brand href="/">Ignas Tulaba</b-navbar-brand>
              <b-navbar-nav class="mx-auto">
                  <b-nav-item >
                      <router-link to="/">
                            Home
                        </router-link>
                    </b-nav-item>
                    <b-nav-item>
                      <router-link to="/issues/open">
                            Open Issues
                        </router-link>
                    </b-nav-item>
                    <b-nav-item>
                      <router-link to="/issues/done">
                            Done Issues
                        </router-link>
                    </b-nav-item>
                    <b-nav-item>
                      <router-link to="/issues/trashed">
                            Trashed Issues
                        </router-link>
                    </b-nav-item>
              </b-navbar-nav>

        </b-navbar>
        </div>
</template>

<script>
export default {
    name:'Header'
}
</script>

<style scoped>


ul li a {
    color: white;
    text-decoration:none;
}
ul li a:hover {
    color: rgba(204, 204, 204, 0.671);
   
}

</style>