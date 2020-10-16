<template>
<div>
    <div>
        <h1 style="color:red; background:white;" v-if="date.month > 12"> Please Select A Proper Month or Year </h1>
        <Date v-for="(day, i) in getdatestream" :date="{day, month : getMonth(), year : getYear() }" :key="i" />
    </div>

</div>
</template>

<script>
import Date from "./sub/Date.vue";
import dater from "../directives/calender"

export default {
    name: "Calender",
    data: () => ({
        dates: []
    }),
    computed: {
        getdatestream: function () {
            if (Number(this.date.month) > 12) {
                //alert(" You've Entered a Wrong Month ");
                //this.dates.splice(0, this.dates.length)
                return []
            }
            // if (this.date.year.length < 4) {
            //     return []
            // }
            console.log(this.date.year)

            dater.options.month = this.date.month
            dater.options.year = this.date.year
            return dater.get()
        }
    },
    components: {
        Date
    },
    props: {
        date: Object,
    },
    methods: {
        emptyDates: function () {
            this.dates = []
        },
        getMonth: function () {
            return dater.options.month;
        },
        getYear: function () {
            return dater.options.year;
        }
    },
}
</script>

<style>

</style>
