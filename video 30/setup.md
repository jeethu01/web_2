## How to setup Tailwind Css

step 1 : Run the following commands

```
npm install -D tailwindcss
npx tailwindcss init
```
step 2 : update tailwind.config.js file to include this line
```
content: [".*html"]
```
step 3 : create src\input.css to include 
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
step 4 : Run this command in your terminal
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```
step 5 : start your html code by linking the src/output.css