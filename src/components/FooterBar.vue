<template>
  <v-footer app absolute>
    <div>
      News Feed from
      <a href="https://newsapi.org/">News API</a>
    </div>
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script>
export default {
  name: "FooterBar"
};
</script>

<style>
</style>