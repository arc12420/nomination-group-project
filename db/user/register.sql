INSERT INTO ivoryusers
(first_name, last_name, email, password, profile_pic)
VALUES 
($1, $2, $3, $4, $5);
SELECT user_id, email FROM ivoryusers
WHERE email = $3;