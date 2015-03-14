module.exports = {
	authenticate: function(req, res) {
		console.log('1111111 user req server', req.user)
		return res.json(req.user);
	}
};