/*               
1 - https://i.imgur.com/DSGMcE2.png
2 - https://i.imgur.com/5TFJXpI.png
3 - https://i.imgur.com/7MtUkqZ.png
4 - https://i.imgur.com/8zLbBFK.png
5 - https://i.imgur.com/dgrGYhd.png
6 - https://i.imgur.com/xP3ggc6.png
*/

'use strict';

let lock1 = $('#lock1').val();
let lock2 = $('#lock2').val();
let lock3 = $('#lock3').val();
let lock1Code = $('#lock1Code').val();
let lock2Code = $('#lock2Code').val();
let lock3Code = $('#lock3Code').val();
let clueCount = $('#clueCount').val();

let thumbImages = [
	'https://i.imgur.com/DSGMcE2.png',
	'https://i.imgur.com/5TFJXpI.png',
	'https://i.imgur.com/7MtUkqZ.png',
	'https://i.imgur.com/8zLbBFK.png',
	'https://i.imgur.com/dgrGYhd.png',
	'https://i.imgur.com/xP3ggc6.png'
];

/*
	let imagesOfDogs = '';
	// Adds images to the string of images based on the number selected
	for (let i = $('#numDogs').val() - 1; i >= 0; i--) {
		imagesOfDogs += '<img src="' + responseJson.message[i] + '">';
    }
    
	// Replaces the existing HTML with the string of images
	$('.results-img').replaceWith(
		`<div class="results-img">
        ${imagesOfDogs}
      </div>`
	); */

