<script setup lang="ts">
import { useStorage } from '@/hooks/web/useStorage'
import { ElButton } from 'element-plus'
import { useDesign } from '@/hooks/web/useDesign'

const { clear: storageClear } = useStorage('localStorage')
const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('setting')

// 清空缓存
const clear = () => {
  storageClear()
  window.location.reload()
}
</script>

<template>
  <el-button :class="prefixCls" @click="clear" type="primary">
    <Icon icon="ant-design:clear-outlined" /> &nbsp;&nbsp;清理缓存&nbsp;
  </el-button>
</template>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-setting';

.@{prefix-cls} {
  margin-right: 10px;
  border-radius: 6px;
}
</style>
