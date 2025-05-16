<template>
  <div class="home-container">
    <el-card class="welcome-card">
      <template #header>
        <div class="card-header">
          <span>欢迎回来</span>
          <el-button type="danger" @click="handleLogout">退出登录</el-button>
        </div>
      </template>
      <div class="welcome-content">
        <h2>登录成功！</h2>
        <p>这是一个受保护的页面，只有登录后才能访问。</p>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()

const handleLogout = () => {
  localStorage.removeItem('token')
  ElMessage.success('退出成功')
  router.push('/login')
}
</script>

<style scoped>
.home-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}

.welcome-card {
  width: 500px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.welcome-content {
  text-align: center;
  padding: 20px 0;
}

.welcome-content h2 {
  margin-bottom: 20px;
  color: #409EFF;
}
</style> 