CREATE DATABASE tasks_db

CREATE TABLE tasks(
    id SERIAL PRIMARY KEY,
    title VARCHAR(250) UNIQUE,
    description VARCHAR(250)
)