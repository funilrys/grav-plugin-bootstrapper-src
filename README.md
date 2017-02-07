Welcome to **grav-plugin-bootstrapper-src**.



-----


* This repository is there to help you customize and generate bootstrap files if you use the wonderful **[Grav CMS](https://getgrav.org)** with the [**Bootstraper Plugin**](https://github.com/getgrav/grav-plugin-bootstrapper).

* This repository depends on [**Bootstraper Plugin**](https://github.com/getgrav/grav-plugin-bootstrapper) so please **be sure you have it and its own dependencies installed.**


-----
# Before anything

Be sure to have the following installed depending of what you want to use.

## SASS 
* [Node.JS](https://nodejs.org/)
* [Bower](https://bower.io/) => `npm install -g bower`

## LESS
* [Node.JS](https://nodejs.org/download/)
* `grunt-cli` ==> `npm install -g grunt-cli`

-----




# Step by Step
Let's have a look of what you have to do !
## Create `src` forlder
To avoid error with update of the [**Grav Bootstraper Plugin**](https://github.com/getgrav/grav-plugin-bootstrapper), I recommend you to create a directory named `src` under the [**Grav Bootstraper Plugin**](https://github.com/getgrav/grav-plugin-bootstrapper) plugin directory. We're gonna  put all the files we need in those new directory.

*If you're on linux you can do the following to create a new directory under the plugin directory assuming we are in the Grav root directery.*

```sh
mkdir user/plugins/bootstrapper/src
```

You should have the following

```
bootstrapper/
├── css/
│   ├── bootstrap.css
│   ├── bootstrap.min.css
│   ├── bootstrap-theme.css
│   └── bootstrap-theme.min.css
├── js/
│   ├── bootstrap.js
│   └── bootstrap.min.js
└── fonts/
│   ├── glyphicons-halflings-regular.eot
│   ├── glyphicons-halflings-regular.svg
│   ├── glyphicons-halflings-regular.ttf
│   └── glyphicons-halflings-regular.woff
│   └── glyphicons-halflings-regular.woff2
└── src/ (created folder)
│    └── content of this repository
├── CHANGELOG.md/
├── LICENCE
├── README.md
├── blueprints.yaml
├── bootstrapper.php
├── bootstrapper.yaml
└── language.yaml
```

## Clone this repository under `src`

*Assuming we're in the `user/plugins/bootstrapper/` directory use the following to clone this repository.*
```
git clone https://github.com/funilrys/grav-plugin-bootstrapper-src.git src/
```

## Edit bootstrap SASS files and Generate `.css`

Please follow [the wiki](https://github.com/funilrys/grav-plugin-bootstrapper-src/wiki/SASS).



## Edit bootstrap LESS files and Generate `.css`

Please follow [the wiki](https://github.com/funilrys/grav-plugin-bootstrapper-src/wiki/LESS).


-----

# Licence
MIT License

Copyright (c) 2017 Nissar Chababy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.