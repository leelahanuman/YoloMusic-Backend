const express = require("express");
const router = express.Router();
const musicUser = require("../Models/musicSchema");

router.post("/create", async (req, res) => {
  const { title, image, content, description, category,url } = req.body;

  const user = await musicUser.create({
    title,
    image,
    content,
    description,
    category,
    url
  });
  res.status(201).json(user)
});

router.get("/get", async (req, res) => {

const user=await musicUser.find({});
res.status(200).json(user)
    
});
  
router.get("/:id", async (req, res) => {
    const id=req.params.id;
    const user=await musicUser.findById(id);
    res.status(200).json(user)
        
    
    });
    // router.post("/:id/add-song", async (req, res) => {
    //   const musicId = req.params.id;
    //   const { title, artist, duration } = req.body;
    
    //   const song = await Song.create({ title, artist, duration });
    
    //   const music = await musicUser.findById(musicId);
    //   music.songs.push(song);
    //   await music.save();
    
    //   res.status(201).json(music);
    // });
      
    module.exports = router;

