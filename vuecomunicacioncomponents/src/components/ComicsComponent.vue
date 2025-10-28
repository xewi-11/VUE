<template>
    <div>
        <div>
            <form class="form-control" v-on:submit.prevent="añadirComic()">
                <label >Titulo</label>
                <input  class="form-control" type="text" v-model="comicform.titulo"/>
                <label >Imagen</label>
                <input  class="form-control" type="text" v-model="comicform.imagen"/>
                <label >Descripcion</label>
                <input class="form-control" type="text" v-model="comicform.descripcion"/>
                <label >Año</label>
                <input  class="form-control" type="text" v-model="comicform.year"/>
                <button  class="form-control">Nuevo comic</button>
            </form>
        </div>
        <h1 style="color: red"> PAdre Comics</h1>
        <h2 v-if="favorito">Mi comic favorito es {{  favorito.titulo  }}</h2>
        <div class="cards-container" v-for="(comic,index) in comics" :key="comic" >
              <ComicComponent class="Card" :comic="comic" :index="index" v-on:comicFavoritoParent="comicFavoritoParent" v-on:eliminarComicParent="eliminarComicParent"/>
        </div>
        
    </div>
</template>

<script>
import ComicComponent from './ComicComponent.vue';

export default {
    name: "ComicsComponent",
    components:{
        ComicComponent
    },
    methods:{
        comicFavoritoParent(comic){
            this.favorito=comic;
            console.log("Comic favorito en padre: ",this.favorito);
        },
        eliminarComicParent(indexComic){
            console.log("Eliminar comic en padre");
            this.comics.splice(indexComic, 1);
        },
        añadirComic(){
            this.comics.push(this.comicform);
            this.comicform={
                titulo: "",
                imagen: "",
                descripcion: "",
                year: 0
            };
        }
    },
    data(){
        return{
            comicform:{
                titulo: "",
                imagen: "",
                descripcion: "",
                year: 0
            },
            comics: [
                {
                titulo: "Spiderman",
                imagen:
                    "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
                descripcion: "Hombre araña"
                , year: 1997
                },
                {
                titulo: "Wolverine",
                imagen:
                    "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
                descripcion: "Lobezno"
                , year: 2003
                },
                {
                titulo: "Guardianes de la Galaxia",
                imagen:
                    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRJYn6CM-z7WpDy0owgiU_Ihh-DIQJfrmuiID--4tbLDrDBQUD50SrDygXrrKj2chuAu5q3p_MM7XT1SzHOIabT2jWMV4sLPsFykNYdeY6C",
                descripcion: "Yo soy Groot"
                , year: 2006
                },
                {
                titulo: "Avengers",
                imagen:
                    "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
                descripcion: "Los Vengadores"
                , year: 1993
                },
                {
                titulo: "Spawn",
                imagen:
                    "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
                descripcion: "Al Simmons"
                , year: 2000
                },
                {
                titulo: "Batman",
                imagen:
                    "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
                descripcion: "Murcielago"
                , year: 2001
                }
            ],
            favorito:null
        }
    }
    
}
</script>

<style>
@import url('./../assets/css/comics.css');
</style>