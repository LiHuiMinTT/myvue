<template>
  <div>
      <h1>VUE ROUTER DEMO</h1>
      <section>
            <aside>
              <router-link to='/about' active-class="actived"><button>About</button></router-link>
              <!-- <a href="#" ><button>Home</button></a> -->
              <router-link to='/home'><button>Home</button></router-link>
            </aside>
            <main>
                <router-view></router-view>
            </main>
      </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    section{
        height: 500px;
        width: 500px;
        display: grid;
        grid-template-columns: 1fr 3fr;
        background: gray content-box;
        padding: 30px 0px 0px 0px;
    }
    aside{
        display: grid;
        background: red;
        justify-content: center;
        align-content: flex-start;
    }
    main{
        background: pink;
    }
    button:hover{
        background: blue;
        color: white;
        border: solid black 2px;
        border-radius: 20px;
    }
    .actived{
        background: yellow;
    }
</style>