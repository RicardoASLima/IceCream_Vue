<template>
<div class='list'>
    <div class="top">
       <h1>{{titulo}}</h1>
       <hr>
    </div>
    <div class="content">
  <table class="table">
  <thead class="thead-light">
    <tr>
     <th scope="col">ID</th>
      <th scope="col">Produto</th>
      <th scope="col">Sabores</th>
      <th scope="col">Adicional</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for ="pedidos in teste.pedidos" :Key="pedidos.is" >
      <th scope="row">{{pedidos.id}}</th>
      <td>{{pedidos.produto}}</td>
      <td>{{pedidos.sabor}}</td>
      <td>{{pedidos.adicional}}</td>
    </tr>
  </tbody>
</table>

<br> <br>
      <div class="form-group text-center">
        <button style="margin: 0 15px;" type="submit" class="btn btn-success btn-lg" @click="[enviar(), nextPage()]"> Confirmar </button>
        
        <button style="margin: 0 15px;" type="submit" class="btn btn-info btn-lg" @click.prevent.stop> Editar </button>
</div> 
     </div>
    </div>
</template>
      
<script>
export default {
    data: function(){
        return {
          titulo: "Confirme o pedido !",
        }
    },
     props: {
        teste:Array,
    },
    methods:{
                enviar(){
                    alert("Pedido confirmado com sucesso !! Aguarde...");
                },
                nextPage: function(){

                this.$router.replace("/lista");
                
                }
            }
    
}
</script>

<style long='scss' scoped>

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

</style>

