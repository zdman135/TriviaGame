let qa = [
    {
        "question": "What two countries were already involved in a military conflict before the beginning of World War II?",
        "answerChoices": ["GERMANY & FRANCE", "JAPAN & CHINA", "JAPAN & INDIA", "GERMANY & POLAND"],
        "correctAnswer": "JAPAN & CHINA"
    },
    {
        "question": "What was the longest battle of World War II?",
        "answerChoices": ["BATTLE OF THE RIVER PLATE","BATTLE OF THE ATLANTIC", "BATTLE OF MIDWAY", "BATTLE OF THE BULGE"],
        "correctAnswer": "BATTLE OF THE ATLANTIC"
    },
    {
        "question": "What was the first Nazi concentration camp?",
        "answerChoices": ["RAVENSBRÜCK", "DACHAU", "AUSCHWITZ", "CHELMNO"],
        "correctAnswer": "DACHAU"
    },
    {
        "question": "In which battle did the Axis powers lose about a quarter of their total troops on the Eastern Front?",
        "answerChoices": ["BATTLE OF KURSK", "BATTLE OF LENINGRAD", "BATTLE OF STALINGRAD", "BATTLE OF JUTLAND"],
        "correctAnswer": "BATTLE OF STALINGRAD"
    },
    {
        "question": "What was the name of the B-29 bomber that dropped the first atomic bomb on Hiroshima?",
        "answerChoices": ["FAT MAN", "LITTLE BOY", "ROSA PARKS", "ENOLA GAY"],
        "correctAnswer": "ENOLA GAY"
    },
    {
        "question": "What country lost the most lives in World War II?",
        "answerChoices": ["UNITED STATES", "GERMANY", "SOVIET UNION", "FRANCE"],
        "correctAnswer": "SOVIET UNION"
    },
    {
        "question": "What research and development project produced the first nuclear weapons during World War II?",
        "answerChoices": ["OPPENHEIMER PROJECT", "ALAN PARSONS PROJECT", "PHILADELPHIA PROJECT", "MANHATTAN PROJECT"],
        "correctAnswer": "MANHATTAN PROJECT"
    },
    {
        "question": 'What country sent reinforcements in the form of "Division Azul" to aid Germany in its WWII attack on the Soviet Union?',
        "answerChoices": ["SPAIN", "MEXICO", "ITALY", "ARGENTINA"],
        "correctAnswer": "SPAIN"
    },
    {
        "question": "What was the code name for the Battle of Normandy?",
        "answerChoices": ["OPERATION PANTHER", "OPERATION PILEDRIVER", "OPERATION OMAHA", "OPERATION OVERLORD"],
        "correctAnswer": "OPERATION OVERLORD"
    },
    {
        "question": "What was the largest battleship of World War 2?",
        "answerChoices": ["KONGO", "BISMARCK", "MISSOURI", "YAMATO"],
        "correctAnswer": "YAMATO"
    },
    {
        "question": "What was the first action the Nazis took against Jews?",
        "answerChoices": ["STRIPPED THEM OF CITIZENSHIP", "BOYCOTT OF JEWISH BUSINESSES", "REGISTRATION OF ALL JEWS", "CONCENTRATION CAMPS"],
        "correctAnswer": "BOYCOTT OF JEWISH BUSINESSES"
    },
    {
        "question": "Which battle involved the largest engagement of tanks in history?",
        "answerChoices": ["BATTLE OF KURSK", "BATTLE OF THE BULGE", "BATTLE OF BERLIN", "BATTLE OF MIDWAY"],
        "correctAnswer": "BATTLE OF KURSK"
    },
    {
        "question": "After World War II, Germany was divided into how many zones of occupation?",
        "answerChoices": ["2", "3", "4", "12"],
        "correctAnswer": "4"
    },
    {
        "question": "What was the last major battle of World War II?",
        "answerChoices": ["BATTLE OF IWO JIMA", "BATTLE OF PELELIU", "BATTLE OF JUTLAND", "BATTLE OF OKINAWA"],
        "correctAnswer": "BATTLE OF OKINAWA"
    },
    {
        "question": "What was the second city the United States dropped a nuclear bomb on?",
        "answerChoices": ["TOKYO", "YOKOHAMA", "NAGASAKI", "HIROSHIMA"],
        "correctAnswer": "NAGASAKI"
    },
    {
        "question": "On which beach did the Americans run into a firestorm of resistance during the D-Day landings?",
        "answerChoices": ["GOLD", "OMAHA", "JUNO", "UTAH"],
        "correctAnswer": "OMAHA"
    },
    {
        "question": "Which of the following were systematically murdered by the Nazis?",
        "answerChoices": ["GYPSIES", "HOMOSEXUALS", "JEWS", "ALL OF THESE"],
        "correctAnswer": "ALL OF THESE"
    },
    {
        "question": "In a Nazi concentration camp, a pink triangle identified a prisoner as?",
        "answerChoices": ["JEWISH", "POLITICAL PRISONER", "JEHOVAH'S WITNESS", "HOMOSEXUAL"],
        "correctAnswer": "HOMOSEXUAL"
    },
    {
        "question": "What English code breaker created a machine that helped to decrypt Nazi messages?",
        "answerChoices": ["CHARLES BABBAGE", "STEPHEN HAWKING", "ALAN TURING", "SIR WILLIAM THOMPSON"],
        "correctAnswer": "ALAN TURING"
    },
    {
        "question": "Where was the first atom bomb tested?",
        "answerChoices": ["NEW MEXICO", "NEVADA", "HIROSHIMA", "ARIZONA"],
        "correctAnswer": "NEW MEXICO"
    }
];

