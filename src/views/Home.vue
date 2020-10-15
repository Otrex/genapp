<template>
<div class="home">
    <div class="home-content">
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <nav>
            <ul>
                <li>
                    <router-link to="/page-builder"> Page Builder </router-link>|
                </li>
                <li>
                    <router-link to="/event-calendar"> Event Calender </router-link>
                </li>
            </ul>
        </nav>
    </div>

</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
        HelloWorld
    }
}
</script>

<style>
.home-content {
    margin-top: 20%;
}

ul {
    padding: 0px;
    margin: 0px;
}
</style>
