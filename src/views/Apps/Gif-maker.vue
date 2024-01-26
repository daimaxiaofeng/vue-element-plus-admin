<template>
  <el-card shadow="never">
    <template #header>
      <span>GIF 表情包制作</span>
    </template>
    <el-form :model="form" label-width="120px">
      <el-form-item label="模板">
        <el-select v-model="form.tpl" placeholder="选择表情包模板">
          <el-option
            v-for="option in options"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-image style="width: 300px" :src="getImageSrc()" fit="contain" />
      </el-form-item>
      <el-divider border-style="none" />
      <el-form-item
        :label="`第 ${index + 1} 句`"
        v-for="(placeholder, index) in getSelectedOption().placeholders"
        :key="index"
      >
        <el-input v-model="form.sentences[index]" :placeholder="placeholder" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" @click="onSubmit">制作</el-button>
        <el-button @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
    <el-dialog title="制作成功" v-model="dialogVisible" class="custom-dialog" width="30%" center>
      <el-card>
        <el-form-item>
          <el-image style="width: 300px" :src="imageUrl" fit="contain" />
        </el-form-item>
      </el-card>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="downloadImage">下载</el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </el-card>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElSelect,
  ElOption,
  ElButton,
  ElDialog,
  ElImage,
  ElCard,
  ElDivider
} from 'element-plus'
import axios from 'axios'

import wangjingzegif from '../../assets/apps/gif-maker/wangjingze.gif'
import dagonggif from '../../assets/apps/gif-maker/dagong.gif'
import sorrygif from '../../assets/apps/gif-maker/sorry.gif'
import kongminggif from '../../assets/apps/gif-maker/kongming.gif'

const gifs = reactive({
  wangjingze: wangjingzegif,
  dagong: dagonggif,
  sorry: sorrygif,
  kongming: kongminggif
})

const getImageSrc = () => {
  return gifs[form.tpl]
}

const options = ref([
  {
    value: 'wangjingze',
    label: '王境泽真香',
    placeholders: ['我就是饿死', '死外边 从这跳下去', '也不会吃你们一点东西', '真香']
  },
  {
    value: 'dagong',
    label: '打工是不可能打工的',
    placeholders: [
      '没有钱啊 肯定要做的啊',
      '不做的话没有钱用',
      '那你不会去打工啊',
      '有手有脚的',
      '打工是不可能打工的',
      '这辈子不可能打工的'
    ]
  },
  {
    value: 'sorry',
    label: '有钱是真的能为所欲为',
    placeholders: [
      '好啊',
      '别说我是一等良民',
      '就算你们真的想要诬告我',
      '我有的是钱找律师帮我打官司',
      '我想我根本不用坐牢',
      '你别以为有钱了不起啊',
      'sorry 有钱是真的能为所欲为',
      '不过我相信你不会明白这种感觉',
      '不明白 不明白'
    ]
  },
  {
    value: 'kongming',
    label: '孔明',
    placeholders: ['没想到', '竟说出如此粗鄙之语']
  }
])

const form = reactive({
  tpl: 'wangjingze',
  sentences: []
})

const initialForm = reactive({
  tpl: 'wangjingze',
  sentences: []
})

const getSelectedOption = () => {
  return options.value.find((option) => option.value === form.tpl) || { placeholders: [] }
}

const dialogVisible = ref(false)
const imageUrl = ref('')
const loading = ref(false)

const onSubmit = () => {
  loading.value = true
  const jsonData = {}
  for (let index = 0; index < getSelectedOption().placeholders.length; index++) {
    const sentence = form.sentences[index]
    if (sentence) {
      jsonData[`${index}`] = sentence
    } else {
      const placeholder = getSelectedOption().placeholders[index]
      jsonData[`${index}`] = placeholder
    }
  }
  const url = 'http://8.142.120.167/api/gif-maker/make/' + form.tpl
  const jsonString = JSON.stringify(jsonData)
  axios
    .post(url, jsonString, { responseType: 'blob' })
    .then((response) => {
      const blob = new Blob([response.data], { type: 'image/gif' })
      const url = URL.createObjectURL(blob)
      imageUrl.value = url
      dialogVisible.value = true
    })
    .catch((error) => {
      console.log('error: ', error)
    })
    .finally(() => {
      loading.value = false
    })
}

const onReset = () => {
  // form.tpl = initialForm.tpl
  form.sentences = [...initialForm.sentences]
}

const downloadImage = () => {
  const link = document.createElement('a')
  link.href = imageUrl.value
  link.download = `${form.tpl}.gif`
  link.click()
}
</script>

<style>
.custom-dialog {
  width: 20%;
  border-radius: 2%;
}

@media (width <= 768px) {
  .custom-dialog {
    width: 80%;
  }

  .el-form-item__label {
    width: unset !important;
    min-width: 60px;
  }
}
</style>
