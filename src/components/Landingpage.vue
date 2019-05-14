<template>
    <div class="landingpage">
        <div class="mx-auto" style="color: #f1c761;"><h2><b>Fórum Ciência Viva</b></h2></div>
        <h6 style="color: darkgrey; margin-left: 10%"><strong>A ciência em diálogo aberto.</strong></h6>
        <b-img fluid center blank-color="#bbb" class="image-home" :src="require('../../media/kkkk1.jpg')"/>
        <!---<b-carousel id="carousel1"
                img-width="1024"
                img-height="900">
                <b-carousel-slide 
                :img-src="require('../../media/afiche-ciencia-f1.png')"><h3> 
                style="color: #000;">Fórum Ciência Viva</h3></b-carousel-slide>
        </b-carousel>-->
    
 <div class="mx-auto-button"><b-button class="al" variant="outline-info" v-bind:to="'/login'">Log In/Registar</b-button></div>
            


    </div>
</template>

<script>
    export default {
        name: 'Landingpage',
        data () {
            return{

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mx-auto{
    text-align: center;
    margin-top: 20%;
}
.mx-auto-button{
    text-align: center;
    margin-top: 15%;
}
.image-home{
    margin-top: 10%;
    
    
}


</style>