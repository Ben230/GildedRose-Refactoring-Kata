# Gilded Rose

## Set-up
npm uninstall jasmine
npm install jasmine-node --save-dev
npm install istanbul --save-dev
Make sure scripts looks like
```
"scripts": {
  "test": "jasmine-node spec",
  "coverage": "istanbul cover jasmine-node spec"
},
```
