class Menu {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this); // (*)
  }
  save() {
    alert('saving');
  }
  load() {
    alert('loading');
  }
  search() {
    alert('searching');
  }
  onClick(event) {
    let action = event.target.dataset.action;
    if (action) {
      this[action]();
    }
  };
}
let menu = document.querySelector('.menu')
new Menu(menu);


// On commence par créer un objet o pour lequel la fonction f sera
// son constructeur et lui créera deux propriétés en propre
// a et b :
let f = function () {
  this.a = 1;
  this.b = 2;
}
let o = new f(); // {a: 1, b: 2}

// on ajoute des propriétés au prototype de la fonction
// f
f.prototype.b = 3;
f.prototype.c = 4;

// console.log(
//   o.__proto__.__proto__.__proto__
// )

function faireUnTruc() { }
console.log(faireUnTruc.prototype); // Object {...}
// Peu importe comment vous déclarez la fonction.
// une fonction en JavaScript aura toujours une propriété
// prototype par défaut.
var faireUnTruc = function () { };
console.log(faireUnTruc.prototype); // Object {...}

function faireUnTruc() { }
faireUnTruc.prototype.toto = "truc";
var uneInstance = new faireUnTruc();
uneInstance.prop = "une valeur";
console.log("uneInstance.prop: " + uneInstance.prop);
console.log("uneInstance.toto: " + uneInstance.toto);
console.log("faireUnTruc.prop: " + faireUnTruc.prop);
console.log("faireUnTruc.toto: " + faireUnTruc.toto);
console.log("faireUnTruc.prototype.prop: " + faireUnTruc.prototype.prop);
console.log("faireUnTruc.prototype.toto:  " + faireUnTruc.prototype.toto);
console.log({}.__proto__);

function toto() { }
toto.prototype = {
  toto_prop: "toto val"
};
function truc() { }

var proto = new toto;

proto.truc_prop = "truc val";

truc.prototype = proto;

var inst = new truc();

console.log(inst.toto_prop);
console.log(inst.truc_prop);


function toto() { }

toto.prototype = {
  toto_prop: "toto val"
};

function truc() { }
var proto = Object.create(
  toto.prototype
);

proto.truc_prop = "truc val";

truc.prototype = proto;

var inst = new truc();

console.log(inst.toto_prop);
console.log(inst.truc_prop);
const on = {}
on.__proto__ = null
console.log(on.__proto__);
