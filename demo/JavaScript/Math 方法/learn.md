- The Math namespace object contains static properties and methods for mathematical constants and functions.
- Math works with the Number type. It doesn't work with BigInt.



# Properties
## `Math.PI`
- The Math.PI static data property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159
## `Math.SQRT2`
- The Math.SQRT2 static data property represents the square root of 2, approximately 1.414.


# Methods

## `Math.abs()`
- Returns the absolute value of x.
- Math.abs() coerces its parameter to a number.  
  Non-coercible values will become NaN, making Math.abs() also return NaN.
### 參數
`Math.abs(x)`
1. x
   - A number
### 回傳值
- The absolute value of x.  
  If x is negative (including -0), returns -x.  
  Otherwise, returns x.  
  The result is therefore always a positive number or 0.


## `Math.ceil()`
- Returns the smallest integer greater than or equal to x.
- ceil 天花板
### 參數
`Math.ceil(x)`
1. x
   - A number
### 回傳值
- The smallest integer greater than or equal to x  
  ≥ x 的最小整數
  ```javascript
  Math.ceil(7.5) // 8
  Math.ceil(-7.5) // -7
  ```


## `Math.floor()`
- Returns the largest integer less than or equal to x.
### 參數
`Math.floor(x)`
1. x
   - A number
### 回傳值
- The largest integer smaller than or equal to x  
  ≤ x 的最大整數
  ```javascript
  Math.floor(7.5) // 7
  Math.floor(-7.5) // -8
  ```


## `Math.max()`
- Returns the largest of zero or more numbers.
### 參數
`Math.max(value0, value1, /* … ,*/ valueN)`
1. value1, value2, … , valueN
   - Zero or more numbers among which the largest value will be selected and returned.
### 回傳值
- The largest of the given numbers.
- Returns NaN if any of the parameters is or is converted into NaN.
  - 只要有其中一個被比較的值是 `NaN`，或者是被轉換為 `NaN`，則回傳 `NaN`
- Returns -Infinity if no parameters are provided.
  - 如果沒有提供參數，則回傳 `-Infinity`


## `Math.min()`
- Returns the smallest of zero or more numbers.
### 參數
`Math.max(value0, value1, /* … ,*/ valueN)`
1. value1, value2, … , valueN
   - Zero or more numbers among which the lowest value will be selected and returned.
### 回傳值
- The smallest of the given numbers.
- Returns NaN if any of the parameters is or is converted into NaN.
- Returns Infinity if no parameters are provided.
  - 如果沒有提供參數，則回傳 `Infinity`


## `Math.random()`
- The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.
### 參數
- 無
### 回傳值
- A floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).
  - 回傳一個範圍含 0 不含 1 的隨機 floating-point number


## `Math.round()`
- Returns the value of the number x rounded to the nearest integer.
- If the fractional portion(小數部分) of the argument is greater than 0.5, the argument is rounded to the integer with the next higher absolute value.
- If it is less than 0.5, the argument is rounded to the integer with the lower absolute value.
- If the fractional portion is exactly 0.5, the argument is rounded to the next integer in the direction of +∞.
### 參數
`Math.round(x)`
1. x
   - A number
### 回傳值
- The value of x rounded to the nearest integer.
  - 回傳四捨五入後的近似值


## `Math.sign()`
- The Math.sign() static method returns 1 or -1, indicating the sign of the number passed as argument.
### 參數
`Math.sign(x)`
1. x
   - A number
### 回傳值
- A number representing the sign of x:
  1. If x is positive, returns 1.
  2. If x is negative, returns -1.
  3. If x is positive zero, returns 0.
  4. If x is negative zero, returns -0.
  5. Otherwise, returns NaN.


## `Math.pow()`
- Returns base x to the exponent power y (that is, xʸ).
- `Math.pow()` is equivalent to the `**` operator, except Math.pow() only accepts numbers.
- Math.pow(NaN, 0) (and the equivalent NaN ** 0) is the only case where NaN doesn't propagate through mathematical operations — it returns 1 despite the operand being NaN. In addition, the behavior where base is 1 and exponent is non-finite (±Infinity or NaN) is different from IEEE 754, which specifies that the result should be 1, whereas JavaScript returns NaN to preserve backward compatibility with its original behavior.
### 參數
`Math.pow(base, exponent)`
1. base
   - The base number
2. exponent
   - The exponent number
### 回傳值
- base^exponent
- A number representing base taken to the power of exponent. Returns NaN in one of the following cases:
  1. exponent is NaN.
  2. base is NaN and exponent is not 0.
  3. base is ±1 and exponent is ±Infinity.
  4. base < 0 and exponent is not an integer.


## `Math.sqrt()`
- Returns the square root of a number.
- 回傳一個數的平方根
### 參數
`Math.sqrt(x)`
1. x
   - A number greater than or equal to 0.
### 回傳值
- The square root of x, a nonnegative number.
- If x < 0, returns `NaN`.


## `Math.cbrt()`
- Returns the cube root of x.
- 立方根
### 參數
`Math.cbrt(x)`
1. x
   - A number
### 回傳值
- The cube root of x.

