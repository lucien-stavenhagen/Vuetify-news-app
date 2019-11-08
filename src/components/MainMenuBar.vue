<template>
  <div>
    <v-app-bar app flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Headline News</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{on}">
          <v-icon v-on="on" @click="toggleTheme">mdi-light-switch</v-icon>
        </template>
        <span>Toggle Dark</span>
      </v-tooltip>
    </v-app-bar>
    <v-navigation-drawer app disable-resize-watcher hide-overlay v-model="drawer">
      <v-list>
        <v-list-group value="true">
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon left>mdi-shape-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-uppercase">Categories</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(category ,i) in categories"
            :key="i"
            @click="selectCategory(category.name)"
          >
            <v-list-item-icon>
              <v-icon left>{{category.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-uppercase">{{category.name}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-group value="false">
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon left>mdi-newspaper</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-uppercase">Sources</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="(source ,i) in sourcelist.sources" :key="i">
            <v-list-item-content>
              <v-list-item-title>{{source.name}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
      <v-btn large @click="drawer = !drawer">Close Drawer</v-btn>
    </v-navigation-drawer>
    <!--
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <v-icon left>mdi-longitude</v-icon>Categories
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(category ,i) in categories"
            :key="i"
            @click="selectCategory(category)"
          >
            <v-list-item-title>{{category}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "MainMenuBar",
  methods: {
    ...mapActions(["dispatchNewCategory"]),
    selectCategory(category) {
      this.$store.dispatch("dispatchNewCategory", category);
    },
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  },
  data() {
    return {
      categories: [
        {
          name: "business",
          icon: "mdi-cash-multiple"
        },
        {
          name: "entertainment",
          icon: "mdi-pac-man"
        },
        {
          name: "general",
          icon: "mdi-newspaper-variant-outline"
        },
        {
          name: "health",
          icon: "mdi-bandage"
        },
        {
          name: "science",
          icon: "mdi-atom"
        },
        {
          name: "sports",
          icon: "mdi-football"
        },
        {
          name: "technology",
          icon: "mdi-chip"
        }
      ],
      sourcelist: {
        status: "ok",
        sources: [
          {
            id: "abc-news",
            name: "ABC News",
            description:
              "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
            url: "https://abcnews.go.com",
            category: "general",
            language: "en",
            country: "us"
          },

          {
            id: "abc-news-au",
            name: "ABC News (AU)",
            description:
              "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
            url: "http://www.abc.net.au/news",
            category: "general",
            language: "en",
            country: "au"
          },

          {
            id: "aftenposten",
            name: "Aftenposten",
            description:
              "Norges ledende nettavis med alltid oppdaterte nyheter innenfor innenriks, utenriks, sport og kultur.",
            url: "https://www.aftenposten.no",
            category: "general",
            language: "no",
            country: "no"
          },

          {
            id: "al-jazeera-english",
            name: "Al Jazeera English",
            description:
              "News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.",
            url: "http://www.aljazeera.com",
            category: "general",
            language: "en",
            country: "us"
          }
        ]
      },
      drawer: false
    };
  }
};
</script>

<style scoped>
</style>