const target = {};
const handler = {
  set: (target, p, receiver) => {
    console.log("target", target);
    console.log("p", p);
    console.log("receiver", receiver);
    target[p] = receiver * 2;
  },
  get: (target, p) => {
    return target[p] * 2;
  }
};

const p = new Proxy(target, handler);
p.x = 1;
console.log(p.x);