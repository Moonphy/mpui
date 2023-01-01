const { defineConfig } = require('@vue/cli-service')
// const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: './example/main.ts'
    }
  }
})
