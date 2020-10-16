<template>
<div>
    <transition name="fade">
        <div class="modal-box-container">
            <div class="modal-box">
                <span class="close" @click="$emit('close')"> X </span>
                <div class="modal-box-head">
                    <h1>
                        <slot name="head"></slot>
                    </h1>
                </div>
                <div class="modal-box-body">
                    <slot name="body"></slot>
                </div>
                <div class="modal-box-foot">
                    <slot name="foot"></slot>
                </div>
            </div>
        </div>
    </transition>
</div>
</template>

<script>
export default {
    name: "Modal",
}
</script>

<style>
.modal-box {
    /*background: white;
    width: 80%;
    min-height: 300px;
    transform: translateY(100%);*/
    position: relative;
    background: white;
    width: 70%;
    min-height: 50%;
    transform: translateY(50%);
    margin: auto;
    z-index: 100;
}

.modal-box-container {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
}
</style>
