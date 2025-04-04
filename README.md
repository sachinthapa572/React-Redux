# Redux State Management Application

This project demonstrates the use of Redux for state management in a React application. It includes features such as a product store, cart functionality, and a to-do list, showcasing both synchronous and asynchronous state management techniques.

## Features

- **Product Store**: Fetch and display products from an API with search functionality.
- **Cart Management**: Add, remove, and manage product quantities in a shopping cart.
- **To-Do List**: Add, update, and remove tasks in the ToDoList component.
- **Authentication**: Includes Sign In and Sign Up components.
- **Error Handling**: Graceful error handling for API calls.

## Technologies Used

- React
- Redux Toolkit
- React Router
- Tailwind CSS
- Axios
- React Toastify

## Project Structure

```
src/
  components/    # Reusable UI components
  pages/         # Page-level components
  redux/         # Redux slices and store configuration
  App.jsx        # Main application component
  main.jsx       # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd redux
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

- Development Mode:
  ```bash
  npm run dev
  ```
- Build for Production:
  ```bash
  npm run build
  ```
- Preview Production Build:
  ```bash
  npm run preview
  ```

## Folder Details

- **components**: Contains reusable components like Navbar, ProductCard, etc.
- **pages**: Includes page-level components like Home, Cart, and ToDoList.
- **redux**: Contains Redux slices and store configuration.
- **App.jsx**: Main application component with routing setup.
- **main.jsx**: Entry point of the application.

## License

This project is licensed under the MIT License.
