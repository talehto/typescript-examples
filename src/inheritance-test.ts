interface FirstName {
  first: string;
}

interface LastName {
  last: string;
}

interface WholeName extends FirstName,LastName {
}

class WholeNameImpl implements WholeName {
  first: string;
  last: string;

  constructor(){
    this.first = "Tarmo"
    this.last = "Lehto"
  }

}
let test = new WholeNameImpl()
console.log(test.first + " " + test.last)