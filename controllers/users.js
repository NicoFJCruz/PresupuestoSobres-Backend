const Sequelize = require("sequelize");
const { Users, Families } = require("../models");
const Family = require("../models/Families");
const { generateToken } = require("../tokens");

const userRegister = async (req, res, next) => {
  try {
    const { family, ...userFields } = req.body;
    const familyToSet = await Families.findByPk(family);

    const [user, created] = await Users.findOrCreate({
      where: { email: userFields.email },
      defaults: {
        ...userFields,
      },
      include: [{ model: Family }],
    });
    if (created) {
      await user.setFamilies(familyToSet);
    }

    res.status(201).send(user);
  } catch (error) {
    console.error(error);
    next();
  }
};

const userLogin = async (req, res, next) => {
  try {
    const userExists = await Users.findByEmail(req.body.email);
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

module.exports = { userRegister, userLogin, userMe, userLogout };
