<template>
  <v-row class="px-3" justify="center">
    <v-col cols="4">
      <h1 class="text-center">Teste Innovea - consumindo API de noticias</h1>
      <v-select
        color="primary"
        label="Selecione por País"
        :loading="isLoading"
        :items="selectItems"
        item-title="state"
        item-value="abbr"
        v-model="selected"
        @update:model-value="fetch(selected)"
      ></v-select>
    </v-col>
  </v-row>

  <Transition>
    <p v-if="isLoading">carregando...</p>
    <v-row v-else class="px-3" justify="center">
      <v-col cols="12" sm="6" md="4" lg="3" v-for="(article, index) in arti">
        <v-card class="mx-auto" max-width="400" elevation="10" min-height="470">
          <v-img
            class="align-end text-white"
            height="200"
            src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=939&q=80"
            cover
          >
            <v-card-title>{{ article.title }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4"
            >Autor: {{ article.author || "desconhecido" }}
          </v-card-subtitle>

          <v-card-text>
            <div>{{ article.content || '-- sem conteúdo --' }}</div>

            <div class="font-italic mt-3">
              Publicado em: {{ new Date(article.publishedAt).toLocaleString() }}
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange">
              <a
                :href="article.url"
                target="_blank"
                class=""
                rel="noopener noreferrer"
              >
                Ver completo
              </a>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </Transition>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
const isLoading = ref(false);
let arti = ref([]);
let selected = ref("");
const selectItems = ref([
  { state: "Brasil", abbr: "br" },
  { state: "Estados Unidos", abbr: "us" },
  { state: "Austrália", abbr: "au" },
  { state: "Canada", abbr: "ca" },
  { state: "Grécia", abbr: "gr" },
]);

async function fetch(country = "br") {
  try {
    isLoading.value = true;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    const {
      data: { articles },
    } = await axios.get(url);

    arti.value = articles;
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: orange;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
