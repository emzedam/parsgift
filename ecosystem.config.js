module.exports = {
    apps: [
       {
           name: 'parsgift',
           exec_mode: 'cluster',
           port: 3000,
           instances: 'max',
           script: './.output/server/index.mjs',
           args: 'start'
       }
   ]
}
