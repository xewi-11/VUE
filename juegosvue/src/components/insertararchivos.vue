<template>
  <div>
    <form >
        <div class="mb-3">
            <label for="formFileMultiple" class="form-label">Subir archivos</label>
            <input @change="handleFileChange" class="form-control" type="file" id="formFileMultiple" multiple>
            <button v-on:click.prevent="importarArchivos">Subir</button>
        </div>
    </form>
  </div>
</template>

<script>
import ServiceFiles from '@/services/servicefiles';

const service = new ServiceFiles();
export default {
    name: "Insertar-archivos",
    data() {
        return {
            archivos: null
        };
    },
    methods: {
        handleFileChange(event) {
            this.archivos = event.target.files;
        },
        importarArchivos() {
            service.subirArchivo(this.archivos).then(response => {
                console.log("Archivos subidos:", response);
            }).catch(error => {
                console.error("Error al subir archivos:", error);
            });
        }
    }
};
</script>

<style>

</style>