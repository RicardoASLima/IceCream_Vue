<template>
<div class='list'>
    <div class="top">
       <h1>{{titulo}}</h1>
       <div class="center">            
          <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" id="btn-check-outlined" autocomplete="off" checked>
            <label class="btn btn-outline-primary" for="btn-check-outlined" v-for ="pedidos in teste.pedidos" :Key="pedidos.is">{{pedidos.adicional}}</label>
          </div>

        <br> <br>
      
    </div>
    <div class="form-group text-center">
                    <button type="button" class="btn btn-primary lg" @click= [PreviousPage()]>Voltar</button>
             <!--<button href="javascript:history.back()"> VOLTAR <button />-->

             <button type="button" class="btn btn-successbtn-lg" @click= [nextPage()]>Proximo</button> 
        </div> 
    </div>
</div>    
</template>

<script>
export default {
  data: function(){
        return {
          titulo: "Adicionais",
        }
    },
    props: {
        teste:Array,
    },
    methods: {
        nextPage: function(){

            this.$router.replace("/confirma"); 

        },
        PreviousPage : function (){

            this.$router.replace("/sabores");

        }
   
  }
}

</script>

<style>

.list {
  width: 100%;
  padding: 20px;
  border: 1px solid #cccccc;
  border-radius: 3px;
  background-color: white;
}
.mesa {
  font-size: 15px;
} 
.center{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row; 
    /* background: #ffffff; */
    /* margin: 140px;  */
}    

.btn-group{
    margin: 10px;
}



</style>
