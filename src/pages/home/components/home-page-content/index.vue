<template>
  <div class="home-page-content">
    <el-row :gutter="20">
      <template v-for="item in projectList" :key="item.id">
        <el-col :xs="24" :md="12" :lg="8">
          <home-project :data="item" @click="handleProjectClick(item)" />
        </el-col>
      </template>
    </el-row>
    <el-empty v-if="!projectList?.length" description="无数据"></el-empty>
    <el-row v-if="isPagenation">
      <el-pagination
        :currentPage="pageInfo.page"
        :page-sizes="[10, 20, 30]"
        :page-size="pageInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="projectCount"
        @size-change="handleSizeChange"
        @current-change="handlePageChange"
      >
      </el-pagination>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'

import HomeProject from '../home-project/index.vue'

import { LStorage } from '@/utils/wystorage'
import { IProject } from '@/store/home/type'

export default defineComponent({
  components: {
    HomeProject
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const userMenus = computed(() => store.state.login.userMenus)

    const pageInfo = ref({ page: 1, pageSize: 10 })
    watch(pageInfo, () => getPageData())

    // 发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      const storedQueryInfo = LStorage.get('queryParameters')
      store.dispatch('home/projectListAction', {
        ...storedQueryInfo,
        page: pageInfo.value.page,
        pageSize: pageInfo.value.pageSize,
        ...queryInfo
      })
    }

    // 获取列表数据
    getPageData()

    const projectList = computed(() => store.state.home.projectList)
    const projectCount = computed(() => store.state.home.projectCount)
    const isPagenation = computed(
      () => projectCount.value > pageInfo.value.pageSize
    )

    const handleProjectClick = (item: IProject) => {
      // 将当前点击的项目 id 保存在 store 中作为 activeProject
      store.commit('common/setActiveProject', item.id, { root: true })
      store.commit('common/setActiveNavId', userMenus.value[1].id, {
        root: true
      })
      store.commit(
        'common/setActiveMenuId',
        userMenus.value[1].children[0].id,
        {
          root: true
        }
      )
      router.push('/overview/dashboard')
    }

    return {
      projectList,
      isPagenation,
      getPageData,
      handleProjectClick
    }
  }
})
</script>

<style scoped lang="less">
.home-page-content {
  margin-top: 10px;
  padding: 16px;
  flex: 1;
  background-color: #fff;
  .home-project {
    margin-bottom: 20px;
    cursor: pointer;
  }
  .el-pagination {
    width: 100%;
    text-align: right;
  }
}
</style>
