var arduino = require('../');

var board = new arduino.Board({
  debug: true
});

var rf = new arduino.Rf({
  board: board,
  pin: "10"
});

board.on('ready', function(){
    setTimeout(function() {
        rf.on('1');
        rf.on('2');

        setTimeout(function() {
            rf.off('1');
            rf.off('2');
        }, 3000);

    }, 500);

});
