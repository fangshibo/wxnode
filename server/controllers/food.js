const { mysql: config } = require('../config')


const DB = require('knex')({
    client: 'mysql',
    connection: {
        host: config.host,
        port: config.port,
        user: config.user,
        password: config.pass,
        database: config.db,
        charset: config.char,
        multipleStatements: true
    }
})

module.exports = async (ctx, next) => {

    // let request =ctx.request;
    // let a =  JSON.parse(request.query.aa);

    // let b = a.food;
    // let c=a.cals;
    // let d=a.price;
    // let e=a.img;

    // // return  DB('food').insert({
    // //     b,c,d,e
    // // })


    // ctx.body={
    //     b,c,d,e

    // }
  const content = fs.readFileSync(INIT_DB_FILE, 'utf8')

console.log('开始执行 SQL 文件...')

// 执行 .sql 文件内容
DB.raw('insert into "food" ("food") values ('Slaughterhouse Five') ');



}


