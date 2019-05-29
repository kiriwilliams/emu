import axios from "axios";

export default {
    getEntries: function(userID){
        return axios.get("/api/entries", { params: { user: userID }})
    },
    getEntriesByDate: function(userID, date){
        return axios.get("/api/entries", {params: {user: userID, date: date}})
    },
    getEntriesByTag: function(userID, tag){
        return axios.get("/api/entries", {params: {user: userID, tags: tag}})
    }

};