<template>
    <div id="app">
        <h1>APP</h1>
        <router-link to="/">Home</router-link>
        | <router-link to="/cards/1">Cards</router-link>
        | <router-link to="/cardRandom">Random</router-link>
        | <router-link to="/cardadd">Add card</router-link>
        <hr />
        <router-view />
    </div>
</template>


<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .errorMsg {
        color: red;
    }
</style>
