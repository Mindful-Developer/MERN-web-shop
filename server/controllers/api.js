// displays the welcome message for the API
module.exports.display = async (req, res) => {
    res.json({ message: "Welcome to the market!" });
}