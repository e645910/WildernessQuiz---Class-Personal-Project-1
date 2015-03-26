module.exports = {
	authenticate: function(req, res){
		return res.json(req.user);
	}
};