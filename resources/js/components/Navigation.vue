<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">Learn Vue</router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav text-white">
                    <router-link class="nav-link" aria-current="page" exact to="/">Home</router-link>
                    <router-link class="nav-link" to="/about">About</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    mounted() {
        console.log("Component mounted.");
    }
};
</script>
