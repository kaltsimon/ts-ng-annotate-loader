# Typescript ngAnnotate loader
This project is a wrapper around [gulp-typescript-angular](https://github.com/takeshi/gulp-typescript-angular) to make it available as a Webpack loader.

## Usage
See the original project's readme file for instructions on how to structure your code and available options.

In your webpack config, specify the following rule for your TypeScript files:

```js
{
  test: /\.ts$/,
  use: [
    {
      loader: 'ts-ng-annotate-loader',
      options: { // Optional
        firstLowerCase: true,
        // Please note that if you specify any patterns, all default patterns are ignored, so you need to re-define them if you want them
      }
    },
    'ts-loader'
  ]
}
```