function shuffle(triviaQuestions) {
    var shuffle, x, question;
    for (question = triviaQuestions.length - 1; question > 0; question--) {
        shuffle = Math.floor(Math.random() * (question + 1));
        x = triviaQuestions[question];
        triviaQuestions[question] = triviaQuestions[shuffle];
        triviaQuestions[shuffle] = x;
    }
    return triviaQuestions;
}

function resetQuestions() {
    qa =     [
        {
        "question": "What two countries were already involved in a military conflict before the beginning of World War II?",
        "answerChoices": ["GERMANY & FRANCE", "JAPAN & CHINA", "JAPAN & INDIA", "GERMANY & POLAND"],
        "correctAnswer": "JAPAN & CHINA"
    },
    {
        "question": "What was the longest battle of World War II?",
        "answerChoices": ["BATTLE OF THE RIVER PLATE","BATTLE OF THE ATLANTIC", "BATTLE OF MIDWAY", "BATTLE OF THE BULGE"],
        "correctAnswer": "BATTLE OF THE ATLANTIC"
    },
    {
        "question": "What was the first Nazi concentration camp?",
        "answerChoices": ["RAVENSBRÜCK", "DACHAU", "AUSCHWITZ", "CHELMNO"],
        "correctAnswer": "DACHAU"
    },
    {
        "question": "In which battle did the Axis powers lose about a quarter of their total troops on the Eastern Front?",
        "answerChoices": ["BATTLE OF KURSK", "BATTLE OF LENINGRAD", "BATTLE OF STALINGRAD", "BATTLE OF JUTLAND"],
        "correctAnswer": "BATTLE OF STALINGRAD"
    },
    {
        "question": "What was the name of the B-29 bomber that dropped the first atomic bomb on Hiroshima?",
        "answerChoices": ["FAT MAN", "LITTLE BOY", "ROSA PARKS", "ENOLA GAY"],
        "correctAnswer": "ENOLA GAY"
    },
    {
        "question": "What country lost the most lives in World War II?",
        "answerChoices": ["UNITED STATES", "GERMANY", "SOVIET UNION", "FRANCE"],
        "correctAnswer": "SOVIET UNION"
    },
    {
        "question": "What research and development project produced the first nuclear weapons during World War II?",
        "answerChoices": ["OPPENHEIMER PROJECT", "ALAN PARSONS PROJECT", "PHILADELPHIA PROJECT", "MANHATTAN PROJECT"],
        "correctAnswer": "MANHATTAN PROJECT"
    },
    {
        "question": 'What country sent reinforcements in the form of "Division Azul" to aid Germany in its WWII attack on the Soviet Union?',
        "answerChoices": ["SPAIN", "MEXICO", "ITALY", "ARGENTINA"],
        "correctAnswer": "SPAIN"
    },
    {
        "question": "What was the code name for the Battle of Normandy?",
        "answerChoices": ["OPERATION PANTHER", "OPERATION PILEDRIVER", "OPERATION OMAHA", "OPERATION OVERLORD"],
        "correctAnswer": "OPERATION OVERLORD"
    },
    {
        "question": "What was the largest battleship of World War 2?",
        "answerChoices": ["KONGO", "BISMARCK", "MISSOURI", "YAMATO"],
        "correctAnswer": "YAMATO"
    },
    {
        "question": "What was the first action the Nazis took against Jews?",
        "answerChoices": ["STRIPPED THEM OF CITIZENSHIP", "BOYCOTT OF JEWISH BUSINESSES", "REGISTRATION OF ALL JEWS", "CONCENTRATION CAMPS"],
        "correctAnswer": "BOYCOTT OF JEWISH BUSINESSES"
    },
    {
        "question": "Which battle involved the largest engagement of tanks in history?",
        "answerChoices": ["BATTLE OF KURSK", "BATTLE OF THE BULGE", "BATTLE OF BERLIN", "BATTLE OF MIDWAY"],
        "correctAnswer": "BATTLE OF KURSK"
    },
    {
        "question": "After World War II, Germany was divided into how many zones of occupation?",
        "answerChoices": ["2", "3", "4", "12"],
        "correctAnswer": "4"
    },
    {
        "question": "What was the last major battle of World War II?",
        "answerChoices": ["BATTLE OF IWO JIMA", "BATTLE OF PELELIU", "BATTLE OF JUTLAND", "BATTLE OF OKINAWA"],
        "correctAnswer": "BATTLE OF OKINAWA"
    },
    {
        "question": "What was the second city the United States dropped a nuclear bomb on?",
        "answerChoices": ["TOKYO", "YOKOHAMA", "NAGASAKI", "HIROSHIMA"],
        "correctAnswer": "NAGASAKI"
    },
    {
        "question": "On which beach did the Americans run into a firestorm of resistance during the D-Day landings?",
        "answerChoices": ["GOLD", "OMAHA", "JUNO", "UTAH"],
        "correctAnswer": "OMAHA"
    },
    {
        "question": "Which of the following were systematically murdered by the Nazis?",
        "answerChoices": ["GYPSIES", "HOMOSEXUALS", "JEWS", "ALL OF THESE"],
        "correctAnswer": "ALL OF THESE"
    },
    {
        "question": "In a Nazi concentration camp, a pink triangle identified a prisoner as?",
        "answerChoices": ["JEWISH", "POLITICAL PRISONER", "JEHOVAH'S WITNESS", "HOMOSEXUAL"],
        "correctAnswer": "HOMOSEXUAL"
    },
    {
        "question": "What English code breaker created a machine that helped to decrypt Nazi messages?",
        "answerChoices": ["CHARLES BABBAGE", "STEPHEN HAWKING", "ALAN TURING", "SIR WILLIAM THOMPSON"],
        "correctAnswer": "ALAN TURING"
    },
    {
        "question": "Where was the first atom bomb tested?",
        "answerChoices": ["NEW MEXICO", "NEVADA", "HIROSHIMA", "ARIZONA"],
        "correctAnswer": "NEW MEXICO"
    }
];

    qa = shuffle(qa);
}
qa = shuffle(qa);
var theGame, askQuestion;
let count;
let unAnswered = 0;
let wrongAnswers = 0;
let rightAnswers = 0;

