var getQuote = function() {
    var quotes = [
        {
            "cite":"Anonymous",
            "text":"The best thing about a boolean is even if you are wrong, you are only off by a bit."
        },
        {
            "cite":"Louis Srygley",
            "text":"Without requirements or design, programming is the art of adding bugs to an empty text file."
        },
        {
            "cite":"Ralph Johnson",
            "text":"Before software can be reusable it first has to be usable."
        },
        {
            "cite":"Anonymous",
            "text":"In order to understand recursion, one must first understand recursion."
        },
        {
            "cite":"Oktal",
            "text":"I think Microsoft named .Net so it wouldn\u2019t show up in a Unix directory listing."
        },
        {
            "cite":"Alan J. Perlis",
            "text":"There are two ways to write error-free programs; only the third one works."
        },
        {
            "cite":"Anonymous",
            "text":"It\u2019s not a bug – it\u2019s an undocumented feature."
        },
        {
            "cite":"Jessica Gaston",
            "text":"One man\u2019s crappy software is another man\u2019s full time job."
        },
        {
            "cite":"Jeff Sickel",
            "text":"Deleted code is debugged code."
        },
        {
            "cite":"Edward V Berard",
            "text":"Walking on water and developing software from a specification are easy if both are frozen. "
        },
        {
            "cite":"Gordon Bell",
            "text":"The cheapest, fastest, and most reliable components are those that aren\u2019t there."
        },
        {
            "cite":"Mosher\u2019s Law of Software Engineering",
            "text":"Don\u2019t worry if it doesn\u2019t work right. If everything did, you\u2019d be out of a job."
        },
        {
            "cite":"Anonymous",
            "text":"VI has 2 modes. One that beeps at you, and another that ruins everything"
        },
        {
            "cite":"Linus Torvalds",
            "text":"Talk is cheap. Show me the code."
        },
        {
            "cite":"Keith Bostic",
            "text":"Perl - The only language that looks the same before and after RSA encryption."
        },
        {
            "cite":"Seymour Cray",
            "text":"The trouble with programmers is that you can never tell what a programmer is doing until it\u2019s too late."
        }
    ];

    return quotes[Math.floor(Math.random() * (quotes.length - 1))]
}
var generateTweet = function(container, quote) {
    // Generate the twitter "tweet" button
    // The first parameter includes a refering url if '' is used as
    // opposed to ' '. This was undesireable because it made several of the quotes
    // too long to tweet without modification.
    twttr.widgets.createShareButton(' ', document.getElementById(container),{text:quote});
}
var replaceQuote = function() {
    // Displays quote on page, deletes and regenerates tweet button.
    var quote = getQuote();
    $("#quoteable span").text(quote.text);
    $("#quoteable cite").text(quote.cite);
    $("#tweetit").html('');
    generateTweet("tweetit", quote.text + ' -' + quote.cite);
}

$(document).ready(function(){
    replaceQuote();
    $("#action-button").click(replaceQuote);
});
