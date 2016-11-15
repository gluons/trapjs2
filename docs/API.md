# API

## Native

### Date.today()
Return: `Date`

Get a today date without time part.

### Date.prototype.dateEquals(targetDate)
Return: `Boolean`

Test equivalent between two date without time part.

#### targetDate
Type: `Date`

Target date to test equivalent with this date.

### String.prototype.unicodeCharAt(index)
Return: `String`

Get a character (with unicode support) at specific index.

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
Type: `Boolean`

Determine whether one string may be found within this string.

```javascript
let str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.contains('brown fox')); // true
console.log(str.contains('yellow dog')); // false
```
#### searchString
Type: `String`

A string to be searched for within this string.
