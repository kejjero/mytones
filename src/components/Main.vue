
<template>
  <div class="content">
    <header class="header">
      header
    </header>
    <div class="main-layout">
      <RouterView />
      <div class="music-panel">

      </div>
    </div>
  </div>
</template>

<style scoped>

.content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.header {
  min-height: 98px;
  color: #000;
}

.main-layout {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.music-panel {
  min-width: 340px;
  background-color: #fff;
  border-radius: 24px 0 0;
}

</style>