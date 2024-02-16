# Creating project

### Step 1: Initialize Your Project
Create a new directory for your project and initialize a new Node.js project:

```bash
mkdir my-hotel-management-app
cd my-hotel-management-app
npm init -y
```

### Step 2: Install Required Packages

You can change any package version at your own risks specially when you're usiing webpack!

1. **Webpack**: A module bundler that takes modules with dependencies and generates static assets representing those modules.
2. **Webpack CLI**: Command-line interface for Webpack.
3. **Webpack Dev Server**: Development server that provides live reloading and other helpful features for development.
4. **Babel Loader**: Allows transpiling JavaScript files using Babel and Webpack.
5. **@babel/core**: Core functionality of Babel compiler.
6. **@babel/preset-env**: Babel preset for compiling modern JavaScript down to a version of JavaScript that is compatible with specific browser versions.
7. **@babel/preset-react**: Babel preset for transforming JSX syntax into JavaScript.
8. **Style Loader**: Adds CSS to the DOM by injecting a `<style>` tag.
9. **CSS Loader**: Loads CSS files with resolved imports and returns CSS code.
10. **Sass Loader**: Loads and compiles Sass/SCSS files.
11. **Node Sass**: Allows Node.js to compile Sass to CSS.
12. **Styled Components**: A CSS-in-JS library for styling React components.
13. **@supabase/supabase-js**: A JavaScript SDK for supabase,uses the cross-fetch library to make HTTP requests, but an alternative fetch implementation can be provided as an option.
15. **React Query**: Hooks library for managing, caching, synchronizing, and updating server state in React applications.
16. **React Toastify**: Provides toast notifications for React applications.
17. **React Icons**: Library providing popular icon sets as React components.
18. **Recharts**: A composable charting library built on React components.
19. **Date-fns**: A modern JavaScript date utility library.
20. **Webpack.config.js**: Configuration file for Webpack, defining how to process and bundle application assets.
21. **.babelrc**: Configuration file for Babel, defining presets and plugins.
22. **index.js**: Entry point of the React application.
23. **App.js**: Main component of the React application.
24. **Public directory**: Contains static assets like HTML file(s).

```bash
npm install react react-dom react-router-dom@6 style-loader css-loader sass-loader node-sass styled-components @supabase/supabase-js react-query react-toastify react-icons recharts date-fns

```

### Step 3: Set Up Babel
Install Babel and necessary presets to transpile JSX and modern JavaScript:

```bash
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev
```

Create a `.babelrc` file in the root directory of your project and configure Babel presets:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

### Step 4: Install Webpack
Install Webpack and Webpack CLI:

```bash
npm install webpack webpack-cli webpack-dev-server --save-dev
```

### Step 5: Set Up Webpack Configuration

Create a `webpack.config.js` file in the root directory of your project and configure Webpack:

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
```

### Step 6: Set Up HTML File
Create an `index.html` file in the `public` directory of your project:

```bash
mkdir -p ./public && touch ./public/index.html
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hotel Management App</title>
</head>
<body>
  <div id="root"></div>
  <script src="bundle.js"></script>
</body>
</html>
```

### Step 7: Create Your React Components
Create your React components in the `src` directory with `index.js`.

### Step 8: Setp server

1. Open your `package.json` file.

2. In the `"scripts"` section, add a `"dev"` script to run the webpack development server. It should look something like this:

```json
"scripts": {
  "dev": "webpack serve --mode development --open",
  "build": "webpack --mode production"
}
```


### Step 9: Run Your Application

Start the development server:

```bash
npm run dev
```

### Step 10: Build for Production
When you're ready to deploy your app, build it for production: `npm run build` is typically used when you're ready to create a production build of your application for deployment. 
It generates optimized and minified files suitable for deployment to a production server.
```bash
npm run build
```

### Connecting app to Supabase

Below is a step-by-step guide to help you through the process:

1. **Create a Supabase Account**:
   - Go to the [Supabase website](https://supabase.io/) and sign up for an account if you haven't already.

2. **Create a new Supabase Project**:
   - Once logged in, create a new project from the dashboard.
   - Note down your project URL and API key.

3. **Set up your database**:
   - Within your Supabase project, create a new database or use an existing one.
   - Define your tables and schemas according to your application requirements.

4. **Install Supabase Client in your React App**:
   - Navigate to your React app directory.
   - Install the Supabase JavaScript client library using npm or yarn:
     ```bash
     npm install @supabase/supabase-js
     ```
     or
     ```bash
     yarn add @supabase/supabase-js
     ```

5. **Initialize Supabase Client**:
   - In your React app, initialize the Supabase client with your Supabase project URL and API key. You can do this in your main application file or wherever it's appropriate:
     ```javascript
     import { createClient } from '@supabase/supabase-js';

     const supabaseUrl = 'YOUR_SUPABASE_URL';
     const supabaseKey = 'YOUR_SUPABASE_PUBLIC_KEY';
     
     const supabase = createClient(supabaseUrl, supabaseKey);
     ```

6. **Perform CRUD Operations**:
   - Now you can use the `supabase` client to perform various CRUD operations such as `insert`, `select`, `update`, and `delete` on your Supabase database from your React components.

7. **Example Usage**:
   - Here's a simple example of how you might use Supabase in a React component to fetch data:
     ```javascript
     import React, { useState, useEffect } from 'react';

     function MyComponent() {
       const [data, setData] = useState([]);

       useEffect(() => {
         async function fetchData() {
           const { data, error } = await supabase
             .from('my_table')
             .select('*');
           
           if (error) console.error('Error fetching data:', error);
           else setData(data);
         }

         fetchData();
       }, []);

       return (
         <div>
           {data.map(item => (
             <div key={item.id}>{item.name}</div>
           ))}
         </div>
       );
     }

     export default MyComponent;
     ```

8. **Handle Authentication and Authorization** (Optional):
   - If your application requires authentication and authorization, Supabase provides built-in authentication features. You can refer to the Supabase documentation for details on how to implement authentication with React.

9. **Secure your Supabase API Key**:
   - Make sure not to expose your Supabase API key directly in your frontend code, as it could be accessed by malicious users. Consider using environment variables or securely storing your API key.

By following these steps, you should be able to connect your React app to Supabase and start building powerful applications with a real-time database backend.