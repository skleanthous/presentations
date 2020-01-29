// engine.js
const { Marp } = require('@marp-team/marp-core')
const multimdTable = require('markdown-it-multimd-table')
const plantuml = require('markdown-it-plantuml')

module.exports = opts => new Marp(opts)
  .use(multimdTable, {
      multiline:  true,
      rowspan:    true,
      headerless: true,
    })
  .use(plantuml)
