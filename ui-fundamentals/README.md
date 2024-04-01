# UI Fundamentals

**Status:** in progress...
**deployment:** [elegantui.netlify.app](https://elegantwebui.netlify.app)
This project aimed to create reusable UI components using React and styled-components. It includes a variety of components such as buttons, accordions, select dropdowns, spinners, and more. The components are designed to be highly customizable and support dark mode.

<!-- [![Netlify deploy Status](https://api.netlify.com/api/v1/badges/bd99dd9b-1e10-4db3-a191-a5450077418e/deploy-status)](https://app.netlify.com/sites/profound-sprite-2b2255/deploys) -->

![Preview: ](./src/assets/preview.gif)

## Features

- Reusable UI components
- Built with React and styled-components
- Support for dark mode
- Easy to customize

## Testing

I use Jest and Enzyme for unit testing our components. Jest is a delightful JavaScript testing framework with a focus on simplicity, while Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse React components' output.

To run the unit tests, simply execute the following command:

```
npm test
```

This command will trigger Jest to run all the tests defined in the `__tests__` directory or any files with a `.test.js` extension. Tests ensure that each component behaves as expected and meets the defined requirements.

## Continuous Integration and Deployment (CI/CD)

For continuous integration and deployment (CI/CD), we utilize GitHub Actions. GitHub Actions automatically triggers workflows defined in `.github/workflows` directory on every push or pull request to the repository. Our CI workflow runs unit tests to ensure code quality and reliability before merging changes into the main branch. Deployment workflows are configured to automatically deploy the project to our hosting platform (mention your hosting platform) after successful testing. This ensures that our project is always up-to-date and running the latest version in production. For more details, please refer to the workflows defined in the `.github/workflows` directory.

### Components props with descriptions

Here's the updated table with the added `Table` component, sorted alphabetically:

| Component       | Props           | Descriptions                                                                                   |
|-----------------|-----------------|------------------------------------------------------------------------------------------------|
| Accordian       | `title`<br>`subtitle`<br>`disableGutters`<br>`children` | Displays an accordion component with a title and optional subtitle.                     |
| AppGridContainer| -               | A container component that arranges its children in a grid layout.                             |
| Button          | `variant`<br>`size`<br>`color`<br>`uppercase` | Displays a button with customizable variants, sizes, and colors.                           |
| ButtonsGroup    | `children`      | Groups multiple buttons together.                                                              |
| Card            | `children`<br>`className` | A card component that displays content within a bordered container.                    |
| CardActions     | `children`      | Displays actions (e.g., buttons) at the bottom of the card.                                    |
| CardContent     | `children`<br>`className` | Displays content within the card body.                                                    |
| CardHeader      | `title`<br>`subheader`<br>`className` | Displays a header title for the card.                                                    |
| CardMedia       | `image`<br>`title`<br>`className` | Displays media content (e.g., images) within the card.                                  |
| DataGrid        | `columns`<br>`rows` | Component for displaying data in a grid format with customizable columns and rows.      |
| FileUpload      | `accept`<br>`maxFileSize`<br>`onChange`<br>`disabled` | Component for uploading files with accept type, maximum file size, and change handler. |
| GlobalStyles    | -               | Applies global styles to the application.                                                      |
| Navbar          | `logo`<br>`title`<br>`children` | Displays a navigation bar with a logo, title, and optional dark mode toggle.            |
| Select          | `options`<br>`width`<br>`onChange` | Displays a select dropdown component with customizable options.                    |
| Spinner         | `type`<br>`size`<br>`color` | Displays a spinner component with customizable size and color.                          |
| Table           | `headers`<br>`data` | Component for rendering a table with headers and data.                                     |
| Typography      | `variant`<br>`className` | Displays text with different variants.                                                   |
