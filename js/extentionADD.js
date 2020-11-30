var Tutor = require('./Addition.js');
exports.NodeTutorial = function ()
{
    console.log("it is node tutorial")
    exports.pTutor = function ()
    {
        var PTutor = Tutor
        PTutor.tutorial;
    };
}
