<template>
<div>
    <loading :active='isLoading' :is-full-page="fullPage" :loader='loader' />
    <div id="nav">
        <div class="nav-content">
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/todo">Todo App</router-link>
                </li>
                <li>
                    <router-link to="/canvas">Canvas Ctrl</router-link>
                </li>
                <li>
                    <router-link to="/about">About</router-link>
                </li>
            </ul>
        </div>

    </div>
    <div class="view-port">
        <router-view />
    </div>
</div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

* {
    transition: .5s all;
}

.view-port {
    margin-top: 50px;
}

#nav {
    display: inline-block;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;

}

#nav .nav-content {
    width: 70%;
    margin: auto;
    clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);

}

#nav ul {
    padding: 0;
    margin: 0;
    background: orange;
}

@media only screen and (max-width:580px) {
    #nav .nav-content {
        width: 95%;
    }

}

#nav ul li {
    display: inline-block;
    margin-left: -3px;
}

#nav ul li a {
    display: block;
    padding: 7px 20px;
    padding-top: 15px;
}

#nav ul li a:hover {
    background: yellow;
}

#nav a {
    color: black;
    text-decoration: none;
}

#nav a.router-link-exact-active {
    color: white;
    background: orangered;
}
</style>
