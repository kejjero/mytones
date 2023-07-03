<template>
  <li :class="$style.topSong">
    <span :class="$style.number">0{{song.id}}</span>
    <div :class="$style.track">
      <div :class="$style.previewImage"/>
      <div :class="$style.nameWrapper">
        <p :class="$style.songName">{{ song.songName }}</p>
        <h4 :class="$style.author">{{ song.author }}</h4>
      </div>
    </div>
    <div :class="$style.other">
      <span :class="$style.time">{{ song.time }}</span>
      <button :class="$style.settings">
        <svg width="18" height="6" viewBox="0 0 18 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="3" cy="3" r="3" fill="#B3B3BC"/>
          <circle cx="15" cy="3" r="3" fill="#B3B3BC"/>
        </svg>
      </button>
    </div>
  </li>
</template>

<script>

export default {
  props: {
    song: {
      type: Object,
      required: true
    }
  }
}

</script>

<style module lang="scss">
@import "./TopWeekSong.module.scss";
</style>