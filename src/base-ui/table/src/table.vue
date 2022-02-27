<template>
  <div class="base-table">
    <div class="header" v-if="showHeader">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="dataSource"
      style="width: 100%"
      :border="border"
      :size="size"
      v-bind="childrenProps"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="showSelectionColumn"
        type="selection"
        :align="align"
        width="60"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        :index="index"
        :label="indexColumnName"
        :align="align"
        width="80"
      ></el-table-column>
      <template v-for="item in columns" :key="item.prop">
        <el-table-column
          :prop="item.prop"
          :label="item.label"
          :min-width="item.minWidth"
          :align="align"
          :show-overflow-tooltip="true"
        >
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
            <!-- <el-button>{{ scope.row[item.prop] }}</el-button> -->
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="isFooterShow">
      <slot name="footer">
        <el-pagination
          :currentPage="page.page"
          :page-sizes="[10, 20, 30]"
          :page-size="page.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="dataCount"
          @size-change="handleSizeChange"
          @current-change="handlePageChange"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    dataSource: {
      type: Array,
      require: true
    },
    columns: {
      type: Array,
      require: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    indexColumnName: {
      type: String,
      default: '序号'
    },
    showSelectionColumn: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    dataCount: {
      type: Number,
      default: 0
    },
    page: {
      type: Object,
      default: () => ({
        page: 1,
        pageSize: 10
      })
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    },
    align: {
      type: String,
      default: 'center'
    },
    size: {
      type: String,
      default: 'small'
    }
  },
  emits: ['selectionChange', 'update:page'],
  setup(props, { emit }) {
    const isFooterShow = computed(
      () => props.showHeader && props.dataCount > props.page.pageSize
    )

    const handleSelectionChange = (selection: any) => {
      emit('selectionChange', selection)
    }

    const handlePageChange = (page: number) => {
      emit('update:page', { ...props.page, page })
    }

    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize })
    }

    const index = function index(index: number) {
      return index + 1 + (props.page.page - 1) * props.page.pageSize
    }

    return {
      index,
      isFooterShow,
      handleSelectionChange,
      handlePageChange,
      handleSizeChange
    }
  }
})
</script>

<style scoped lang="less">
.base-table {
  width: 100%;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    .title {
      font-size: 18px;
      font-weight: 600;
      color: #434343;
    }
    .handler {
    }
  }

  .footer {
    margin-top: 8px;
    &:deep(.el-pagination) {
      text-align: right;
    }
  }
}
</style>
