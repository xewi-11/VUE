<template>
    <div class="Card ">
        <h1 style="color: blue"> Hijo Comic: {{ comic.titulo }} </h1>
        <button v-on:click="seleccionarFavorito()">Seleccionar favorito</button>
        <br><br><img  :src="comic.imagen" :alt="comic.titulo" width="200"/>
        <p> {{ comic.descripcion }}  </p>
        <p :class="{
            rojo:comic.year<=2000,
            verde:comic.year>2000
        }" >Año: {{ comic.year }} </p>

        

        <button v-on:click="eliminarComic()">Eliminar comic</button>
    </div>
</template>

<script>
export default {
    name: "ComicComponent",
    props:["comic","index"],
    methods:{
        seleccionarFavorito(){
            this.$emit("comicFavoritoParent",this.comic);
        },
        eliminarComic(){
            this.$emit("eliminarComicParent",this.index);
        }
    }
}


</script>

<style>
 @import url('./../assets/css/comics.css');
</style>