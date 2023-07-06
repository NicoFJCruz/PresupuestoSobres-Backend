const Sequelize = require("sequelize");
const { User, Family } = require("../models");
const { generateToken } = require("../tokens");

const userAll = async (req, res, next) => {
  try {
    const users = await User.findAll({ include: [{ model: Family }] });

    res.send(users);
  } catch (error) {
    console.error(error);
    next();
  }
};

const userFamily = async (req, res, next) => {
  try {
    const users = await User.findAll({
      where: { familyId: req.params.familyId },
      include: [{ model: Families }],
    });

    res.send(users);
  } catch (error) {
    console.error(error);
    next();
  }
};

const userRegister = async (req, res, next) => {
  try {
    const { family, ...userFields } = req.body;

    const user = await User.create({ ...userFields, familyId: family });

    res.status(201).send(user);
  } catch (error) {
    console.error(error);
    next();
  }
};

const userLogin = async (req, res, next) => {
  try {
    const userExists = await User.findByEmail(req.body.email);
    if (!userExists) {
      return res.status(404).send("Usuario no existente");
    }

    const validate = await userExists.validatePassword(req.body.password);

    const { salt, password, createdAt, updatedAt, ...rest } =
      userExists.dataValues;

    if (validate) {
      let token = generateToken(rest);
      res.cookie("token", token).send(userExists);
    } else {
      res.status(401).send({ error: "Incorrect" });
    }
  } catch (error) {
    console.error(error);
    next();
  }
};

const userMe = async (req, res, next) => {
  try {
    res.send(req.user);
  } catch (error) {
    console.error(error);
    next();
  }
};

const userLogout = async (req, res, next) => {
  try {
    res.clearCookie("token");
    res.status(204).send({});
  } catch (error) {
    console.error(error);
    next();
  }
};

module.exports = {
  userRegister,
  userLogin,
  userMe,
  userLogout,
  userAll,
  userFamily,
};
