

// module.exports=(sequelize,DataTypes)

module.exports=(sequelize,DataTypes)=> {
   const Todo= sequelize.define('Todo', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      default: false
      // allowNull defaults to true
    },
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
  })
  return Todo;
};


  
  // `sequelize.define` also returns the model
//   console.log(User === sequelize.models.User); // true

