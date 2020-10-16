<template>
<div>
    <h1> This is the Calendar </h1>
    <div class="date-input">
        <input type="text" class="date-inputs-form" v-model="date.month" placeholder=" Month " />
        <input type="text" class="date-inputs-form" v-model="date.year" placeholder=" Year " />
        <input type="button" class="date-inputs-form" @click="show = !show" :value="details" />
    </div>
    <div class="calender-container">
        {{date.month}} <span v-show="date.month && date.year ">|</span> {{date.year}}
        <transition name="fade">
            <h2 class="date-display" v-show="!(date.month > 12)"> {{months[date.month-1] ?? months[defaults.month-1]}} {{date.year ?? defaults.year}}</h2>
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
    display: inline-block;
    padding: 10px 20px;
}

.date-inputs-form {
    background: white;
    height: 50px;
    width: 100px;
    text-align: center;
    font-size: 1rem;
    border: none;
    border-left: 1px solid whitesmoke;
}

input[type="button"].date-inputs-form {
    background: lightsalmon;
    height: 52px;
    width: auto;
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
