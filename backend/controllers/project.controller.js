import Project from "../models/project.model.js";

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find({});
        res.status(200).json({success:true, data:projects})
    }
    catch (error) {
        console.error('Server Error: ' + error.message);
        res.status(500).json({success:false, message: "Server Error"});
    }
}

export const getProject = async (req, res) => {

    const { id } = req.params;

    try {
        const project = await Project.findById(id);
        res.status(200).json({success:true, data:project})
    }
    catch (error) {
        console.error('Server Error: ' + error.message);
        res.status(500).json({success:false, message: "Server Error"});
    }
}

export const storeProject = async (req, res) => {
    const project = req.body;

    if(!project.name || !project.description || !project.technologies) return res.status(400).json({success:false, message:"Please provide all fields."});

    const newProject = new Project(project);

    try {
        await newProject.save();
        res.status(201).json({success:true, data: newProject});
    }
    catch(error) {
        console.error("Error when creating  project: " + error.message);
        res.status(500).json({success:false, message: "Server Error"});
    }
}

export const deleteProject = async (req, res) => {
    const { id } = req.params;

    try {
        await Project.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Project deleted successfully"})
    }
    catch (error) {
        console.error('Server Error: '+error.message);
        res.status(500).json({success:false, message: "Server Error"})
    }
}