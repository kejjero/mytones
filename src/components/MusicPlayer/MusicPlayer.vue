<template>
  <div :class="$style.musicPlayer">
    <h4 :class="$style.title">Now playing</h4>
    <div :class="$style.musicLabel">
      <img :class="$style.musicLabelImage" :src="musicLabel" alt="label" draggable="false">
    </div>
    <h5 :class="$style.artist">Dynamite</h5>
    <p :class="$style.song">BTS</p>
  </div>
</template>

<script>
import musicLabel from '@/images/alt-j.jpeg'

export default {
  data: () => {
    return {
      musicLabel
    }
  }
}

</script>

<style module lang="scss">
@import "MusicPlayer.module.scss";
</style>