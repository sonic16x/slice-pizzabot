# Pizzabot

## Author

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
