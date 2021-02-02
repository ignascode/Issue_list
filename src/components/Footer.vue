<template>
    <footer class="middle">
        <h2>Made in ✌🏻 by <span @click="openExternalLink">Ignas Tulaba</span></h2>
    </footer>
</template>

<script>
export default {
    name:'Footer',
    methods:{
        openExternalLink(){
            window.open('','_blank')
        }
    }
}
</script>

<style scoped>

footer {
    width: 100%;
    height: 45px;
    background-color:#343a40;
    color: white;
    font-family: 'Mulish' , sans-serif;
    font-size: 12pt;
    
}

h2 {
    font-size: 1rem;
}

h2 span {
    padding-inline: 3px;
    cursor: pointer;
    
}


</style>