
function chatBot(webChatObj, messages) {
    if (messages == undefined) {
        messages = [
            "What's up dude?",
            "For realz?",
            "She said what?",
            "Can I get an Amen?",
            "Oh no he didn't",
            "u r so funny",
            ];
    }
    this.wc = webChatObj;
    this.messages = messages;
};
chatBot.prototype.start = function(secs) {
    if (secs == undefined) {
        secs = 10;
    }
    this.currMsgIdx = 0;
    this.started = true;
    var self = this;

    this.intervalId = setInterval(function() {
        self.wc.addReply(self.messages[self.currMsgIdx % self.messages.length]);
        self.currMsgIdx++;
    }, secs * 1000);
}
chatBot.prototype.stop = function() {
    if (this.intervalId != undefined) {
        clearInterval(this.intervalId);
    }
    this.started = false;
}

// Get our web chat log inserted into the DOM.
//var chat = new webChat($('#chatLog'), '.chatText', '#submitBtn');

// Start our chatty bot.
var bot = new chatBot(chat);
bot.start();

function toggleBot() {
    if (bot.started) {
        bot.stop();
    } else {
        bot.start();
    }
}
