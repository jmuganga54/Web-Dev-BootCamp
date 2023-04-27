## Topic 
On this section we will start learning some Intermediate Javascript concept, this is just the continuation of the previous section.

## Keywords && Notes
## Random Number Generation
```
let n = Math.random() 
```
This `Math.random()` function creates a random number, with 16 decimal places, from `0 to 0.9999999999999999`, it will not  reach to 1.
![Math random](./img/random_generator.png)

If you want to create a random number withing a certain range, for example between 1 - 6, what you are required to do is to allow the function to generate a random number then multiply it with 6 and add 1.
![Random 1-6](./img/range_six.png)

> Challange 
Write a program which will prompt a user to enter two names of love partners, then the program will return the message showing the percentage of their love.

```
//My try
let firstName = prompt('Enter your first Name')
let partnerName = prompt('Enter the name of your partner')

const genLovePercent = ()=> {
  let random = Math.floor(Math.random() * 100) + 1
  return `The love percentage between ${firstName} and ${partnerName} is ${random}%`
  
}

console.log(genLovePercent())

//Expected output: The love percentage between Joseph and Hagari is 95%
```

## Control Statement using IfElse Conditional & Logic
In this section we will learn about `Control flow`, which is the way to control the flow of the code, depending on the current condition. 

For example is train tracker is open, go straight, but if it is closed, use the alternative root.
![Control Flow](./img/control_flow.png)

>Challenge
Improve the code of the previous love challenge, if their love percentage is greater than 70, return the statement saying `Your love score is loveScore%, You love each other like kanye love kanye` else return `Your love score is lovescore%`

```
//My try on this
let firstName = prompt('Enter your first Name')
let partnerName = prompt('Enter the name of your partner')

const genLovePercent = ()=> {
  let loveScore = Math.floor(Math.random() * 100) + 1

  if(loveScore > 70){
   return `The love percentage between ${firstName} and ${partnerName} is ${loveScore}%, you love each other like kanye love kanye`
  }else{
   return `The love percentage between ${firstName} and ${partnerName} is ${loveScore}%`
  }
  
  
}

console.log(genLovePercent())


//Expected output: The love percentage between Peter and Anna is 97%, you love each other like kanye love kanye
```




## Summary