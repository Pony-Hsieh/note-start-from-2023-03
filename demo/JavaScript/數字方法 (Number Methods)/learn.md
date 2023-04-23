# Constructor



# Properties

## `EPSILON`
## `MAX_SAFE_INTEGER`
## `MAX_SAFE_INTEGER`
## `MAX_VALUE`
## `MIN_SAFE_INTEGER`
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