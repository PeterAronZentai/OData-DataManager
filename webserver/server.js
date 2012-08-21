/**
 * Created with JetBrains WebStorm.
 * User: peterzentai
 * Date: 8/21/12
 * Time: 2:19 PM
 * To change this template use File | Settings | File Templates.
 */


var c = require('connect');
var app = c();
app.use("/",c['static']('../'));
app.listen(80);