UPDATE ivoryusers
SET first_name = $1,
    last_name = $2,
    email = $3,
    password = $4,
    profile_pic = $5,
    isAdmin = $6
WHERE user_id = $7;
SELECT * FROM users;