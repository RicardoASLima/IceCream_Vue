<template>
  <div id="app">
    <div class="container">
            <div id="area">
            <div class="cabecalho">
            <header>
              <center>
                <img  alt="Ice Cream" src="./assets/logo.png">
                </center>   
            </header>
            </div>
            <div>
                <router-view :teste="teste"></router-view>
           </div>
        <br> 
    </div>
    </div>
  </div>
</template>
<script>
const axios = require ('axios');
export default {
    name: 'App',
    data(){
      return {
        teste:{produtos:[],pedidos:[],comanda:[]}
      }
    },
    mounted(){
      this.getApi();
    },
    methods:{
      async getApi(){
        const resposta = await axios.get("http://192.168.15.6:8000/api/comanda");
        if (resposta.status == 200){
          this.teste.comanda = resposta.data;
        }else {
          console.error("Erro na API!");
        }
        const res = await axios.get("http://192.168.15.6:8000/api/listapedidos");
        if (res.status == 200){
          this.teste.pedidos = res.data;
        }else {
          console.error("Erro na API!");
        }
        
      }
    },
  }
</script>

<style>
.cabecalho img {
    max-width:200px;
    max-height:150px;

}
.botao {
    text-align: center;
}
h1{
    text-align: center;
}
</style>