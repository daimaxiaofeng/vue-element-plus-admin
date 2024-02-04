<template>
  <el-card shadow="never">
    <template #header>
      <span>选择工具</span>
    </template>
    <el-form :model="form" label-width="120px">
      <el-form-item label="工具">
        <el-select v-model="form.tool" placeholder="请选择">
          <el-option
            v-for="option in options"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          />
        </el-select>
      </el-form-item>
    </el-form>
    <el-divider v-if="form.tool != ''" />
    <gif-maker v-if="form.tool === 'gif-maker'">GIF 表情包制作</gif-maker>
    <p v-if="form.tool === 'test'">测试空白页面</p>
  </el-card>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElForm, ElFormItem, ElSelect, ElOption, ElCard, ElDivider } from 'element-plus'

import GifMaker from './Gif-maker.vue'

const form = reactive({
  tool: ''
})

const options = ref([
  {
    value: 'gif-maker',
    label: '表情包制作'
  },
  {
    value: 'test',
    label: '测试空白页面'
  }
])
</script>
