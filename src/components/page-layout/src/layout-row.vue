<template>
  <section class="layout-row">
    <aside class="aside">
      <el-menu :default-active="activeMenuId" class="el-menu-vertical-demo">
        <template v-for="item in menus" :key="item.id">
          <el-menu-item
            :data-key="activeMenuId"
            :class="activeMenuId == item.id ? 'is-active' : ''"
            :index="item.id + ''"
            @click="handleMenuItem(item)"
          >
            <el-icon>
              <component :is="$icon[item.icon]"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </aside>
    <main class="main">
      <router-view></router-view>
    </main>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
import { IUserMenu } from '@/service/login/type'

export default defineComponent({
  props: {
    menus: {
      type: Array as PropType<IUserMenu[]>,
      required: true
    }
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    const activeMenuId = ref(store.state.common.activeMenuId + '')

    watch(
      () => store.state.common.activeMenuId,
      () => {
        activeMenuId.value = store.state.common.activeMenuId + ''
      }
    )

    const handleMenuItem = (item: IUserMenu) => {
      router.push(item.url)
      activeMenuId.value = item.id + ''
      store.commit('common/setActiveMenuId', item.id)
    }

    return {
      activeMenuId,
      handleMenuItem
    }
  }
})
</script>

<style scoped lang="less">
.layout-row {
  width: 100%;
  height: 100%;
  display: flex;
  .aside {
    width: 220px;
    background-color: #fff;
    .el-menu {
      border: none;
      .el-menu-item {
        margin: 20px 0;
        border-right: 4px solid #ffffff;
        &.is-active {
          &:hover {
            background-color: #fff4ee;
            border-color: #ff7626;
          }
          background-color: #fff4ee;
          border-color: #ff7626;
          .el-icon {
            color: #ff7626;
          }
        }
        &:hover {
          background-color: #eaeaea;
          border-color: #eaeaea;
        }
        .el-icon {
          color: #a3a5b0;
        }
      }
    }
  }
  .main {
    flex: 1;
    padding: 0 20px;
    overflow: auto;
  }
}
</style>
