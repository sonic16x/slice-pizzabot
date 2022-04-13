# Pizzabot

## Author

Sergei Cherebedov

## Description

PizzaBot is a robot that delivers pizza. It takes particular instructions on how to deliver pizzas to all the houses in a neighborhood.

How it Works:

It uses the following instructions:

N: Move north
S: Move south
E: Move east
W: Move west
D: Drop pizza

Pizzabot always starts at the origin point, (0, 0).
As with a Cartesian plane, this point lies at the most southwesterly point of the grid.
For example Pizzabot receives the following input string: 5x5 (1, 3) (4, 4).
It means that grid has 5x5 size, (1, 3) (4, 4) are the points to deliver pizza.
The result string will be ENNNDEEEND.
In other words: move east once and north thrice; drop a pizza; move east thrice and north once; drop a final pizza.

Sergei Cherebedov

## Environment

```sh
node -v
## v17.2.0
npm -v
## 8.1.4
```

## Build and run

Execute commands
```sh
npm install
npm start
```

Open page http://localhost:3000/ and follow instructions

## Algorithm

1. Get targets array from params and check that this targets inside field size.
2. Function `getOptimalPath` in `getPath` file. Start from [0, 0] and find nearest target, then do it again from founded target (finding nearest target, but exclude processed targets). 
3. Show path in text and in image.

## Testing

For test run npm test, test files you can find in src like a `*.test.ts`. I use jest for it.
