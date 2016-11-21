# API

## Table of contents
- [Native](#native)
 - [Date.today()](#datetoday)
 - [Date.prototype.dateEquals(targetDate)](#dateprototypedateequalstargetdate)
 - [String.prototype.unicodeCharAt(index)](#stringprototypeunicodecharatindex)
 - [String.prototype.reverse()](#stringprototypereverse)
 - [String.prototype.contains(searchString)](#stringprototypereverse)
- [Global](#global)
 - [log(obj1 [, obj2, ..., objN])](#logobj1--obj2--objn)
 - [now()](#now)
 - [today()](#today)
 - [repeat(n, fn)](#repeatn-fn)
 - [sqrt(number)](#sqrtnumber)
 - [sq(number)](#sqnumber)
 - [pow(number, n)](#pownumber-n)

## Native

### Date.today()
Return: `Date`

Gets a today date without time part.

### Date.prototype.dateEquals(targetDate)
Return: `Boolean`

Test equivalent between two date without time part.

#### targetDate
Type: `Date`

Target date to test equivalent with this date.

### String.prototype.unicodeCharAt(index)
Return: `String`

Gets a character (with unicode support) at specific index.

```javascript
let numbers = '𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡';
console.log(numbers.unicodeCharAt(5)); // 𝟝
```

#### index
Type: `Number`

An index between 0 and string length - 1.

### String.prototype.reverse()
Return: `String`

Reverse this string.

```javascript
let numbers = '𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡';
console.log(numbers.reverse()); // 𝟡𝟠𝟟𝟞𝟝𝟜𝟛𝟚𝟙𝟘
```

### String.prototype.contains(searchString)
Return: `Boolean`

Determine whether one string may be found within this string.

```javascript
let str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.contains('brown fox')); // true
console.log(str.contains('yellow dog')); // false
```
#### searchString
Type: `String`

A string to be searched for within this string.

---

## Global

### log(obj1 [, obj2, ..., objN])

Alias of [`console.log()`](https://developer.mozilla.org/en-US/docs/Web/API/Console/log).

### now()
Return: `Date`

Gets a current date and time. Shorthand of `new Date()`.

### today()
Return: `Date`

Gets a today date without time part. Same as `Date.today()`

### repeat(n, fn)

Repeat executing a function for `n` times.

#### n
Type: `Number`

Repeating times.

#### fn
Type: `Function`

A function to repeat executing.

### sqrt(number)
Return: `Number`

Alias of [`Math.sqrt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt).

#### number
Type: `Number`

A number.

### sq(number)
Return: `Number`

Returns the [square](https://en.wikipedia.org/wiki/Square_%28algebra%29) of a number.

#### number
Type: `Number`

The base number to be squared.

### pow(number, n)
Return: `Number`

Alias of [`Math.pow()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow).

#### number
Type: `Number`

The base number.

#### n
Type: `Number`

The exponent used to raise the base.
