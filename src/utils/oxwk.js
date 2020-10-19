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
  static install(vue) {
    console.log(`!!-!!-!! 010 -> :::::::::::::: install() {200731220103}:${Date.now()}`) // del+
    vue.oxwk = new Oxwk()
  }

  countAllSet(count) {
    if (count) {
      this.countAll = count
    }
  }

  countMarkedGet() {
    return this.marked.length
  }

  // следующая позиция, случайное число в диапазоне 1..this.countAll, исключая this.marked
  next() {
    console.log(`!!-!!-!! 010 -> :::::::::::::: next() {200801170624}:${Date.now()}`) // del+
    console.log('!!-!!-!! 020 this.countAll {200801170633}\n', this.countAll) // del+
    if (this.countAll > 0 && (this.marked.length < this.countAll)) {
      let rnd = 0;
      do {
        rnd = random(1, this.countAll)
      } while (this.isMarked(rnd))
      this.marked.push(rnd)
      console.log('!!-!!-!! this.marked {200801195047}\n', this.marked) // del+
      return rnd
    }
    return 0
  }


  isMarked(pos) {
    return this.marked.indexOf(pos) !== -1
  }

  mark(id) {

  }

  unmark(id) {

  }

  unmarkAll() {

  }

  reset() {
    this.marked = []
  }
}
