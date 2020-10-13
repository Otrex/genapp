<template>
<div>
    <h1> This is the canvas Controller </h1>
    <div class="show-btn-container"><button class="show-btn" @click="show"> {{label}} Controls </button></div>
    <div class="controls">
        <input v-model="ctrl.obj.count" placeholder="Enter No Of Objects .... " type="text" /><br>
        <input v-model="ctrl.obj.colors" placeholder="Enter Object Colors. Use a ';' to seperate each .... " @blur="convert" type="text" /><br>
        <input v-model="ctrl.bg" placeholder="Enter Background Color ..... " type="text" /><br>
        <select v-model="ctrl.motion_type">
            <option value="move"> Linear Motion </option>
            <option value="circulate"> Circular Motion </option>
            <option value="blizzard"> Hazzard Motion </option>
        </select><br>
        <input type="button" @click="preview" value=" Preview " />
    </div>
</div>
</template>

<script>
export default {
    name: "CanvasCtrl",
    created() {
        this.ctrl.obj.colors = this.sb.options.obj.color.join("; ");
        console.log(this.ctrl.obj.colors)
    },
    data: () => ({
        label: "Show",
        list_of_obj_colors: ["white"],
        show: false,
        sb: window.sb,
        ctrl: {
            bg: "black",
            motion_type: "move",
            obj: {
                colors: null,
                count: 10
            }
        }
    }),
    computed: {

    },
    methods: {
        preview: function () {
            this.sb.options.obj.count = this.ctrl.obj.count;

            this.convert();
            this.sb.options.obj.color = this.list_of_obj_colors
            this.sb.options.bg = this.ctrl.bg
            this.sb.options.moveType = this.ctrl.motion_type
            this.sb.start()
        },
        convert: function () {
            var x = this.ctrl.obj.colors.split(";")
            x.forEach((e) => {
                if (e !== "") {
                    if (!(e in this.sb.options.obj.color)) {
                        this.list_of_obj_colors.push(e.trim())
                    }
                }
            })
        }
    }
}
</script>

<style>
.controls input,
.controls select,
.show-btn-container button {
    display: inline-block;
    width: inherit;
    border: 0px;
    padding: 0px 30px;
    height: 50px;
}

.controls {
    max-height: 0vh;
    overflow: hidden;
    display: inline-block;
}

.show-btn-container:hover~.controls,
.controls:hover {
    max-height: 100vh;
}

.controls input:hover {
    background: pink;
}

.controls input:focus {
    border: 0px;
}
</style>
