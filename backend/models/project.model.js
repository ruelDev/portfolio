import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required:false
    },
    description: {
        type: String,
        required: true
    },
    technologies: {
        type: Array,
        required: true
    },
    liveUrl: {
        type: String,
        required:false
    },
    featured: {
        type: Boolean,
        required:false
    }
}, {
    timestamps: true
});

const Project = mongoose.model("Project", projectSchema);

export default Project;