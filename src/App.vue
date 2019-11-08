<template>
  <v-app>
    <v-content>
      <MainMenuBar />
      <HeadlineViewer />
    </v-content>
  </v-app>
</template>

<script>
import HeadlineViewer from "./components/HeadlineViewer";
import MainMenuBar from "./components/MainMenuBar";
export default {
  name: "App",

  components: {
    HeadlineViewer,
    MainMenuBar
  }
};
</script>
