<template>
    <div class='list'>
        <div class="top">
            <h1>{{titulo}}</h1>
            <div class="center">            
                    <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                        <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
                        <label class="btn btn-outline-primary" for="btn-check-outlined" v-for ="pedidos in teste.pedidos" :Key="pedidos.is">
                            {{pedidos.sabor}}
                        </label>
                    </div>
                <br> <br>
                
            </div>
            <div class="form-group text-center">
                        <button type="button" class="btn btn-primary lg" @click="PreviousPage">Voltar</button>
                        <!--<button href="javascript:history.back()"> VOLTAR <button />-->

                        <button type="button" class="btn btn-successbtn-lg" @click="nextPage">Proximo</button>
                </div> 
        </div>
    </div>
</template>
 
<script>

export default {
  el: "#entrar",
    data: function(){
        return {
          titulo: "Sabores",
        }
    },
    props: {
        teste:Array,
    },
  methods: {
    nextPage: function(){

        this.$router.replace("/adicionais");
    
    },
    PreviousPage : function (){

        this.$router.replace("/produtos");

    }
  }
}
</script>

<style>
/* body {
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;  
    background: linear-gradient(to bottom,#ffb347,#ffcbdb) !important;
} */
.button{
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
    
}
.btn{
    margin-right: 1vh;
}

.center{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row; 
    /* background: #ffffff; */
    /* margin: 140px;  */
}    
.Sobores {
    Width: 100%;
    max-width: 800px; /* PRA IR MUDANDO O TAMANHO DA LARGURA */
    margin: 10px auto;
    min-height: 560px;     
    background: #ffffff;
    display: flex;
    flex-direction: column;  
    border-radius: 10px ;  
    /* align-items: center;       */ /* aqui vc que vê*/
}
.btn-group{
    margin: 10px;
}


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
