
/*
 * Main Rf constructor
 * Process options
 * Tell the board to set it up
 */
var Rf = function (options) {
  if (!options || !options.board) throw new Error('Must supply required options to Rf');
  this.board = options.board;
  this.pin = options.pin || 13;
}

/*
 * Turn the Rf on
 */
Rf.prototype.on = function(light) {
  this.board.write('95' + this.pin + light);
}

/*
 * Turn the Rf off
 */
Rf.prototype.off = function(light) {
  this.board.write('96' + this.pin + light)
}

module.exports = Rf;