function createCode(lock1, lock2, lock3, lock1Code, lock2Code, lock3Code, clueCount) {
	let htmlCode = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Escape Game</title>
        <style> html {
            font-size: 62.5%;
        }
        @media only screen and (max-width: 75em) {
            html {
                font-size: 56.25%;
            }
        }
        @media only screen and (max-width: 56.25em) {
            html {
                font-size: 50%;
            }
        }
        @media only screen and (min-width: 112.5em) {
            html {
                font-size: 75%;
            }
        }
        
        body {
            box-sizing: border-box;
            padding: 3rem;
        }
        @media only screen and (max-width: 56.25em) {
            body {
                padding: 0;
            }
        }
        
        .lock {
            text-align: center;
            background-color: rgb(45, 38, 38);
            padding: 2rem;
        }
        
        .digit {
            padding: 5px;
            color: rgb(65, 181, 220);
        }
        
        .inner-lock {
            margin: 1.5rem 0;
        }
        
        .top-locked {
            color: rgb(240, 77, 62);
        }
        
        .top-unlock {
            color: rgb(62, 240, 62);
        }
        
        .message {
            font-size: 1.5rem;
        }
        
        .button-arrow {
            background-color: black;
            border: none;
            color: rgb(65, 181, 220);
        }
        
        .button-arrow:not(:last-child) {
            margin-bottom: 5px;
        }
        
        .container {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin-top: 2rem;
            margin-bottom: 3rem;
        }
        
        .popup {
            height: 100vh;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.8);
            z-index: 9999;
            opacity: 0;
            visibility: hidden;
            transition: all .3s;
        }
        @supports (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px)) {
            .popup {
                -webkit-backdrop-filter: blur(10px);
                backdrop-filter: blur(10px);
                background-color: rgba(0, 0, 0, 0.3);
            }
        }
        .popup__content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 75%;
            background-color: #fff;
            box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
            border-radius: 3px;
            display: table;
            overflow: hidden;
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.25);
            transition: all .5s .2s;
        }
        .popup__text {
            font-size: 2.4rem;
            padding: 2rem;
        }
        .popup__img {
            text-align: center;
            padding: 3rem;
        }
        .popup:target {
            opacity: 1;
            visibility: visible;
        }
        .popup:target .popup__content {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        .popup__close:link,
        .popup__close:visited {
            color: #777;
            position: absolute;
            top: 1rem;
            right: 1rem;
            font-size: 2.5rem;
            text-decoration: none;
            display: inline-block;
            transition: all .2s;
            line-height: 1;
        }
        .popup__close:hover {
            color: #b82a25;
        }
        
        .img2 {
            max-height: 90vh;
            max-width: 100%;
        }
        
        .accordion {
            margin-top: 3rem;
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
        }
        
        .thumbs {
            border: 2px solid black;
            padding: .5rem;
        }
        
        @media only screen and (max-width: 75rem) {
            .thumbs {
                height: 18rem;
            }
        }
        @media only screen and (max-width: 56.25rem) {
            .thumbs {
                height: 14rem;
            }
            .popup__text {
                font-size: 1.6rem;
            }
        }
        
        @media only screen and (max-width: 38rem) {
            .thumbs {
                height: 9rem;
            }
        }
        
        @media only screen and (max-width: 30rem) {
            .thumbs {
                height: 7rem;
            }
        }
        </style>
    </head>
    <body>
        <div class="container">`;

	if (lock1 === 'letter') {
		htmlCode += `<div class="lock">
        <div class="top-locked try1">
            <p class="message try1">Locked</p>
        </div>                    
        <div class="inner-lock">
            <div class="letter-lock">
                <button class="button-arrow btnDown" value="btnDown" name="l1l1">&#8595;</button>
                <span class="l1l1 digit" name="l1l1">A</span>                    
                <button class="button-arrow btnUp" value="btnUp" name="l1l1">&#8593;</button>
            </div>
            <div class="letter-lock">                 
                <button class="button-arrow btnDown" value="btnDown" name="l1l2">&#8595;</button>
                <span class="l1l2 digit" name="l1l2">A</span>
                <button class="button-arrow btnUp" value="btnUp" name="l1l2">&#8593;</button>
            </div>
            <div class="letter-lock">
                <button class="button-arrow btnDown" value="btnDown" name="l1l3">&#8595;</button>
                <span class="l1l3 digit" name="l1l3">A</span>                    
                <button class="button-arrow btnUp" value="btnUp" name="l1l3">&#8593;</button>
            </div>
            <div class="letter-lock">
                <button class="button-arrow btnDown" value="btnDown" name="l1l4">&#8595;</button>
                <span class="l1l4 digit" name="l1l4">A</span>                    
                <button class="button-arrow btnUp" value="btnUp" name="l1l4">&#8593;</button>
            </div>
        </div>
        <button class="try btn btn-warning mt-2" id="try1" name="try1">Attempt</button>
    </div>`;
	} else {
		htmlCode += `<div class="lock">
        <div class="top-locked try1">
            <p class="message try1">Locked</p>
        </div>                    
        <div class="inner-lock">
            <div class="num-lock">
                <button class="button-arrow btnDown" value="btnDown" name="l1l1">&#8595;</button>
                <span class="l1l1 digit" name="l1l1">0</span>                    
                <button class="button-arrow btnUp" value="btnUp" name="l1l1">&#8593;</button>
            </div>
            <div class="num-lock">                 
                <button class="button-arrow btnDown" value="btnDown" name="l1l2">&#8595;</button>
                <span class="l1l2 digit" name="l1l2">0</span>
                <button class="button-arrow btnUp" value="btnUp" name="l1l2">&#8593;</button>
            </div>
            <div class="num-lock">
                <button class="button-arrow btnDown" value="btnDown" name="l1l3">&#8595;</button>
                <span class="l1l3 digit" name="l1l3">0</span>                    
                <button class="button-arrow btnUp" value="btnUp" name="l1l3">&#8593;</button>
            </div>
            <div class="num-lock">
                <button class="button-arrow btnDown" value="btnDown" name="l1l4">&#8595;</button>
                <span class="l1l4 digit" name="l1l4">0</span>                    
                <button class="button-arrow btnUp" value="btnUp" name="l1l4">&#8593;</button>
            </div>
        </div>
        <button class="try btn btn-warning mt-2" id="try1" name="try1">Attempt</button>
    </div>`;
	}

	if (lock2 === 'letter') {
		htmlCode += `<div class="lock">
        <div class="top-locked try2">
            <p class="message try2">Locked</p>
        </div>
        <div class="inner-lock">
            <div class="letter-lock">
                <button class="button-arrow btnDown" value="btnDown" name="l2l1">&#8595;</button>
                <span class="l2l1 digit" name="l2l1">A</span>                    
                <button class="button-arrow btnUp" value="btnUp" name="l2l1">&#8593;</button>
            </div>
            <div class="letter-lock">
                <button class="button-arrow btnDown" value="btnDown" name="l2l2">&#8595;</button>
                <span class="l2l2 digit" name="l2l2">A</span>                    
                <button class="button-arrow btnUp" value="btnUp" name="l2l2">&#8593;</button>
            </div>
            <div class="letter-lock">
                <button class="button-arrow btnDown" value="btnDown" name="l2l3">&#8595;</button>
                <span class="l2l3 digit" name="l2l3">A</span>                    
                <button class="button-arrow btnUp" value="btnUp" name="l2l3">&#8593;</button>
            </div>
            <div class="letter-lock">
                <button class="button-arrow btnDown" value="btnDown" name="l2l4">&#8595;</button>
                <span class="l2l4 digit" name="l2l4">A</span>                    
                <button class="button-arrow btnUp" value="btnUp" name="l2l4">&#8593;</button>
            </div>
        </div>
        <button class="try btn btn-warning mt-2" id="try2" name="try2">Attempt</button>
    </div>`;
	} else {
		htmlCode += `<div class="lock">
        <div class="top-locked try2">
            <p class="message try2">Locked</p>
        </div>
        <div class="inner-lock">
            <div class="num-lock">
                <button class="button-arrow btnDown" value="btnDown" name="l2l1">&#8595;</button>
                <span class="l2l1 digit" name="l2l1">0</span>                    
                <button class="button-arrow btnUp" value="btnUp" name="l2l1">&#8593;</button>
            </div>
            <div class="num-lock">
                <button class="button-arrow btnDown" value="btnDown" name="l2l2">&#8595;</button>
                <span class="l2l2 digit" name="l2l2">0</span>                    
                <button class="button-arrow btnUp" value="btnUp" name="l2l2">&#8593;</button>
            </div>
            <div class="num-lock">
                <button class="button-arrow btnDown" value="btnDown" name="l2l3">&#8595;</button>
                <span class="l2l3 digit" name="l2l3">0</span>                    
                <button class="button-arrow btnUp" value="btnUp" name="l2l3">&#8593;</button>
            </div>
            <div class="num-lock">
                <button class="button-arrow btnDown" value="btnDown" name="l2l4">&#8595;</button>
                <span class="l2l4 digit" name="l2l4">0</span>                    
                <button class="button-arrow btnUp" value="btnUp" name="l2l4">&#8593;</button>
            </div>
        </div>
        <button class="try btn btn-warning mt-2" id="try2" name="try2">Attempt</button>
    </div>`;
	}
	if (lock3 === 'letter') {
		htmlCode += `<div class="lock">
                        <div class="top-locked try3">
                            <p class="message try3">Locked</p>
                        </div>
                        <div class="inner-lock">
                            <div class="letter-lock">
                                <button class="button-arrow btnDown" value="btnDown" name="l3l1">&#8595;</button>
                                <span class="l3l1 digit" name="l3l1">A</span>                    
                                <button class="button-arrow btnUp" value="btnUp" name="l3l1">&#8593;</button>
                            </div>
                            <div class="letter-lock">
                                <button class="button-arrow btnDown" value="btnDown" name="l3l2">&#8595;</button>
                                <span class="l3l2 digit" name="l3l2">A</span>                    
                                <button class="button-arrow btnUp" value="btnUp" name="l3l2">&#8593;</button>
                            </div>
                            <div class="letter-lock">
                                <button class="button-arrow btnDown" value="btnDown" name="l3l3">&#8595;</button>
                                <span class="l3l3 digit" name="l3l3">A</span>                    
                                <button class="button-arrow btnUp" value="btnUp" name="l3l3">&#8593;</button>
                            </div>
                            <div class="letter-lock">
                                <button class="button-arrow btnDown" value="btnDown" name="l3l4">&#8595;</button>
                                <span class="l3l4 digit" name="l3l4">A</span>
                                <button class="button-arrow btnUp" value="btnUp" name="l3l4">&#8593;</button>
                            </div>
                        </div>
                        <button class="try btn btn-warning mt-2" id="try3" name="try3">Attempt</button>
                    </div>
                </div>

                <hr />

                <div class="accordion">  `;
	} else {
		htmlCode += `<div class="lock">
                        <div class="top-locked try3">
                            <p class="message try3">Locked</p>
                        </div>
                        <div class="inner-lock">
                            <div class="num-lock">
                                <button class="button-arrow btnDown" value="btnDown" name="l3l1">&#8595;</button>
                                <span class="l3l1 digit" name="l3l1">0</span>                    
                                <button class="button-arrow btnUp" value="btnUp" name="l3l1">&#8593;</button>
                            </div>
                            <div class="num-lock">
                                <button class="button-arrow btnDown" value="btnDown" name="l3l2">&#8595;</button>
                                <span class="l3l2 digit" name="l3l2">0</span>                    
                                <button class="button-arrow btnUp" value="btnUp" name="l3l2">&#8593;</button>
                            </div>
                            <div class="num-lock">
                                <button class="button-arrow btnDown" value="btnDown" name="l3l3">&#8595;</button>
                                <span class="l3l3 digit" name="l3l3">0</span>                    
                                <button class="button-arrow btnUp" value="btnUp" name="l3l3">&#8593;</button>
                            </div>
                            <div class="num-lock">
                                <button class="button-arrow btnDown" value="btnDown" name="l3l4">&#8595;</button>
                                <span class="l3l4 digit" name="l3l4">0</span>
                                <button class="button-arrow btnUp" value="btnUp" name="l3l4">&#8593;</button>
                            </div>
                        </div>
                        <button class="try btn btn-warning mt-2" id="try3" name="try3">Attempt</button>
                    </div>
                </div>

                <hr />

                <div class="accordion">  `;
	}

	for (let i = 0; i < clueCount; i++) {
		htmlCode += `<a class="clue-num" href="#popup${i + 1}" class="thumb-link"> <img src="${thumbImages[
			i
		]}" alt="Clue ${i + 1}" class="thumbs"> </a>`;
	}

	htmlCode += `</div>

    <div class="clues">`;

	for (let i = 0; i < clueCount; i++) {
		htmlCode += `<div class="popup" id="popup${i + 1}">
        <div class="popup__content" >
            <a href="#" class="popup__close">&times;</a>
            <div class="popup__img">
                <img class="img2" src="img/clue${i + 1}.png" alt="Clue ${i + 1}">
            </div>
        </div>
    </div>`;
	}

	htmlCode += `<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
    <script>const passcodes = {
        try1 : '${lock1Code.toUpperCase()}',
        try2 : '${lock2Code.toUpperCase()}',
        try3 : '${lock3Code.toUpperCase()}'
    };
    
    let tries = {};
    
   
    $(function() {
        buttons();
    });
    
    function updateTry() {
        tries = {
            try1 : $('span.l1l1').text() + $('span.l1l2').text() + $('span.l1l3').text() + $('span.l1l4').text(),
            try2 : $('span.l2l1').text() + $('span.l2l2').text() + $('span.l2l3').text() + $('span.l2l4').text(),
            try3 : $('span.l3l1').text() + $('span.l3l2').text() + $('span.l3l3').text() + $('span.l3l4').text()
        };
        return tries;
    }
    
   
    function buttons() {
        $('.letter-lock').on('click', '.btnUp', function(e) {
            event.preventDefault();
            let tempClass = 'span.' + e.target.name;
            let ltr = $(tempClass).text();
            ltr === 'Z' ? (ltr = 'A') : (ltr = String.fromCharCode(ltr.charCodeAt(0) + 1));
            $(tempClass).text(ltr);
            updateTry();
        });
    
        $('.letter-lock').on('click', '.btnDown', function(e) {
            event.preventDefault();
            let tempClass = 'span.' + e.target.name;
            let ltr = $(tempClass).text();
            ltr === 'A' ? (ltr = 'Z') : (ltr = String.fromCharCode(ltr.charCodeAt(0) - 1));
            $(tempClass).text(ltr);
            updateTry();
        });
    
        $('.num-lock').on('click', '.btnUp', function(e) {
            event.preventDefault();
            let tempClass = 'span.' + e.target.name;
            let num = $(tempClass).text();
            num === '9' ? (num = '0') : (num = String.fromCharCode(num.charCodeAt(0) + 1));
            $(tempClass).text(num);
            updateTry();
        });
    
        $('.num-lock').on('click', '.btnDown', function(e) {
            event.preventDefault();
            let tempClass = 'span.' + e.target.name;
            let num = $(tempClass).text();
            num === '0' ? (num = '9') : (num = String.fromCharCode(num.charCodeAt(0) - 1));
            $(tempClass).text(num);
            updateTry();
        });
    
        $('.lock').on('click', '.try', function(e) {
            event.preventDefault();
            updateTry();
            let tempMsg = 'div.' + e.target.name;
            let updatedMsg = 'p.' + e.target.name;
    
            if (tries[e.target.id] === passcodes[e.target.name]) {
                $(updatedMsg).text('Unlocked');
                $(tempMsg).addClass('top-unlock');
                $(tempMsg).removeClass('top-locked');
            }
        });
    }
    </script>
   
</body>

</html>`;

	htmlCode = htmlCode.replace(/</g, '&lt;');
	htmlCode = htmlCode.replace(/>/g, '&gt;');

	$('#results').replaceWith(
		`<div id="results">
        <h2>Generated Code</h2>
        <button id="reset">Redo</button>
        <p  class="resultBox" ><span id="copyThis">${htmlCode}</span></p>
        
    </div>`
	);

	console.log(htmlCode);
}

function buttons() {
	$('body').on('click', '#generate', function() {
		event.preventDefault();

		lock1 = $('#lock1').val();
		lock2 = $('#lock2').val();
		lock3 = $('#lock3').val();
		lock1Code = $('#lock1Code').val();
		lock2Code = $('#lock2Code').val();
		lock3Code = $('#lock3Code').val();
		clueCount = $('#clueCount').val();

		console.log(`${lock1} ${lock2} ${lock3} ${lock1Code} ${lock2Code} ${lock3Code} ${clueCount}`);

		createCode(lock1, lock2, lock3, lock1Code, lock2Code, lock3Code, clueCount);

		$('#results').removeClass('hidden');
		$('#form').toggleClass('hidden');
	});

	$('body').on('click', '#reset', function() {
		event.preventDefault();
		$('#results').toggleClass('hidden');
		$('#form').toggleClass('hidden');
	});
}

$(function() {
	buttons();
});
