<template>
<div>
    <h1> Page Builder - Coming Soon </h1>
    <input type="button" @click="addSection" value="Add Section" />
    <input type="button" @click="create" value="CreateHtml" />
    <Modal v-if="show" @close="show = !show">

    </Modal>
    <div class="view-port-html">
        <div v-html="html ?? 'Notih'"></div>
        <div>{{html}}</div>
    </div>
</div>
</template>

<script>
import Modal from "../components/sub/Modal"
import {
    //  Input,
    Section,
    TextNode
} from "../directives/pagebuilder"

export default {
    name: "PageBuilder",
    data: () => ({
        html: null,
        show: true
    }),
    components: {
        Modal
    },
    methods: {
        addSection: function () {
            this.html += new Section("men", {
                style: "color:white;"
            }, [new TextNode(prompt("Enter Content"))]).liquify()
        },
        create: function () {
            this.html = new Section("o1", {
                style: "border:1px solid green;background:red;",
                class: "finx"
            }, [new TextNode("<b>Happy Home</b>")]).liquify()
        }
    }
}
</script>

<style>
.view-port-html {
    background: grey;
    width: 80%;
    margin: auto;
}
</style>
