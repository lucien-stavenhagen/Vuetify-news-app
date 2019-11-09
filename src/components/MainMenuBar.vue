<template>
  <div>
    <v-app-bar app flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>News Viewer</v-toolbar-title>

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
      drawer: false
    };
  }
};
</script>

<style scoped>
</style>