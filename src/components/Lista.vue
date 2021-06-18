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
       <th scope="col">Valor Adicional</th>
        <th scope="col">Valor Total</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for ="comanda in teste.comanda" :Key="comanda.is" >
      <th scope="row">{{comanda.id}}</th>
      <td>{{comanda.produto}}</td>
      <td>{{comanda.sabor}}</td>
      <td>{{comanda.adicional}}</td>
      <td>{{comanda.valor_adicional}}</td>
      <td>{{comanda.valor_total}}</td>
    </tr>
  </tbody>
</table>
<br> <br>
      <div class="botao">
      <form> 
      <button style="margin: 0 15px;" type="submit" class="btn btn-danger btn-lg" @click="nextPage"> Sair </button>
      </form>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
    name: 'listacomponent',
    el: "#entrar",
    data:function(){
      return {
           titulo: "Comanda!",
    }
    },
    props: {
        teste:Array,
    },
     methods: {
    nextPage: function(){

        this.$router.replace("/home");
    
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