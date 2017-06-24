module.exports = function (sequelize, DataType) {
    var Telefones = sequelize.define("telefones", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        numero: {
            type: DataType.STRING,
        }
    });
    Telefones.associate = function (models) {
        Telefones.belongsTo(models.clientes);
    };
    return Telefones;
};
//# sourceMappingURL=telefones.js.map