<template>
  <div class="nav-select">
    <el-select class="select-box" v-model="activeProject" size="small">
      <el-option
        v-for="item in projectList"
        :key="item.id"
        :label="item.name"
        :value="item.id"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'

import { LStorage } from '@/utils/wystorage'

export default defineComponent({
  setup() {
    const store = useStore()

    const projectList = computed(() => store.state.common.projectList)
    const activeProject = computed({
      get: () => store.state.common.activeProject,
      set: (val) => {
        store.commit('common/setActiveProject', val)
      }
    })

    // 刷新页面
    if (!projectList.value.length) {
      const storedProjectList = LStorage.get('projectList')
      if (storedProjectList) {
        store.commit('common/setProjectList', storedProjectList)
      } else {
        store.dispatch('common/getProjectList')
      }
    }

    return {
      projectList,
      activeProject
    }
  }
})
</script>

<style scoped lang="less">
.nav-select {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;
}
</style>
