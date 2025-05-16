<template>
  <div class="login-container">
    <el-card class="login-card">
      <template #header>
        <div class="card-header">
          <span>{{ isLogin ? '登录' : '注册' }}</span>
        </div>
      </template>
      
      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-width="80px"
        @submit.prevent
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名" />
        </el-form-item>
        
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="请输入密码"
            show-password
          />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handleSubmit">
            {{ isLogin ? '登录' : '注册' }}
          </el-button>
          <el-button @click="toggleMode">
            切换到{{ isLogin ? '注册' : '登录' }}
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import type { FormInstance } from 'element-plus'
import axios from 'axios'
import { loginRules } from '@/utils/rulers/validationRules'
import {login,register} from '@/api/register-login'
import { userInfo } from 'os'

interface ApiResponse {
  code: number
  message: string
  data?: any
}

const router = useRouter()
const isLogin = ref(true)
const formRef = ref<FormInstance>()

const form = reactive({
  username: '',
  password: ''
})

const rules = loginRules

const handleSubmit = async () => {
  if (!formRef.value) return
  
  await formRef.value.validate(async (valid) => {
    if (valid) {
      try {
          if(!isLogin.value){
            const registerRes = await register({username:form.username,password:form.password}) as ApiResponse
              if(registerRes.code === 200){
                ElMessage.success('注册成功')
                isLogin.value = true
              }else{
                ElMessage.error(registerRes.message)
              }
             
          }

      } catch (error) {
        ElMessage.error('请求失败')
      }
    }
  })
}

const toggleMode = () => {
  isLogin.value = !isLogin.value
  form.username = ''
  form.password = ''
  formRef.value?.clearValidate()
}
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}

.login-card {
  width: 400px;
}

.card-header {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
</style> 