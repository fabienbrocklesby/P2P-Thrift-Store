import { findUserByEmail, findUserByUsername, createUser } from './user.service.js';

export default async (req, res) => {
  try {
    if (await findUserByEmail(req.body.email) || await findUserByUsername(req.body.username)) {
      throw new Error('User already exists');
    }
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
