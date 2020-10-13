<template>
<div class="home">
    <div class="home-content">
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <nav>
            <ul>
                <li><a href="/pageBuilder"> Page Builder </a>|</li>
                <li><a href="/calender"> Event Calender</a></li>
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
</style>
