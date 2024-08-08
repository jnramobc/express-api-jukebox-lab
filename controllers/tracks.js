const express = require('express');
const router = express.Router();
const Track = require('../models/track');

router.get('/', async (req, res) => {
    try{
        const tracks = await Track.find({})
        res.status(200).json(tracks)
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:error.message});
    }
});

router.post('/', async (req, res) => {//create a new track 
    try{
        const track = await Track.create(req.body)
        res.status(201).json(track)
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:error.message});
    }
});

router.get('/:id', async (req, res) => {//getting a single track
    try{
        const track = await Track.findById(req.params.id)
        console.log(track)
            res.status(200).json(track)
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:error.message});

    }
});

router.put('/:id', async (req, res) => {
    try{
        const updateTrack = await Track.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        res.status(200).json(updateTrack);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:error.message});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const track = await Track.findByIdAndDelete(req.params.id);
        if (!track) {
            return res.status(404).json({ error: 'Track not found' }); 
        }
        res.status(200).json(track);
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
    });

module.exports = router;