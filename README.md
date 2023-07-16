# E-commerce Back End
This is a back-end applicaion for an e-commerce website, built using the latest technologies. Itr provides a functional Express.js API and utilizes modern tools to ensure your company can compete with other e-commerce businesses.

## User Story
As a manager at an internet retail company, I want a back end for my e-commerce website that uses the latest technologies so that my company can effectively compete with other e-commerce companies.

## Acceptance Criteria
The application meets the following acceptance criteria:
- The application utilizes a functional Express.js API.
- Database name, MySQL username, and MySQL password are stored in an environment variable file for secure connection.
- The application connects to the database using Sequelize, a powerfule ORM (Object-Relational Mapping) tool.
- Schema and seed commands are provided to create a development database and seed it with test data.
- WHen the application is invoked, the server starts, and the Sequelize models are synced to the MySQL database.
- The application provides API GET routes for categories, products, and tags, which display the data in a formatted JSON response.
- API POST, PUT, and DELETE routes are available to create, update, and delete data in the database, and these routes can be tested using  a tool like Insomnia Core.

## Installation
1. Clone the repository to your local machine
2. Navigate to the project directory
3. Install the required dependencies using npm.
4. Set up the invironment variables by creating a '.env' file in the root directory and adding the following:
    DB_NAME=your_database_name
    DB_USER=your_mysql_username
    DB_PASSWORD=your_mysql_password
    DB_HOST=localhost
    DB_PORT=3306
Replace the placeholders ('your_database_name', 'your_mysql_username', and 'your_mysql_password') with your actual database credentials.

## Database Setup
1. Run the following command to create the development database and seed it with the test data:
    npm run seed
2. Start the application
    npm start
The server will start, and the Sequelize models will be synced with the MySQL database.

## Usage
You can now use API client tools like Insomnia Core to interact with the API. Here are the available routes:

- GET `/api/categories`: Retrieve all categories.
- GET `/api/products`: Retrieve all products.
- GET `/api/tags`: Retrieve all tags.

You can also use API client tools to test the following routes:
- POST `/api/categories`: Create a new category.
- POST `/api/products`: Create a new product.
- POST `/api/tags`: Create a new tag.
- PUT `/api/categories/:id`: Update a category by its ID.
- PUT `/api/categories/:id`: Update product by its ID.
- PUT `/api/tags/:id`: Update a tag by its ID.
- DELETE `/api/categories/:id`: Delete a category by its ID.
- DELETE `/api/products/:id`: Delete a product by it's ID.
- DELETE `/api/tags/:id`: Delete a tag by its ID.

## Technologies Used
- Node.js
- Express.js
- MySQL
- Sequelize

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please submit an issue or a pull request.

## License
This project is licensed under the MIT License.

## Contact 
For any questions or inquiries, please contact me at Sissy1310@aol.com
