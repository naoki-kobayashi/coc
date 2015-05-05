var Mediator = (function(){
  function Mediator(){
    this.reactor_list = [];
  }

  Mediator.prototype.addReactor = function(reactor){
    this.reactor_list = reactor;
  }

  Mediator.prototype.search = function(){
    for(var i in this.reactor_list){
      console.log(this.reactor_list[i]);
    }
//    this.reactor_list.forEach(function(element, index, array){
//      console.log(element);
//    });
//    for each(var reactor in this.reactor_list){
//      console.log(reactor);
//    }
  }
  return Mediator;
})();
/*
class Mediator{
  constructor(){
    this.reactor_list = [];
  }

  addReactor(reactor){
    this.reactor_list.push(reactor);
  }

  serach(){
    for(var reactor in this.reactor_list){
      console.log(reactor);
    }
  }
}
export default Mediator;
*/
