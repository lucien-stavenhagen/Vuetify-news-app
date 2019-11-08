<template>
  <div>
    <v-container>
      <v-system-bar v-if="this.response">
        <span>{{this.response.data.totalResults}} articles</span>
      </v-system-bar>
      <v-card flat tile outlined>
        <v-card-title class="text-uppercase">{{this.getCategory}}</v-card-title>
        <v-container>
          <v-pagination total-visible="6" v-model="page" :length="this.numpages"></v-pagination>
          <v-row>
            <v-col :key="i" v-for="(article, i) in this.articles" cols="12" sm="12">
              <v-hover v-slot:default="{hover}">
                <v-card flat outlined target="_blank" :elevation="hover ? 12 : 0">
                  <v-img v-if="article.urlToImage" :src="article.urlToImage" max-height="400px"></v-img>
                  <v-img
                    v-else
                    :src="require('../../src/assets/logo.png')"
                    class="mx-auto"
                    height="100px"
                    width="100px"
                  ></v-img>

                  <a target="_blank" :href="article.url">
                    <v-card-title>{{article.title}}</v-card-title>
                  </a>
                  <v-card-subtitle
                    v-if="article.author && article.author !==''"
                  >{{article.author}}, {{article.source.name}}</v-card-subtitle>
                  <v-card-subtitle v-else>
                    <i>Unknown author</i>
                    , {{article.source.name}}
                  </v-card-subtitle>
                  <v-card-subtitle>Published at: {{article.publishedAt}}</v-card-subtitle>
                  <v-card-text>{{article.content}}</v-card-text>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
          <v-pagination total-visible="6" v-model="page" :length="this.numpages"></v-pagination>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "HeadlineViewer",
  computed: {
    ...mapGetters(["getCategory", "getApiKey", "getHeadlinesUrl"])
  },
  methods: {
    async getTopHeadlines(apage) {
      try {
        this.response = await axios.get(this.getHeadlinesUrl, {
          params: {
            country: "us",
            pageSize: this.pagesize,
            page: apage,
            category: this.getCategory
          },
          headers: {
            Authorization: `Bearer ${this.getApiKey}`
          }
        });
        this.articles = this.response.data.articles;
        this.numpages = Math.ceil(
          this.response.data.totalResults / this.pagesize
        );
      } catch (error) {
        this.articles = [
          {
            source: {
              id: "",
              name: ""
            },
            author: "error",
            title: "error",
            description: "error",
            url: "error",
            urlToImage: "error",
            publishedAt: "error",
            content: error
          }
        ];
      }
    }
  },
  data() {
    return {
      response: null,
      pagesize: 4,
      numpages: 0,
      page: 1,
      articles: []
    };
  },
  watch: {
    getCategory: function() {
      this.page = 1;
      this.getTopHeadlines(this.page);
    },
    page: function() {
      this.getTopHeadlines(this.page);
    }
  },
  created() {
    this.getTopHeadlines(1);
  }
};
</script>

<style>
.v-card__text,
.v-card__title {
  word-break: normal !important;
}
</style>