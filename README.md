#### Flash of Styled Content, because server side rendering never truly went out of style.

An MVCish framework that renders React views on the server and client.

Good for rapid prototyping.  Not full-featured or documented well enough for much else at this point.

##### A Basic Page
A basic page consists of a default shell (header and footer) and a main content area.

##### Routes with the default controller
The default controller relies on a convention that maps views to routes using the filesystem location of the view file.  To create a new page just create directories under apps/routes and place a {name}.view.jsx file in that directory where {name} corresponds to the name of the leaf directory.  So, for instance, if you want to serve a page at /pages/new-page, then create the file app/routes/pages/new-page/new-page.view.jsx.  If the default export from this file is a react component named MainContentComponent, your server will serve a page at localhost:8080/pages/new-page that puts your MainContentComponent inside of a default shell.

##### Model
If you want some data for your view, all you have to do is create a file in your view's directory named {name}.model.js that default exports a Promise.  If this file exists the server will wait to render your view until the promise resolves and your page will render with the results as props.

##### Styles
The project is setup with webpack and sass/css-loader so you can import your style directly in your view and they will be properly bundled up and included on the page.
