# Introduction
This is the a quick starter project with scss, partials, and a base structure that I use to quickly build websites.


# Scripts
### Start your website :
``` 
npm run start
```
And then go to `localhost:1234`  

### Prefix your css :
``` 
npm run prefix
```

# Structure
### Base
The `base/` directory contains the files that define the foundations of your site, for example the font and the standards you want to apply throughout your site, such as box-sizing.

### Utils
In `utils/`, you store your variables, functions, mixins and %placeholders for extensions (if you use any).

### Layouts
In `layouts/`, you put your BEM blocks that contain what is reusable, for example a header for large layouts or a footer.

### Components
The `components/` directory is used to store BEM blocks that are more independent, like buttons.

### Pages
The `pages/` directory contains code blocks that apply to a single page only. You use buttons throughout your site, but your home page may have a section and a grid that are not used anywhere else. In other words, pages/ contains rules specific to a single page that will not be reused elsewhere.

### Themes
In `themes/`, you store the theme code, for example a custom style for Christmas or for summer.

### Vendors
The `vendors/` directory stores external stylesheets like Bootstrap or jQuery UI. Basically, it is used for any CSS coming from outside.
