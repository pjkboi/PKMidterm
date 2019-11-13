
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "American History",
    pages: [
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 1",
                    title: "What is your expected salary?",
                    choices: [
                        "$40000", "$45000", "$50000", "$55000", "More than $50000"
                    ],
                    correctAnswer: "More than $50000"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 2",
                    title: "Customer brings back food and says its cold. What do you do?'",
                    choicesOrder: "random",
                    choices: [
                        "Say Sorry no returns.", "Spit in their face.", "Take their food back and heat it up.", "Appologize and make them a new one."
                    ],
                    correctAnswer: "Appologize and make them a new one."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 3",
                    title: "You see a co-worker making fun of another co-worker. What do you do?",
                    choicesOrder: "random",
                    choices: [
                        "You join them.", "Tell them to stop.", "Report them.", "Run away."
                    ],
                    correctAnswer: "Report them."
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 4",
                    title: "What year was the playstation 2 launched?",
                    choices: [
                        "1998", "1999", "2000", "2001", "after 2001"
                    ],
                    correctAnswer: "2000"
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 5",
                    title: "You run out of toilet paper in the stall. What do you do?",
                    choices: [
                        "Use your hands.", "Ask the person next to you for some.", "Use the sandpaper found on the floor.", "Pull up your pants and leave."
                    ],
                    correctAnswer: "Ask the person next to you for some."
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 6",
                    title: "You stub your toe. What do you yell?",
                    choices: [
                        "OUCH!", "MOTHER@#$%!", "I'M GOING TO KILL YOU ALL!", "You bite your lip in silence."
                    ],
                    correctAnswer: "You bite your lip in silence."
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 7",
                    title: "You see someone holding the door for you but you are pretty far away. What do you do?",
                    choices: [
                        "Run for the door", "Take your time", "Tell them to go on", "Run away"
                    ],
                    correctAnswer: "Run for the door"
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 8",
                    title: "You're stuck in an elevator after you passed gass. What do you do?",
                    choices: [
                        "You blame the other guy", "You blame the dog", "You blame the attractive womam", "You owe up to it"
                    ],
                    correctAnswer: "You owe up to it"
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 9",
                    title: "When was the Civil War?",
                    choices: [
                        "1750-1800", "1800-1850", "1850-1900", "1900-1950", "after 1950"
                    ],
                    correctAnswer: "1850-1900"
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "Question 10",
                    title: "Your co-worker litters in the office. What do you do?",
                    choices: [
                        "Leave it", "Tell them to pick it up", "Pick it up", "Add to the litter"
                    ],
                    correctAnswer: "Tell them to pick it up"
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .location = "indexthanks.html";
    });

$("#surveyElement").Survey({ model: survey });