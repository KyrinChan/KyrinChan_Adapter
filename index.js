import fs from 'node:fs'
import { Config } from './utils/config.js'
import { createServer } from './server/index.js'

if (!global.segment) {
  global.segment = (await import('oicq')).segment
}

const files = fs.readdirSync('./plugins/chatgpt-plugin/apps').filter(file => file.endsWith('.js'))

let ret = []

files.forEach((file) => {
  ret.push(import(`./apps/${file}`))
})

ret = await Promise.allSettled(ret)

let apps = {}
for (let i in files) {
  let name = files[i].replace('.js', '')

  if (ret[i].status !== 'fulfilled') {
    logger.error(`载入插件错误：${logger.red(name)}`)
    logger.error(ret[i].reason)
    continue
  }
  apps[name] = ret[i].value[Object.keys(ret[i].value)[0]]
}

// 启动服务器
await createServer()
logger.info('**************************************')
logger.info('chatgpt-plugin(KyrinChan version)加载成功')
logger.info(`当前版本${Config.version}`)
logger.info('**************************************')

export { apps }
