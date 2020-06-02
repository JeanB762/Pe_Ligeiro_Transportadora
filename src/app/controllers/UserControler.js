import User from '../models/User';

class UserController {
  async store(req, res) {
    const user = await User.create(req.body);
    const { id, name } = user;
    return res.json({ id, name });
  }
}

export default new UserController();
