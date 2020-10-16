<template>
<div class="date-stack-day" @click="show = !show">
    <div class="weekday"> {{date.day[0]}} </div>
    <div class="day-number"> {{date.day[1]}} </div>
    <div class="event-bar"><input type="text" v-model="newevent" /> </div>
</div>

<transition name="fade">
    <div class="modal" v-show="show">

        <div class="modal-content">
            <span class="close" @click="show = !show"> X </span>
            <h2>{{date.day[0]}}, {{date.day[1]}} | {{months[date.month - 1]}} | {{date.year}}</h2>
            <div><input type="text" v-model="event.name" /></div>
            <div><input type="text" v-model="remdays" /></div>
            <div><input type="text" v-model="event.description" /></div>
        </div>
        <div class="exit-1" @click="show = !show"></div>
    </div>
</transition>
</template>

<script>
import dater from "../../directives/calender"

export default {
    name: "Date",
    props: {
        date: Object,

    },
    computed: {
        remdays: function () {
            var date = dater.getCurrentDate()
            date
            return date
        }
    },
    data: () => ({
        newevent: null,
        event: {},
        show: false,
        months: dater.months
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

.exit-1 {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -3;
}

.modal {

    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
}

.modal>div.modal-content {
    position: relative;
    background: white;
    width: 70%;
    height: 50%;
    transform: translateY(50%);
    margin: auto;
    z-index: 100;
}

div.modal-content span.close {
    position: absolute;
    display: inline-block;
    background: red;
    color: white;
    top: 0px;
    right: 0px;
    padding: 10px 20px;

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
