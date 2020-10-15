
var Calendar = {
    options : {
        day : 1,
        month : 10, //October
        year : 2020,
    },
    months : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],

    weekDays : [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],

    get : function () {
        dates = []

        var std = this.getStartDay(this.options.year, this.options.month-1);
        for (i = 1; i <= this.numDays( this.options.month-1); i++) {
            dates.push([this.weekDays[std], i])
            std++
            if (std % 7 == 0){std=0}
        }

        return dates
    },

    isLeap : function (yyyy) {
        return yyyy % 100 === 0 ? yyyy % 400 === 0 : yyyy % 4 === 0;
    },
    
    numDays : function(mm)
    {
        return mm == 3 || mm == 5 || mm == 8  || mm == 10 ? 30 : mm == 1 ?( isLeap(2020) ? 29 : 28 ): 31;
    },

    getStartDay  : function (yyyy, mm) {
        return new Date(""+(mm+1)+"-"+1+"-"+ yyyy).getDay()
    }
}

window.Calendar = Calendar;
