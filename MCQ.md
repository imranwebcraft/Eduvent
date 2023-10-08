<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

#### Answer: B

<i>Because, here the declared variable name is `greeting` not `greetign`. We know that if we try to access the variable that not defined this will give an error - ReferenceError: greetign is not defined.</i>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
	return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<p>

#### Answer: C

<i>If we concatenate a string type value with a number type value, the number type value is implicitly converted to a string, and they behave like concatenating two strings.</i>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

#### Answer: A

<i>`food` is an array, and `info` is an object. We assign the object property `favoriteFood` a value by accessing the `food` array with an index. However, this assignment doesn't change or affect the `food` array because we are not using any array method to modify the array.</i>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
	return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

#### Answer: B

<i>There are situations when we get `undefined` as a result. One of them is when we declare a function with a parameter but call the function without passing an argument. In this situation, when we try to access the parameter value, we get `undefined`.</i>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach(num => {
	if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

#### Answer: C

<i>We are trying to console the result of the `count` variable. Here is an array `nums`, and we are using the array method `forEach`. This method loops over every array element, and check truthy value in the given condition inside the `if` statement. We know 0 is a falsy value, the condition is false for the first iteration. For the rest of the iterations, where the element is a positive number, the condition becomes true, and the code inside the `if` block is executed. However, we are not storing the sum value anywhere. In every loop, the `count` variable's value remains 0. At the last iteration, it encounters the value 3, which is a positive number, and the calculation becomes 0 + 3 = 3. So, the answer is 3.

--from second itteration
0 + 1 = 1,
0 + 2 = 2,
0 + 3 = 3

</i>
