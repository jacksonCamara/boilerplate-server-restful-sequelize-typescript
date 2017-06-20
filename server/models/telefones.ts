module.exports = (sequelize, DataType) => {
  const Telefones = sequelize.define("Telefones", {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    numero: {
      type: DataType.STRING,
    }
  });

  Telefones.associate = models => {
    Telefones.belongsTo(models.Clientes);
  }

  return Telefones;
};