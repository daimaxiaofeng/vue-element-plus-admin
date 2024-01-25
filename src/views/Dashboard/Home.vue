<template>
  <ContentWrap title="欢迎来到 @代码小风 的小站">
    <el-text class="mx-1">
      <p>
        全平台统一账号（<b>抖音</b>、哔哩哔哩、小红书等都有注册）:
        <span class="account_name">@代码小风</span>
        ，感谢大家的关注。
      </p>
      <p>这个网站期望是给大家做一些有趣的或实用的功能。</p>
      <p>
        不过因为本人精力有限，基本只能在下班后或周末做一点点，并且我也不是专业的前端或后端程序员，<br />
        所以这个网站目前只对电脑端的
        <el-link href="https://www.google.cn/chrome/" target="_blank">Chrome 浏览器</el-link>
        进行了适配，使用其他设备或浏览器访问本站时可能会出现样式问题（如果有时间我肯定会优化的）。
      </p>
      <p>你可以在页面<b>左栏</b>里找到这个网站目前有提供的功能。</p>
      <p>
        如果你有什么其他想要的功能，也可以在抖音粉丝群或发送邮件到
        <el-link href="mailto:daimaxiaofeng@qq.com" target="_blank">daimaxiaofeng@qq.com</el-link>
        告诉我 ~
      </p>
      <p>Good Luck.</p>
    </el-text>
  </ContentWrap>
</template>
<script lang="ts" setup>
import { ContentWrap } from '@/components/ContentWrap'
import { ElLink, ElText } from 'element-plus'
</script>
<style>
.account_name {
  color: rgb(169 93 0);
}
</style>
