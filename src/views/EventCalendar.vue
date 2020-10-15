<template>
<div>
    <h1> This is the Calendar </h1>
    <div class="date-input">
        <input type="text" v-model="date.month" placeholder="Enter Month ..." />
        <input type="text" v-model="date.year" placeholder="Enter Year ..." />
        <input type="button" @click="show = !show" :value="details" />
    </div>
    <div class="calender-container">
        {{date.month}} | {{date.year}}
        <transition name="fade">
            <h2 class="date-display" v-show="!(date.month > 12)"> {{months[date.month-1] ?? months[defaults.month]}} {{date.year ?? defaults.year}}</h2>
        </transition>
        <transition name="fade">
            <Calendar :date="date" v-if="show" />
        </transition>

    </div>
</div>
</template>

<script>
import Calendar from "../components/Calendar.vue"
import dater from "../directives/calender"

export default {
    name: "EventCalendar",
    components: {
        Calendar,
    },
    computed: {
        details: function () {
            if (this.show) {
                return " Hide Calendar "
            }
            return " Show Calendar "
        }
    },
    data: () => ({
        date: {
            month: null,
            year: null
        },
        defaults: {
            month: dater.options.month,
            year: dater.options.year
        },
        months: dater.months,
        show: false,
    }),

}
</script>

<style>
.date-display {
    background: white;
    color: blue;
}

.fade-enter-active,
.fade-leave-active {
    opacity: 0;
    /* transition: opacity 1s; */
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
