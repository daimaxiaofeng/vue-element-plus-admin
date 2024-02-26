<script setup lang="ts">
// import { useAppStore } from '@/store/modules/app'
// import { computed } from 'vue'
import { useDesign } from '@/hooks/web/useDesign'
import { ElText } from 'element-plus'

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('footer')

// const appStore = useAppStore()

// const title = computed(() => appStore.getTitle)
</script>

<template>
  <div
    :class="prefixCls"
    class="text-center text-[var(--el-text-color-placeholder)] bg-[var(--app-content-bg-color)] h-[var(--app-footer-height)] leading-[var(--app-footer-height)] dark:bg-[var(--el-bg-color)] dmxf-footer"
  >
    <!-- <el-text class="footer-text">Copyright © 2024 By {{ title }}</el-text>
    <el-text class="footer-text">&nbsp;&nbsp;-&nbsp;&nbsp;</el-text> -->
    <el-text class="footer-text"
      ><a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2021023456号-2</a>
    </el-text>
  </div>
</template>
<style>
.dmxf-footer el-text {
  font-size: 8px !important;
}

.dmxf-footer a {
  text-decoration-line: none;
  color: var(--el-text-color-regular);
}

.dmxf-footer a:hover {
  color: var(--el-color-primary);
}

.footer-text {
  font-size: 12px !important;
}

.footer-text a {
  color: #eee;
}
</style>
