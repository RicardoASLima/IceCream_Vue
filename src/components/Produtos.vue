<template>
<div class='list'>
    <div class="top">
       <h1>{{titulo}}</h1>
       <div class="center">            
            <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
                <label class="btn btn-outline-primary" for="btncheck1" v-for ="pedidos in teste.pedidos" :Key="pedidos.is">{{pedidos.produto}}</label>
            </div>   
        </div>
         <div class="form-group text-center">
                <button type="button" class="btn btn-primary" @click="prevPage">Voltar</button>
                <button type="button" class="btn btn-successbtn-lg" @click="nextPage">Proximo</button>
            </div> 
    </div>
    </div>
</template>

<script>


export default {
  name: 'App',
    data: function(){
        return {
          titulo: "Produtos",
        }
    },
    props: {
        teste:Array,
    },
  methods:{
    nextPage: function(){

        this.$router.replace("/sabores");

    },
    prevPage: function(){

        this.$router.replace("/home");

    }
  },
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
   
}    


</style>