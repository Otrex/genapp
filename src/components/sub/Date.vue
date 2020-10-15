<template>
<div class="date-stack-day">
    <div class="weekday"> {{date[0]}} </div>
    <div class="day-number"> {{date[1]}} </div>
    <div class="event-bar"><input type="text" v-model="newevent" /> </div>
</div>
</template>

<script>
export default {
    name: "Date",
    props: {
        date: Array
    },
}
</script>

<style>
.date-stack-day {
    display: inline-block;
    width: 100px;
    height: 100px;
    background: white;
    margin: 2px;
}

.day-number {
    font-size: 2rem;
    font-weight: bolder;
    color: blue;
}

.event-bar>input {
    width: 90%;
    border: none;
}
</style>
