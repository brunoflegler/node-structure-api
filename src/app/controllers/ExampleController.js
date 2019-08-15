const { Example } = require('../models')

class ExampleController {
  async index(req, res) {
    try {
      const examples = await Example.findAll()
      return res.send(examples)
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new ExampleController()
