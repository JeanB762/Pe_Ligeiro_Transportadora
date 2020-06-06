import User from '../models/User';

class UserController {
  async store(req, res) {
    const userReq = req.body;

    const user = await User.create(userReq);

    return res.json(user);
  }

  async update(req, res) {
    const { userId } = req.params;

    const user = await User.findByPk(userId);

    if (!user) {
      res.status(400).json({ error: 'Users does not exists' });
    }

    const address = await user.update(req.body);

    return res.json(address);
  }

  async delete(req, res) {
    const { userId } = req.params;

    const user = await User.findOne({
      where: { id: userId },
    });

    if (!user) {
      res.status(400).json({ error: 'Users does not exists' });
    }

    try {
      await user.destroy({ where: { id: userId } });

      return res.json({ message: 'User destroyed' });
    } catch (err) {
      return res.json({ message: `Error: ${err}` });
    }
  }
}

export default new UserController();
