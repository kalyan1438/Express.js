import * as User from "../models/user.model.js";
export const createUser = (req, res) => {
  if (!req.body || !req.body.name) {
    return res.status(400).json({
      message: "Name is required"
    });
  }

  const user = User.createUser(req.body.name);
  res.status(201).json(user);
};
export const getAll = (req,res)=>{
    res.json(User.getAll());
}
export const getById = (req,res)=>{
    res.json(User.getById(Number(req.params.id)));
}
export const deleteUser = (req,res)=>{
    const id = Number(req.params.id);
    const deleted = User.deleteUser(id);
    if (!deleted) return res.sendStatus(404);
    res.send("Delete user successfully");
}

export const updateUser = (req,res)=>{
    const id = Number(req.params.id);
    const user = User.updateUser(id, req.body.name);
    if (!user) return res.sendStatus(404);
    res.json(user);
}

