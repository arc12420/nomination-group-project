CREATE TABLE ivoryusers (
    user_id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    password TEXT,
    profile_pic TEXT,
    isAdmin BOOLEAN
);

CREATE TABLE donations (
    donation_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES ivoryusers(user_id),
    project_id INTEGER REFERENCES projects(project_id),
    total INTEGER
    -- or amount
);

CREATE TABLE projects (
    project_id SERIAL PRIMARY KEY,
    name TEXT,
    date TEXT,
    time TEXT,
    location TEXT,
    description TEXT,
    donation_goal INTEGER,
    volunteers_needed BOOLEAN
);

CREATE TABLE nominations (
    nomination_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES ivoryusers(user_id),
    name TEXT,
    desctription TEXT
    -- name of whoever is being nominated and description of why
)

CREATE TABLE contacts (
    contact_id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    title TEXT,
    phone TEXT
);