module.exports = function(){
  Array.prototype.removeByValue = function(search){
    let index = this.indexOf(search);
    if(index !== -1){
      this.splice(index, 1);
    }
  }
}