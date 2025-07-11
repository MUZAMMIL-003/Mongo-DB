import exzpress from 'express';

const router = express.Router();


router.get('/tasks', (req, res) => {
    res.send('List of tasks');
});