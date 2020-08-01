// [oxwk]

import { random } from 'lodash';

export class Oxwk {

  constructor() {
    // позиции уже отбиравшихся элементов
    this.marked = []
    // общее количество позиций
    this.countAll = 0
  }

  // plugin
  static install(Vue){
    console.log(`!!-!!-!! -> :::::::::::::: install() {200731220103}:${Date.now()}`) // del+
    Vue.oxwk = new Oxwk()
  }

  countAllSet(count){
    this.countAll = count
  }

  // следующая позиция, случайное число в диапазоне 1..this.countAll, исключая this.marked
  next() {
    if(this.countAll > 0) {
      return random(1, this.countAll)
    }
    return 0
  }
  mark(id) {

  }
  unmark(id){

  }
  unmarkAll(){

  }

  reset() {
    this.marked = []
  }
}
