UPDATE nominations
SET status = $2
WHERE nomination_id = $1;