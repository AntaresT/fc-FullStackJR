import User from '../models/User'

class userController{

  async index(req, res) {
    try{
      //Metodo find traz tudo
      const users = await User.find()
      
      return res.json(users)

    }catch(err) {
      console.log(err)
      
      return res.status.json({error: "Internal server error"})
    }
  }

  async show(req, res){}

  async create(req, res){
    try{
      const { email, password } = req.body;

      const user = await User.findOne({email})

      if (user){
        return res.status(422).json({message: `User ${email} already exists`})
      }

      const newUser = await User.create({email, password})

      return res.status(201).json(newUser)

    }catch(err) {
      console.log(err)

      return res.status.json({error: "Internal server error"})
    }
  }

  async update(req, res){}

  async destroy(req, res){}


}

export default new userController();
