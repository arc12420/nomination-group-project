module.exports = {
    getVolunteerProjects: async (req, res) => {
        const db = req.app.get('db');
        const projects = await db.get_volunteer_projects;
        console.log(projects)
        res.status(200).send(projects);
    }
}