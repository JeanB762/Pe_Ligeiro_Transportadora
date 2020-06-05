import Admin from '../models/Admin';

class AdminController {
  async store(req, res) {
    const adminExists = await Admin.findOne({
      where: { email: req.body.email },
    });

    if (adminExists) {
      return res.status(400).json({ error: 'Admin already exists.  ' });
    }
    // const Admin = await Admin.create(req.body);
    const { name, email, id } = await Admin.create(req.body);
    return res.json({ id, name, email });
  }

  async update(req, res) {
    console.log(req.userId);
    return res.json({ ok: true });
  }
}

export default new AdminController();
