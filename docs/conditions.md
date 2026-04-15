# Conditional Statements in JavaScript

## 1. if Statement

```javascript
if (condition) {
    // code runs if condition is true
}
```

## 2. if...else Statement

```javascript
if (condition) {
    // code if true
} else {
    // code if false
}
```

## 3. if...else if Ladder

```javascript
if (condition1) {
    // code 1
} else if (condition2) {
    // code 2
} else if (condition3) {
    // code 3
} else {
    // default code
}
```

## 4. Ternary Operator

```javascript
condition ? valueIfTrue : valueIfFalse
```

**Example:**
```javascript
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
```

## 5. switch Statement

```javascript
switch (expression) {
    case value1:
        // code 1
        break;
    case value2:
        // code 2
        break;
    default:
        // default code
}
```

**Key Points:**
- Use `break` to stop execution
- `default` runs when no case matches
- Cases use strict equality (===)

## Best Practices

1. Use === instead of == for strict comparison
2. Keep conditions simple and readable
3. Use ternary for simple true/false assignments
4. Use switch when comparing one value to multiple cases
