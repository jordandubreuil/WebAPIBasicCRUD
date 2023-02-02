if(process.env.NODE_ENV === "production"){
    module.exports = {mongoURI:"mongodb+srv://jordan:test15@cluster0.ezrcu.mongodb.net/?retryWrites=true&w=majority"}
}
else{
    module.exports = {mongoURI:"mongodb://localhost:27017/gameEntries"}
}