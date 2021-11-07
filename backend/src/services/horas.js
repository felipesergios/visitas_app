function getHoras(){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return time
}
const horas = getHoras()
module.exports = horas