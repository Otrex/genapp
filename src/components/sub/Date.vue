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
    data: () => ({
        newevent: null
    })
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

.date-stack-day:hover {
    transform: translateY(-4px);
    box-shadow: 0px 3px 3px grey;
}

.date-stack-day:hover,
.date-stack-day:hover input {
    background: lightsalmon;
    color: white;
}

.date-stack-day:hover .day-number {
    color: black;
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
