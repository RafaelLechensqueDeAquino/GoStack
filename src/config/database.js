module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'root',
  database: 'GoBarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
