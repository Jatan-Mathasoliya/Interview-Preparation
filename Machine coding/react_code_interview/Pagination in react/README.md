# Pagination in React

This project demonstrates how to implement a simple and reusable pagination system in React. The logic is divided into two main parts:

1. **Data handling and pagination logic**
2. **Pagination UI component**

---

## 1. Pagination Setup in Main Component

In the main component, we handle the data and all pagination-related state and logic.

### 1.1 Store Fetched Data

- First, we store the fetched data in a state variable
- This data will be divided into pages later

### 1.2 Manage Current Page State

- We create a state to store the current page number
- This state helps track which page is currently active

### 1.3 Define Data Per Page

- We define how many items should be shown on each page
- This value controls the pagination size

### 1.4 Calculate Start and End Index

We calculate the indexes for the current page data using simple math:

#### Start Index
- Represents the starting index of the current page data

#### End Index
- Represents the ending index of the current page data

**These indexes are calculated using:**
- Current page number
- Data per page value

### 1.5 Extract Current Page Data

- Using the `slice()` method, we extract only the data for the current page
- This sliced data is stored in a new variable called **current page data**

### 1.6 Render Current Page Data

- We render only the current page data in the UI
- This ensures that only the relevant items appear on the screen for the selected page

---

## 2. Pagination Component

After setting up pagination logic in the main component, we create a separate **Pagination component** for better structure and reusability.

### 2.1 Pass Required Props

We pass the following props from the main component to the pagination component:

- **Total number of pages**
- **Current page**
- **Function to update the current page**

### 2.2 Previous and Next Page Functions

Inside the pagination component:

- A function is defined to go to the **previous page**
- A function is defined to go to the **next page**
- These functions update the current page state safely

### 2.3 Generate Page Numbers

- We create an array containing all page numbers based on total pages
- This array is used to display clickable page numbers

### 2.4 Pagination UI Structure

The pagination UI includes:

- **Previous button** to move to the previous page
- **Page number buttons** to directly jump to any page
- **Next button** to move to the next page

**Users can:**
- Navigate sequentially using Previous / Next
- Jump directly to a specific page by clicking a page number
