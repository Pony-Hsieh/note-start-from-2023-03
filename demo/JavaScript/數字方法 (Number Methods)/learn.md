# Constructor
- Creates Number objects. When called as a function, it returns primitive values of type Number.


# Properties

## `Number.EPSILON`
- The Number.EPSILON static data property represents the difference between 1 and the smallest floating point number greater than 1.
### 值
- 2⁻⁵², or approximately 2.2204460492503130808472633361816E-16.


## `Number.MAX_SAFE_INTEGER`
- Represents the maximum safe integer in JavaScript (2⁵³ – 1)
- For larger integers, consider using `BigInt`
- "Safe" in this context refers to the ability to represent integers exactly and to compare them correctly. For example, `Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2` will evaluate to true, which is mathematically incorrect.
### 值
- 2⁵³ – 1  
  9,007,199,254,740,991, or ~9 quadrillion


## `Number.MIN_SAFE_INTEGER`
- Represents the minimum safe integer in JavaScript, or -(2⁵³ - 1)
- To represent integers smaller than this, consider using BigInt.
- "Safe" in this context refers to the ability to represent integers exactly and to correctly compare them. For example, `Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2` will evaluate to true, which is mathematically incorrect.
### 值
- -(2⁵³ - 1)  
  -9,007,199,254,740,991, or about -9 quadrillion


## `MAX_SAFE_INTEGER`
## `MAX_VALUE`
## `MIN_VALUE`
## `NaN`
## `NEGATIVE_INFINITY`
## `POSITIVE_INFINITY`



# Methods



## `Number.isFinite()`
- The Number.isFinite() static method determines whether the passed value is a finite number  
  同時符合以下四點，為 true，其餘為 false
  1. is a number
  2. not positive Infinity
  3. not negative Infinity
  4. not NaN
### 參數
`isFinite(value)`
1. value
   - The value to be tested for finiteness
### 回傳值
- boolean
  - true
    - if the given value is a finite number
  - false
    - otherwise
### 參考文章
- [Number.isFinite() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite)


## `Number.isInteger()`
- Determines whether the passed value is an integer
- `5.0000000000000001` only differs from `5` by `1e-16`, which is too small to be represented.  
  (For reference, `Number.EPSILON` stores the distance between 1 and the next representable floating-point number greater than 1, and that is about 2.22e-16.) Therefore, 5.0000000000000001 will be represented with the same encoding as 5, thus making Number.isInteger(5.0000000000000001) return true.
### 參數
`Number.isInteger(value)`
1. value
- The value to be tested for being an integer
### 回傳值
- boolean
  - true
    - if the given value is an integer integer
  - false
    - otherwise
    - If the value is `NaN` or `Infinity`


## `Number.isSafeInteger()`
- Determines whether the provided value is a number that is a safe integer.
- The safe integers consist of all integers from -(2⁵³ - 1) to 2⁵³ - 1, inclusive (±9,007,199,254,740,991).
- A safe integer is an integer that:
  1. can be exactly represented as an IEEE-754 double precision number, and
  2. whose IEEE-754 representation cannot be the result of rounding any other integer to fit the IEEE-754 representation.
### 參數
`Number.isSafeInteger(testValue)`
1. testValue
   - The value to be tested for being a safe integer
### 回傳值
- boolean
  - true
    - if the given value is a safe integer
  - false
    - otherwise
### 參考文章
- [Number.isFinite() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite)

## 待整理方法
Number.isInteger()
Number.isNaN()
Number.isSafeInteger()
Number.parseFloat()
Number.parseInt()
Number.prototype.toExponential()
Number.prototype.toFixed()
Number.prototype.toLocaleString()
Number.prototype.toPrecision()
Number.prototype.toString()
Number.prototype.valueOf()