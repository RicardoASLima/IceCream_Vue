<template>
  <div class="home">
    <div id="area">
      <div class="grid">
        <div class="row">
          <div class="col-sm-12 text-center">
          </div>
        </div>
      </div>
      <form>
        <div class="form-group">
          <h3 style="text-align: center">Mesa 01</h3>
        </div>
        <br>
        <div class="form-group text-center">
          <button type="submit" class="btn btn-success" id="entrar" name="entrar" @click="nextPage">
            <b>Entrar </b>
          </button>
        </div>
        <div class="row">
          <div class="col-lg-12 text-center">
            <small>
              Todos os direitos reservados para IceCream LTDA
            </small>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped >

  .home {
    background-color: white;
  }
  #area {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
  /*#entrar {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }*/
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>

<script>

export default {
  el: "#entrar",
  methods: {
    nextPage: function(){

      this.$router.replace("/produtos");

    }
  }
}

</script>
