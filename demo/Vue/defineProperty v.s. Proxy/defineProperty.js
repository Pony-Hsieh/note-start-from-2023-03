// Object.defineProperty 怎麼用？

/**
 * Object.defineProperty
 * 
 * 怎麼用？
 * 
 * 有甚麼缺點？
 * 有辦法做 workaround 嗎？
 * - 無法監測到 array 和 object 的變化
 * 不能检测数组和对象的变化
 * 
 */

const demoObj = {};

/** defineProperty
 * Adds a property to an object, or modifies attributes of an existing property.
 * @param obj — Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.
 * 要定義屬性的物件。
 * 
 * @param prop — The property name.
 * 要被定義或修改的屬性名字。
 * 
 * @param attributes — Descriptor for the property. It can be for a data property or an accessor property.
 * 要定義或修改物件敘述內容。
 * 
 * @return - 被定義完或修改完屬性的物件。
 */
Object.defineProperty(demoObj, 'property1', {
  value: 42,
  writable: false
});

demoObj.property1 = 77;
// Throws an error in strict mode

console.log(demoObj.property1);
// Expected output: 42

// 如果我們試圖在同一個描述符中同時提供 get 和value，則會出現錯誤：



const person = {};
Object.defineProperty(person, 'name', {
  // writable: true || false,
  // configurable: true || false,
  // enumerable: true || false,
  value: 'Pony',
});
console.log("person", person);
person.name = "aaa";
console.log("person", person);

const demo2 = {};
demo2.name = "Pony";
demo2.name = "aaa";
console.log("demo2", demo2);
Object.getOwnPropertyDescriptor(demo2, 'name');
console.log(Object.getOwnPropertyDescriptor(demo2, 'name'));
/**
 * 用方法 2 宣告的值，預設都會是 true
 * 但如果用 defineProperty 宣告的值錢，預設都會是 false
 */
// 用方法 2 宣告的值，預設都會是 true，204bj6
