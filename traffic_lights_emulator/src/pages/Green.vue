<template>
    <div>
        <div class="green_switched_on"></div>
        <div class="yellow_switched_off"></div>
        <div class="red_switched_off"></div>
    </div>
</template>

<script>

</script>

<style>

    .green_switched_on{
        width: 100px;
        height: 100px;
        border-radius: 100%;
        border: 2px solid rgb(0, 215, 0);
        background-color: rgb(0, 215, 0);
        margin: 0 auto;
    }

    .yellow_switched_off{
        width: 100px;
        height: 100px;
        border-radius: 100%;
        border: 2px solid rgba(255, 255, 0, 0);
        background-color: rgba(255, 255, 0, 0.5);
        margin: 0 auto;   
    }

    .red_switched_off{
        width: 100px;
        height: 100px;
        border-radius: 100%;
        border: 2px solid rgba(255, 0, 0, 0);
        background-color: rgba(255, 0, 0, 0.5);
        margin: 0 auto;
    }
</style>