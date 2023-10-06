const axios = require('axios');

const handleGetAllJobs = async (req, res) => {
    try {
        const { description, location, full_time, page } = req.query;
        const apiUrl = `https://dev6.dansmultipro.com/api/recruitment/positions.json?page=${page || 1}`;
        const response = await axios.get(apiUrl);
        let jobs = response.data;
    
        // Apply search filters if provided
        if (description) {
          jobs = jobs.filter(job => job.description.toLowerCase().includes(description.toLowerCase()));
        }
        if (location) {
          jobs = jobs.filter(job => job.location.toLowerCase().includes(location.toLowerCase()));
        }
        if (full_time) {
          jobs = jobs.filter(job => job.type.toLowerCase() === 'full time');
        }
    
        res.json({ jobs });
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
};

const handleGetJobsById = async (req, res) => {
    try {
        const { id } = req.params;
        const apiUrl = `https://dev6.dansmultipro.com/api/recruitment/positions/${id}`;
        const response = await axios.get(apiUrl);
        const jobDetail = response.data;
    
        res.json({ jobDetail });
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
}


module.exports = { handleGetAllJobs, handleGetJobsById};