function outOfTime(correctAnswer) {
    $('ul').empty();
    $('ul').append('<p><b>TIME IS UP!!!</b><br>The correct answer was: <br><b>' + correctAnswer + '</b></p>')
    unAnswered+=1
}

function displayScore() {
    $('.time-remaining').empty();
    $('.question').empty();
    $('.answer-choices').empty();
    var score = $('<div>');
    score.addClass('display-score');
    score.html('<h1>Game Over</h1><p>You got this many right: '+rightAnswers+
    '</p><p>You got this many wrong: '+wrongAnswers+'</p><p>And you decided to not answer this many: ' + unAnswered + '</p>');
    $('.score').append(score);
    $('.score').append('<button class="restart btn btn-outline-dark">Restart Game</button>')
}

function resetScores() {
    rightAnswers = 0;
    wrongAnswers = 0;
    unAnswered = 0;
}

function displayQuestion() {
    count = 9;
    
    function displayCountDown() {
        var timeRemaining = $('<p class="time">');
        timeRemaining.text('Time Remaining: ' + count + ' seconds')
    
        if($('.time').length) {
            $('.time-remaining').html(timeRemaining);
        } else {
            $('.time-remaining').append(timeRemaining);
        }
        count--;
    
        if (count == -1) {
            outOfTime(askQuestion.correctAnswer)
            clearInterval(theGame);
            setTimeout(displayQuestion, 3500);
        }
    }

    if (qa.length == 0) { 
        displayScore();
        clearInterval(theGame);
        resetQuestions();
        resetScores();

        // create button
        $('.restart').on("click", function(){
            $('.score').empty();
            displayQuestion();
        });

    } else {    
        askQuestion = qa.pop();
        var quest = $('<h2 class="display-questions">');
        var answers = $('<ul>');
        var answersList = [];

        quest.text(askQuestion.question);

        askQuestion.answerChoices.forEach(function(answer) {
            answersList.push('<li><button class="btn btn-outline-dark" select-answer="' + answer + '">' + answer +'</button></li>')
        })
        answers.append(answersList.join(''));

        if ($('.display-questions')) {
            $('.question').html(quest);
            $('.answer-choices').html(answers);
        } else {
            $('.question').append(quest);
            $('.answer-choices').append(answers);
        }
        $('.time-remaining').html('<p class="time">Time Remaining: </p>');
        theGame = setInterval(displayCountDown, 1000);

        $('button').on("click", function () {
            var selectedAnswer = $(this).attr('select-answer');
            if (selectedAnswer == askQuestion.correctAnswer) {
                $('ul').empty();
                $('ul').append('<p><b>Correct!!!</b><br>The answer was: <br><b>' + askQuestion.correctAnswer + '</b></p>')                    
                rightAnswers++;
                clearInterval(theGame);
                setTimeout(displayQuestion, 3500);
            } else {
                $('ul').empty();
                $('ul').append('<p><b>Wrong!!!</b><br>The correct answer was: <br><b>' + askQuestion.correctAnswer + '</b></p>')                    
                wrongAnswers++;
                clearInterval(theGame);
                setTimeout(displayQuestion, 3500);
            }
        })
    }
}




function startGame() {
    displayQuestion()
}

$('.start-game').append($('<button id="start-game" class="btn btn-outline-dark">').text("Start Game"))
$('#start-game').on("click", function() {
    $('.start-game').empty();
    startGame();
});
