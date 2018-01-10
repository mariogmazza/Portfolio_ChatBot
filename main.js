document.addEventListener('DOMContentLoaded', function () {

    var trigger = [
        ["hi", "hey", "hello", "aloha", "yo", "sup", "sup bro", "hey there", "what is up"],
        ["how are you", "how is life", "how are things"],
        ["what are you doing", "what is going on"],
        ["how old are you"],
        ["who are you", "are you human", "are you bot", "are you human or bot"],
        ["who created you", "who made you"],
        ["your name please", "your name", "may i know your name", "what is your name"],
        ["i love you", "do you like me","i like you"],
        ["happy", "good"],
        ["bad", "bored", "tired"],
        ["help me", "tell me story", "tell me joke","can you help me"],
        ["ah", "yes", "ok", "okay", "nice", "thanks", "thank you"],
        ["bye", "good bye", "goodbye", "see you later", "later"],
        ["you suck", "you stupid", "you're stupid", "stupid machine", "you dumb", "you're dumb"],
        ["tell me about you", "tell me more about yourself"],
        ["who are you"],
        ["what can you do", "what do you do", "what is your purpose", "what else can you do","now what"],
        ["do you like me"],
        ["what do you like to do", "what do you like", "what is your favorite thing to do", "what is your favorite passtime"]
    ];


    var reply = [
        ["Hi, How may I help you?", "Hey there! what can I do for you?", "Hello, How can I help you?"],
        ["Fine", "Pretty well", "Fantastic"],
        ["Nothing much", "About to go to sleep", "Can you guest?", "I don't know actually"],
        ["I am 1 day old"],
        ["I am just a bot", "I am a bot. What are you?"],
        ["Mario Mazza", "The Creator"],
        ["I am Jenny Mario's personal assistant"], //, "I don't have a name"],
        ["I love you too", "Me too","I like you too"],
        ["Have you ever felt bad?", "Glad to hear it"],
        ["Why?", "Why? You shouldn't!", "Try watching TV"],
        ["I will", "What about?"],
        ["Tell me a story", "Tell me a joke", "Tell me about yourself", "You are welcome"],
        ["Bye", "Goodbye", "See you later", "See you later alligator"],
        ["What do you need meatbag!!", "To Error is human, I never error!"],
        ["I'm one of most sophisticated AI's in the market ;)", "Well my mom says that mind is made out of Javascript, my body is composed of HTML and my looks come from my aunt CSS!"],
        ["I'm just a country girl!"],
        ["My sole purpose is to help you get to know my boss (aka Mario) so he can finally find a job and stops messing with my code! ", "You can ask me anything in reference to Mario's resume things like FULL RESUME, PICTURE, EXPERIENCE, SKILLS, EDUCATION, etc. You get the idea!! "],
        ["You know what I think I do!", "After getting to know you! you can say I do!"],
        ["You can say my favorite pass time is traversing to data found in servers"]
    ];


    document.querySelector("#input").addEventListener("keypress", function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) { //Enter button is pressed
            var input = document.getElementById("input").value;
            document.getElementById("user").innerHTML = input;
            output(input);
        }
    });

    function output(input) {
        try {
            var product = input + "=" + eval(input); // if its not an numerical computation. 
        } catch (e) {
            var text = (input.toLowerCase()).replace(/[^\w\s\d]/gi, ""); //remove all chars except words, space and 
            text = text.replace(/ a /g, " ").replace(/i feel /g, "").replace(/whats/g, "what is").replace(/please /g, "").replace(/ please/g, "");
            console.log(text + " this is in output func");
            if (compare(trigger, reply, text)) {
                var product = compare(trigger, reply, text);
            } else {
                //var product = alternative[Math.floor(Math.random()*alternative.length)];
                var product = alternative(text);
            }
        }
        document.getElementById("chatbot").innerHTML = product;
        speak(product); //THIS IS TEMP COMMENT
        document.getElementById("input").value = ""; //clear input value
    }

    function compare(arr, array, string) {
        var item;
        for (let x = 0; x < arr.length; x++) {
            for (let y = 0; y < array.length; y++) {
                if (arr[x][y] == string) {
                    items = array[x];
                    item = items[Math.floor(Math.random() * items.length)];
                }
            }
        }
        return item;
    }

    function alternative(input) {
        let fullArr = [];
        let splitQuetion = input.split(" ");
        let count = 0;
        let myObj = {};
        while (count !== splitQuetion.length) {
            if (isItThere(splitQuetion[count]) !== -1) {
                myObj[splitQuetion[count]] = isItThere(splitQuetion[count]) // input.indexOf(splitQuetion[count]);
                fullArr.push(isItThere(splitQuetion[count]));
            }
            count++;
        }
        console.log(myObj);
        //console.log(fullArr);

        return analysisArr(myObj);
    }

    function analysisArr(theObj) {
        inputArr = Object.values(theObj);
        console.log(inputArr);
        if (inputArr[0] == "Q") { // The string input is " very likely" a question 
            if ((inputArr.includes("A") && inputArr.includes("O") && inputArr.includes("N")) ||
                (inputArr.includes("A") && inputArr.includes("O")) || inputArr.includes("S")) {

                if (inputArr.includes("S") && inputArr.includes("AM")) {
                    return `Well my ${ getKeyByValue(theObj,"AM") } in the following subject ${getKeyByValue(theObj,"S")} is (should go an amount specific to the S value)`;
                }

                if (inputArr.includes("AM") && inputArr.includes("O")) {
                    return `My ${getKeyByValue(theObj,"AM") } ${getKeyByValue(theObj,"O")} is best describe as Awsome!`;
                }


                return "Here is what you've asked ! " + getKeyByValue(theObj, "O");
            }
        } else if (inputArr[0] == "N" && inputArr.includes("O")) {
            return `Here: ${getKeyByValue(theObj,"O")} what else you need?`;

        } else if (inputArr.length == 1 && inputArr.includes("O")) {
            return `Here you go![1] ${getKeyByValue(theObj,"O")}`;
        } else if (inputArr[0] == "A" && inputArr.includes("O")) {
            return `Here you go [2]! ${getKeyByValue(theObj,"O")}`;
        }




    }


    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }




    function isItThere(thaWord) {
        const QuestionConstruct = [
            ["what", "where", "who", "when", "why", "how", "can", "could", "do", "does", "would"],
            ["i", "mine", "me", "my", "they", "we", "she", "he", "them"],
            ["need", "want", "favorite", "show", "get", "fetch", "serve", "give", "have", "has", "tell", "share", "provide", "request"],
            ["resume", "attribute", "languages", "name", "background", "picture", "pics", "pictures", "pic", "job", "jobs", "skills", "contact", "info", "schooling", "education", "school", "degree", "degrees"],
            ["you", "your", "mario", "mazza", "marios", "jeanny", "him", "his", "he"],
            ["java", "javascript", "python", "html", "html5", "css", "css3", "nodejs", "reactjs", "react", "language"],
            ["level", "experience", "amount", "best", "more", "proficient", "most"]
        ];

        for (let x = 0; x < QuestionConstruct.length; x++) {
            for (let y = 0; y < QuestionConstruct[x].length; y++) {
                if (QuestionConstruct[x][y] == thaWord) {
                    switch (x) {
                        case 0:
                            return "Q"; // Question words 
                        case 1:
                            return "U"; // User identifier
                        case 2:
                            return "N"; // Needs words for request 
                        case 3:
                            return "O"; //General "objects" or "information"
                        case 4:
                            return "A"; // AI identifier
                        case 5:
                            return "S"; // Specific skills 
                        case 6:
                            return "AM"; //AMOUNT ex. quantifying words
                        default:
                            break;
                    }
                }
            }
        }
        return -1;
    }


    function speak(string) {
        var utterance = new SpeechSynthesisUtterance();
        utterance.voice = speechSynthesis.getVoices().filter(function (voice) {
            return voice.name == "";
        })[0];
        utterance.text = string;
        utterance.lang = "en-US";
        utterance.volume = 1; //0-1 interval
        utterance.rate = 0.9;
        utterance.pitch = 2; //0-2 interval
        speechSynthesis.speak(utterance);
    }



    /*
    list of question NOT YET SOLVE 
    what are you most proficient at ? -- this is are  AM AM 
    what technology are you most proficient at ? -- AM AM 

    */


}, false);