<template>
  <div class="menu">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="menu"
      moduleName="system"
      :ceratable="true"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/table.config'

export default defineComponent({
  components: {
    PageContent
  },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped lang="less">
.menu {
  width: 100%;
  height: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
}
</style>
