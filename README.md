Creating a full-fledged contact management app with charts and maps in ReactJS, TypeScript, TailwindCSS, React Router v6, and React Query is a complex task that requires significant code and setup. I can provide you with a high-level outline of how you can approach this project, along with code snippets for different parts of the app. However, due to the complexity of the project, I won't be able to provide a complete working solution here. I recommend breaking down the project into smaller tasks and working on each one step by step.

Here's a high-level outline of the steps you can follow:

### Step 1: Setup the Project

1. Create a new React app with TypeScript using Create React App:

   ```bash
   npx create-react-app contact-management-app --template typescript
   ```

2. Set up React Router v6 for navigation.

3. Install React Query for API data management:

   ```bash
   npm install react-query
   ```

4. Install TailwindCSS for styling:

   ```bash
   npm install tailwindcss
   ```

### Step 2: Create Components

Create the following components for your app:

- `ContactForm.tsx`: A form for adding new contacts.
- `ContactList.tsx`: Display a list of added contacts.
- `LineGraph.tsx`: Dashboard component for displaying charts.
- `MapComponent.tsx`: Dashboard component for displaying maps.

### Step 3: Set Up Redux for Contact Data

Set up Redux for managing contact data. Create actions and reducers for adding, editing, and deleting contacts. You can use the Redux Toolkit for simplifying Redux setup.

### Step 4: Fetch Data from APIs

Use React Query to fetch data from the following APIs:

- World-wide COVID-19 data: `https://disease.sh/v3/covid-19/all`
- Country-specific COVID-19 data: `https://disease.sh/v3/covid-19/countries`
- Graph data for COVID-19 cases with date: `https://disease.sh/v3/covid-19/historical/all?lastdays=all`

You can create custom React Query hooks for each API endpoint.

### Step 5: Create Charts and Maps

For the Charts and Maps section, you can use popular libraries like Chart.js for the line graph and React-Leaflet for the map component. Populate the charts and maps with the data fetched from the APIs.

### Step 6: Styling

Use TailwindCSS to style your app. Create responsive designs that look good on both desktop and mobile devices.

### Step 7: Routing

Set up routing using React Router v6 to navigate between different sections of your app.

### Step 8: Documentation

Create a README.md file in your project's root directory with the following information:

- How to install and run the app.
- Information on the API endpoints used.
- Any specific setup or configuration steps.
- Dependencies and how to install them.

### Step 9: Deployment

Deploy your app to a hosting service like Vercel, GitHub Pages, or Heroku. Provide instructions on how to access the deployed app.

### Step 10: Testing and Refinement

Test your app thoroughly and make any necessary refinements to improve functionality and user experience.

Please note that implementing each of these steps involves writing a significant amount of code and configuring various libraries and components. I recommend breaking down the project into smaller tasks, working on them incrementally, and referring to the documentation and documentation of the libraries you're using for detailed implementation.


### ScreenShot of Web-App
![Covid](https://github.com/Ashu6200/Covid-Tracker/assets/109691178/c3dedcc3-3b8a-4ce8-9c22-e251e68159d8)
![Chart](https://github.com/Ashu6200/Covid-Tracker/assets/109691178/5e768b7b-f45c-4276-b845-581fda77b076)


