INSERT INTO donations (project_id, total, date, project_name)
VALUES
($1, $2, $3, $4)

RETURNING *;