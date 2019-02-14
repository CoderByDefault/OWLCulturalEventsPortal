const mongoose = require('mongoose');

const eventItemSchema = mongoose.Schema({
    eventID:{
        type: String,
        required: true
    },
    Title:{
        type: String,
        required: true
    },
    BreifDescription:{
        type: String,
        required: true
    },
    Description:{
        type: String,
        required: true
    },
    Timings:{
        type: [String],
        required: true
    },
    LocationName:{
        type: String,
        required: true
    },
    LocationDescription:{
        type: String,
        required: true
    },
    LocationType:{
        type: String,
        required: true
    },
    LocationFacilities:{
        type: [String],
        required: true
    },
    LocationImage:{//don't know if really needed
        type: String,
        required: true
    },
    OpeningHours:{
        type: String,
        required: true
    },
    Address:{
        type: String,
        required: false
    },
    Latitude:{
        type: String,
        required: false
    },
    Longitude:{
        type: String,
        required: true
    },
    Cost:{
        type: String,
        required: true
    },
    Language:{
        type: String,
        required: true
    },
    Age:{
        type: String,
        required: true
    },
    Categories:{
        type: [String],
        required: true
    },
    AccessLimitations:{
        type: String,
        required: true
    },
    Organizer:{
        type: String,
        required: true
    },
    OrganizerContact:{
        type: String,
        required: true
    },
    OrganizerLogo:{
        type: String,
        required: true
    },
    Image:{
        type: String,
        required: true
    },
    SourceWebsite:{
        type: String,
        required: true
    },
    Website:{
        type: String,
        required: true
    },
    SourceWebsiteName:{
        type: String,
        required: true
    },
    TicketWebsite:{
        type: String,
        required: true
    },
    ExtactionTime:{
        type: String,
        required: true
    },
    UserID:{
        type: String,
        required: true
    },
    UpdateTime:{
        type: String,
        required: true
    },
    Active:{
        type: Boolean,
        default: false
    }
});

const Item = module.exports = mongoose.model('Item', eventItemSchema);
