<template>
  <div :class="$style.musicPanel">
    <div :class="$style.topHundred">
      <div :class="$style.topHundredWrapper">
        <h2 :class="['title', $style.topHundredTitle]">Top 100 Weekly</h2>
        <button :class="$style.moreList">More list</button>
      </div>
      <ul :class="$style.songList">
        <TopWeekSong
            v-bind:key="song.id"
            v-for="(song) in playerStore.songsTopWeek"
            v-bind:song="song"
        />
      </ul>
      <span :class="$style.border"/>
      <MusicPlayer />
    </div>
  </div>
</template>


<script setup>
import { TopWeekSong, MusicPlayer } from '@/components'
import { usePlayerStore } from '@/stores/playerStore'
const playerStore = usePlayerStore()

</script>

<style module lang="scss">
@import "MusicPanel.module.scss";
</style>