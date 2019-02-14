var express = require('express');
var router = express.Router();


//importing schema from eventitem.js

const Item = require('../model/eventitem');

//retrieving data from db
router.get('/items',(req,res,next)=>{
    Item.find(function(err, items){
        if(err){
            res.json(err);
        }
        else{
            res.json(items);
        }
    })

});

//inserting data into db
router.post('/item',(req,res,next)=>{
    let neweventitem = new Item({
        eventID: req.body.eventID,
        Title: req.body.Title,
        BreifDescription: req.body.BreifDescription,
        Description: req.body.Description,
        Timings: req.body.Timings,
        LocationName: req.body.LocationName,
        LocationDescription: req.body.LocationDescription,
        LocationType: req.body.LocationType,
        LocationFacilities: req.body.LocationFacilities,
        LocationImage: req.body.LocationImage,
        OpeningHours: req.body.OpeningHours,
        Address: req.body.Address,
        Latitude: req.body.Latitude,
        Longitude: req.body.Longitude,
        Cost: req.body.Cost,
        Language: req.body.Language,
        Age: req.body.Age,
        Categories: req.body.Categories,
        AccessLimitations: req.body.AccessLimitations,
        Organizer: req.body.Organizer,
        OrganizerContact: req.body.OrganizerContact,
        OrganizerLogo: req.body.OrganizerLogo,
        Image: req.body.Image,
        SourceWebsite: req.body.SourceWebsite,
        Website: req.body.Website,
        SourceWebsiteName: req.body.SourceWebsiteName,
        TicketWebsite: req.body.TicketWebsite,
        ExtactionTime: req.body.ExtactionTime,
        UserID: req.body.UserID,
        UpdateTime: req.body.UpdateTime,
        Active: req.body.Active
    });
    neweventitem.save((err, item)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({msg: 'Item Has Been Added Successfully'});
        }
    });    

});

//update data in db
router.put('/item/:id',(req,res,next)=>{
    Item.findOneAndUpdate({_id:req.params.id},{
        $set:{
            eventID: req.body.eventID,
            Title: req.body.Title,
            BreifDescription: req.body.BreifDescription,
            Description: req.body.Description,
            Timings: req.body.Timings,
            LocationName: req.body.LocationName,
            LocationDescription: req.body.LocationDescription,
            LocationType: req.body.LocationType,
            LocationFacilities: req.body.LocationFacilities,
            LocationImage: req.body.LocationImage,
            OpeningHours: req.body.OpeningHours,
            Address: req.body.Address,
            Latitude: req.body.Latitude,
            Longitude: req.body.Longitude,
            Cost: req.body.Cost,
            Language: req.body.Language,
            Age: req.body.Age,
            Categories: req.body.Categories,
            AccessLimitations: req.body.AccessLimitations,
            Organizer: req.body.Organizer,
            OrganizerContact: req.body.OrganizerContact,
            OrganizerLogo: req.body.OrganizerLogo,
            Image: req.body.Image,
            SourceWebsite: req.body.SourceWebsite,
            Website: req.body.Website,
            SourceWebsiteName: req.body.SourceWebsiteName,
            TicketWebsite: req.body.TicketWebsite,
            ExtactionTime: req.body.ExtactionTime,
            UserID: req.body.UserID,
            UpdateTime: req.body.UpdateTime,
            Active: req.body.Active
        }
    },
    function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })

});

//deleting data from db
router.delete('/item/:id',(req,res,next)=>{
    Item.remove({_id: req.params.id}, function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })

});



module.exports = router;