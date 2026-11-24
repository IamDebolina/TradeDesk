const {model} = require ("mongoose")

const {PositionsSchema} = require("../schemas/PositionsSchema")

const PositionsModels =  new  model("positions",PositionsSchema)

module.exports = {PositionsModels}