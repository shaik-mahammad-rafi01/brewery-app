# Brewery
**NAISHMA** is a CLI (Command-Line Interface) application that simulates a basic e-commerce platform with Admin and Customer roles. It allows users to manage and shop products in a simple terminal-based environment.

## Project Overview
> One stop destination for your shopping needs

NAISHMA provides an interactive terminal experience where:
- **Admins** can manage products (add/remove).
- **Customers** can browse, search, filter, and add products to their cart.

Product data is initially fetched from a **public API** and enhanced by user interactions.
### Features
 - Display Product List
 - Billing Cart Items
 - Choose Cup Size for Beverages (Small, Medium, Large)
 - Apply 10% Discount if Bill > ₹1000
 - Show Final Bill with Item-wise Breakdown
## Tech Stack 

**TypeScript** 
   - TypeScript download and installation guide - visit : https://www.typescriptlang.org/download/


##  Getting Started

### 1. Clone the repository

```bash
git clone git@github.com:shaik-mahammad-rafi01/brewery-app.git
cd brewery-app
```

### 2. Install Dependencies 

  #### Install Node.js using NVM (Node Version Manager)
  - In Terminal, run this command to install NVM
  ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
  ```
##### Install Node.js Using NVM
- With NVM installed, you can now install Node.js. To install the latest LTS (Long Term Support) version, run:
```
nvm install --lts 
```
##### Verify the installation : 
- Once installed, you can check the Node.js version using:
```
node -v
```

#### Install TypeScript 
- Install TypeScript Globally
  - Open your terminal and run the following command to install TypeScript globally:

  ```
  npm install -g typescript
  ```
- Verify that TypeScript is installed by checking its version:
  ```
     tsc -v
  ```


### 3. Run the Project 
- Compile the Typescript files 
```bash 
  tsc 
```
- Run the compiled JavaScript
```
npm start
```
## Author
Shaik Mahammad Rafi  
📧 [rafi.shaik@everest.engineering](mailto:rafi.shaik@everest.engineering)  
