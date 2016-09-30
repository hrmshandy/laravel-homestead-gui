# Laravel Homestead GUI

> This app will run provide a GUI wrapper for Laravel Homestead development environments.  
> Please note that it only works if you've Homestead already installed.   
> If not, check out the docs at [Laravel Homestead](https://laravel.com/docs/5.3/homestead).


### Disclaimer
Please be aware that this app is under active development.  
If you find any issues please report them on Github.

**Important:** This app interacts with your filesystem, shell and
development environment. Please note that **I'm not responsible for any
damages or harm** caused by this app. **Use it on your own risk!**

You should consider to create a backup of your `homestead.yaml` file. The  app will reformat your homestead configuration due to yaml parsing.   
Currently comments are not supported and will be stipped out after the configuration has been updated through the app.

Please report any issues on Github. Contributions are welcome. 

### Features
#### Change configuration
It is possible to change the configuration, for every item in you `homestead.yaml` file. You can edit as many items as you like.  

When you have finished editing you can save the configuration directly onto your filesystem. 

#### Provisioning
After you saved your configuration you can directly provision you vagrant box. A console window will show you the same output as you would in your terminal.

#### Machine status
A indicator on the top right will show the current machine status on startup.  
* Red Dot == poweroff (vagrant halt)
* Yellow Dot == saved (vagrant suspend)
* Green Dot == running (vagrant up/vagrant resume)

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron app for production
npm run build

# lint all JS/Vue component files in `app/src`
npm run lint

# run webpack in production
npm run pack
```
More information can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/docs/npm_scripts.html).

---

This project was generated from [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about this project can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
