Safekeep Fullstack Interview Challenge

To run the project:

# Start Up Docker Postgres

$docker-compose up

# Create table using psql
## Requires psql be installed. 

$psql postgres -h localhost -U trust_our_leader
$(enter password and postgres prompt will appear)
$postgres=#
CREATE TABLE participants (
	ID SERIAL PRIMARY KEY,
	first_name VARCHAR(255) NOT NULL,
	last_name VARCHAR(255) NOT NULL,
	hours NUMERIC NOT NULL
);

## Table is now initialized and ready to communicate with express backend

# Start server:

$cd backend
$npm install
$yarn start

# Start Backend

In a separate terminal window:

$cd frontend
$npm install
$yarn start

# View in browser at http://localhost:3000/