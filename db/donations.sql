INSERT INTO donations (user_id, project_id, total, date, project_name)
VALUES
($1, $2, $3, $4, $5)

RETURNING *;
