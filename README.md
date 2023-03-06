# pablorgarcia.github.io
_My personal website. A simple presentation card._

![License MIT](https://camo.githubusercontent.com/890acbdcb87868b382af9a4b1fac507b9659d9bf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d626c75652e737667)

[pablorgarcia.github.io](https://pablorgarcia.github.io)


## Created with HTML5, CSS3, Vanilla JavaScript and 💛

![Screenshot](public/images/readme/screenshot.png)

### Features

- Loads as fast as possible.
- Great coverage rate in the use of resources.
- Responsive web design, mobile first.
- All the content is flexible to scale all the content of the website just change one CSS variable, the body font size `--font-size-base`.
- The font size change depending on the space it has available, it will be bigger when it has more space, and on the contrary, it will be smaller when less space is available.
- On `<address>` is calculated by CSS the browser height to always display it in full screen on all devices.
- The layout styles changes depending on the hour of the day that is accessed. From the 8h until the 20h is rendered `at-day` class on body tag, for the other hours is rendered `at-night` class.
- To manage both layouts are using CSS native variables, `var(some-property)`, in the same way as SCSS or SASS but with pure CSS3.
- All contents that have `title` attribute will generate a pop up with the text attribute to show more information about, if you want to change this info only need to modify the `title` attribute on HTML.
- The tag name from the links are used to analyze traffic with google analytics.
- SEO optimized.


### Performance

Google page speed test results:

[developers.google.com/pagespeed/pablorgarcia.github.io](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fpablorgarcia.github.io&tab=mobile)
- 100% Mobile
- 100% Desktop

Average of Network results:
- 11 request
- 61.3 KB transferred
- 107 KB resources
- Finish: 191 ms
- DOMContentLoaded: 60 ms
- Load: 180 ms


### Run task [optional]
This website using [Gulp.js](https://gulpjs.com/) to manage the run task like minify the JS and the CSS files. The dependencies that are using on the `package.json`:

```
"devDependencies": {
  "gulp": "^4.0.0",
  "gulp-minify": "^3.1.0",
  "gulp-clean-css": "^4.0.0",
  "gulp-rename": "^1.4.0"
}
```

In the App folder are the development files to work. Gulp will work the App folder and publish them minified in the Public folder. `index.html` calls these public files to show only minified files.

Run `gulp` command in your project directory.

If you need install it first, this is a [Gulp quick Start](https://gulpjs.com/docs/en/getting-started/quick-start).

Check the `gulpfile.js` file on root to check the task configurated for this project.


### Hey! fork it if you want

If you want to have your own site version, this is MIT licensed. Feel free to fork it and go ahead! 🙂

Cheers! 
