<template>
    <div>
        <!-- <h-nav region="가대생은"></h-nav> -->
        <h-nav></h-nav>
        <b-container>
            
        </b-container>

        </div>
</template>
<style scoped>

</style>
<script lang="ts">
import Vue from 'vue';
import NavBar from '../components/NavBar.vue';
export default Vue.extend({
    components: {
        'h-nav': NavBar
    }
})
</script>