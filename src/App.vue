<template>
  <Header />
  <Pomelo id="pomelo" />
  <TrackList id="tracklist" />
  <Playlist id="playlist" />
  <FindMe id="findme" />
  <Friendship id="friendship" />
  <Footer />
  <Player />
</template>

<script setup>
import Header from "./components/main/Header.vue";
import Pomelo from "./components/main/Pomelo.vue";
import TrackList from "./components/main/TrackList.vue";
import Playlist from "./components/main/Playlist.vue";
import FindMe from "./components/main/FindMe.vue";
import Friendship from "./components/main/Friendship.vue";
import Footer from "./components/main/Footer.vue";
import Player from "./components/main/Player.vue";
</script>
