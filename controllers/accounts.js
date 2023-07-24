const Sequelize = require("sequelize");
const { Family, Account } = require("../models");
const { capitalizeWord } = require("../utils/capitalizeWord");

const accountAll = async (req, res, next) => {
  try {
    const accounts = await Account.findAll({ include: { model: Family } });

    res.send(accounts);
  } catch (error) {
    console.error(error);
    next();
  }
};

const accountCreate = async (req, res, next) => {
  try {
    let { name, amount } = req.body;

    const capitalize = capitalizeWord(name);

    if (!amount) amount = 0;
    if (typeof amount === "string") {
      const regex = /^[0-9]+$/;
      let numbers = regex.test(amount);

      if (!numbers) {
        return res.status(400).send("Debe ingresar solo números");
      }

      amount = Number(amount);
    }

    const account = await Account.create({
      name: capitalize,
      amount,
      familyId: req.user.familyId,
    });
    res.send(account);
  } catch (error) {
    console.error(error);
    next();
  }
};

module.exports = { accountCreate, accountAll };
