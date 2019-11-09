<template>
  <v-app>
    <MainMenuBar />
    <v-content>
      <HeadlineViewer />
    </v-content>
    <FooterBar />
  </v-app>
</template>

<script>
import HeadlineViewer from "./components/HeadlineViewer";
import MainMenuBar from "./components/MainMenuBar";
import FooterBar from "./components/FooterBar";

export default {
  name: "App",

  components: {
    HeadlineViewer,
    MainMenuBar,
    FooterBar
  }
};
</script>
