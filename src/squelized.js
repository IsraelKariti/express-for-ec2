import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";

export const sequelize = new Sequelize(
    'first_db',
    'admin',
    'pirko9!abh',
    {
        dialect: "mysql",
        host: "database-4.cjmoksseckme.us-east-1.rds.amazonaws.com"
    }
);

export const Computer = sequelize.define('computer', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    manufacturer: {
        type: DataTypes.STRING,
    },
    model: {
        type: DataTypes.STRING
    },
    ram: {
        type: DataTypes.INTEGER
    },
    disk: {
        type: DataTypes.INTEGER
    },
    price: {
        type: DataTypes.INTEGER
    }
});
