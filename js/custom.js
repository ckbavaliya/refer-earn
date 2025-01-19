	$(".js-height-full").height($(window).height());
        $(".js-height-parent").each(function(){
        $(this).height($(this).parent().first().height());
    });
	function count($this){
		var current = parseInt($this.html(), 10);
		current = current + 1; /* Where 50 is increment */
		
		$this.html(++current);
			if(current > $this.data('count')){
				$this.html($this.data('count'));
			} else {    
				setTimeout(function(){count($this)}, 50);
			}
		}        
		
		$(".stat-timer").each(function() {
		  $(this).data('count', parseInt($(this).html(), 10));
		  $(this).html('0');
		  count($(this));
	});
	$('#header').affix({
		offset: {
			top: 100,
			bottom: function() {
			return (this.bottom = $('.footer').outerHeight(true))
			}
		}
	})

	document.addEventListener('DOMContentLoaded', function () {
		const questions = [
			{
				question: "1. UPS નું પૂરું નામ શું છે?",
				options: ["Uninterruptible Power Source", "Uninterruptible Power Supply", "Unsupported Power Supply", "Unsupported Power Source"],
				correctAnswer: 1
			},
			{
				question: "2. કોઈ સોફ્ટવેરની જૂની આવૃત્તિના સ્થાને નવી અધતન આવૃત્તિ ઉમેરવાની પ્રક્રિયાને શું કહે છે?",
				options: ["અપગ્રેડ", "રાઈડ", "બેકઅપ", "રીસ્ટોર"],
				correctAnswer: 0
			},
			{
				question: "3. ઓપ્ટીકલ ફાઈબરનો ઉપયોગ વધુ ને વધુ શામાં થાય છે?",
				options: ["Bank", "Network", "Electricity", "Server"],
				correctAnswer: 1
			},
			{
				question: "4. બાયનરી પદ્ધતિમાં કેટલા અંક હોય છે?",
				options: ["2", "3", "1", "4"],
				correctAnswer: 0
			},
			{
				question: "5. કી-બોર્ડમાં પ્રથમ લાઈનમાં ડાબેથી જમણી કીનો ક્રમ કયો હોય છે?",
				options: ["ZXCVB", "QWERT", "LKJHG", "ABCDR"],
				correctAnswer: 1
			},
			{
				question: "6. નીચેના માંથી કયો એડિટર પ્રોગ્રામ દર્શાવે છે?",
				options: ["Paint", "Address Book", "Power Point", "Notpad"],
				correctAnswer: 3
			},
			{
				question: "7. CPU નું સંપૂર્ણ નામ શું છે?",
				options: ["Central Processing User", "Control Processing Unit ", "Central Processing Universe", "Central Processing Unit"],
				correctAnswer: 3
			},
			{
				question: "8. કમ્પ્યુટરના પિતા તરીકે કોને ઓળખવામાં આવે છે?",
				options: ["ચાલ્સ બેબેજ", "જેફ બાઝોસ ", "સ્ટીવ જોબ્સ", "એલોન મસ્ક"],
				correctAnswer: 0
			},
			{
				question: "9. IBM નું પૂરું નામ શું છે?",
				options: ["Indian Business Machine", "International Business Machine ", "International Business Mine", "International Best Machine"],
				correctAnswer: 1
			},
			{
				question: "10. ઈ-મેઈલમાં કોઈ એક ફાઈલને જોડવી હોય તો કયા ઓપ્સનની જરૂર પડે છે?",
				options: ["Forward", "Reply ", "Attech", "Join"],
				correctAnswer: 2
			},
			{
				question: "11. 1 બાઇટ એટલે કેટલા બીટ?",
				options: ["4", "2 ", "8", "6"],
				correctAnswer: 2
			},
			{
				question: "12. 1 નિબલ એટલે કેટલા બીટ?",
				options: ["4", "6", "8", "2"],
				correctAnswer: 0
			},
			{
				question: "13. નીચેના પૈકી કયુંનેટવર્ક ડિવાઈઝ નથી?",
				options: ["બ્રીજ", "મોડેમ", "રાઉટર", "સ્વીચ"],
				correctAnswer: 1
			},
			{
				question: "14. ISRO જેવી સંસ્થાનું ડોમેઇન નામ શુ હોય છે?",
				options: [".in", ".org", "રાઉટર", "સ્વીચ"],
				correctAnswer: 1
			},
			{
				question: "15. RENAME માટે કઈ શૉર્ટકટ કી વપરાય છે?",
				options: ["F2", "F6", "F7", "F9"],
				correctAnswer: 0
			},
			{
				question: "16. ટ્રાન્ઝિસ્ટરની શોધ કયા વર્ષમાં થઇ?",
				options: ["1967", "1948", "1984", "1963"],
				correctAnswer: 1
			},
			{
				question: "17. મિલિસેકન્ડ એક સેકન્ડનો કેટલામો ભાગ છે?",
				options: ["100", "1000", "100000", "10000"],
				correctAnswer: 1
			},
			{
				question: "18. માઈક્રોસોફ્ટના સ્થાપકનુ નામ જણાવો?",
				options: ["બીલ ગેસ્ટ", "લેરી પેજ", "પીટર", "આપેલ એક પણ નહી."],
				correctAnswer: 0
			},
			{
				question: "19. કમ્પ્યુટરના ભોતિક ભાગને શું કહે છે?",
				options: ["સ્પાયવેર", "સોફ્ટવેર", "મેલવેર", "હાર્વડ ેર"],
				correctAnswer: 3
			},
			{
				question: "20. ઈન્ટરનેટની શોધ કયા દેશે કરી છે?",
				options: ["જાપાન", "ભારત ", "ઈંગલેન્ડ", "અમેરિકા"],
				correctAnswer: 3
			},
			{
				question: "21. કમ્પ્યુટરની ઇન્ટિગ્રેટર સર્કિટ ચીપ(IC) શેની બનેલી હોય છે?",
				options: ["સીલીકોન", "લોખંડ", "જસત", "સોનું"],
				correctAnswer: 0
			},
			{
				question: "22. RAM નુ પૂરું નામ શું છે?",
				options: ["Random Access Memory", "Random Access Money", "Read Access Memory", "None"],
				correctAnswer: 0
			},
			{
				question: "23. ALU નુ પૂરું નામ શું છે?",
				options: ["Arithmetic Local Unit", "Arithmetic Logic Unit", "Apple Logic Unit", "None"],
				correctAnswer: 1
			},
			{
				question: "24. કમ્પ્યુટર પર બ્લીંક થનાર ચિન્હ ને શું છે?",
				options: ["લોગો", "માઉસ", "કર્સર", "કીબોર્ડ"],
				correctAnswer: 2
			},
			{
				question: "25. કમ્પ્યુટર પર બ્લીંક થનાર ચિન્હ ને શું છે?",
				options: ["65536", "65531", "65533", "65532"],
				correctAnswer: 0
			},
			{
				question: "26. HTML નુ પૂરું નામ જણાવો?",
				options: ["Hyper Text Markup Language", "Hyper Text Mackup Language", "Hyper Toy Markup Language", "High Text Markup Language"],
				correctAnswer: 0
			},
			{
				question: "27. ROM નુ પૂરું નામ આપો?",
				options: ["Read Only Monopoly", "Read Our Memory", "Rat Only Memory", "Read Only Memory"],
				correctAnswer: 3
			},
			{
				question: "28. W.W.W ના શોધક નુ નામ જણાવો?",
				options: ["બીલ ગેસ્ટ", "ટિમ બર્નર્સ-લી", "પીટર", "લેરી પેજ"],
				correctAnswer: 1
			},
			{
				question: "29. Keyboard એ .............સાધન છે?",
				options: ["Output", "Processing", "Input", "None"],
				correctAnswer: 2
			},
			{
				question: "30. Display એ .............સાધન છે?",
				options: ["Output", "Processing", "None", "Input"],
				correctAnswer: 0
			},
		];
		const itemsPerPage = 5; // Show 5 questions per page
		let currentPage = 0;
		const totalPages = Math.ceil(questions.length / itemsPerPage);

		const quizContainer = document.getElementById('questions');

		// Function to display questions for the current page
		function loadQuestions(page) {
			quizContainer.innerHTML = ''; // Clear previous questions

			const start = page * itemsPerPage;
			const end = start + itemsPerPage;

			const currentQuestions = questions.slice(start, end); // Get 5 questions for the current page

			currentQuestions.forEach((q, index) => {
				const questionElement = document.createElement('div');
				questionElement.classList.add('question');
				questionElement.innerHTML = `<h2>${q.question}</h2>`;

				const optionsElement = document.createElement('div');
				optionsElement.classList.add('options');

				q.options.forEach((option, i) => {
					const optionButton = document.createElement('button');
					optionButton.classList.add('option');
					optionButton.textContent = option;
					optionButton.dataset.questionIndex = index;
					optionButton.dataset.optionIndex = i;

					optionButton.addEventListener('click', function () {
						checkAnswer(index + start, i, optionButton);
					});

					optionsElement.appendChild(optionButton);
				});

				questionElement.appendChild(optionsElement);
				quizContainer.appendChild(questionElement);
			});
		}

		// Function to check the answer
		function checkAnswer(questionIndex, optionIndex, optionButton) {
			const question = questions[questionIndex];
			const options = document.querySelectorAll(`.question:nth-child(${(questionIndex % itemsPerPage) + 1}) .option`);

			options.forEach(option => option.disabled = true);  // Disable all options after a selection

			if (optionIndex === question.correctAnswer) {
				optionButton.classList.add('correct');
			} else {
				optionButton.classList.add('wrong');
				options[question.correctAnswer].classList.add('correct'); // Highlight the correct answer
			}
		}

		// Function to update pagination controls
		function updatePaginationControls() {
			document.querySelector('.pages').textContent = `Page ${currentPage + 1} of ${totalPages}`;
		}

		// Initial page load
		loadQuestions(currentPage);
		updatePaginationControls();

		// Next button click
		document.querySelector('.next').addEventListener('click', function () {
			if (currentPage < totalPages - 1) {
				currentPage++;
				loadQuestions(currentPage);
				updatePaginationControls();
			}
		});

		// Prev button click
		document.querySelector('.prev').addEventListener('click', function () {
			if (currentPage > 0) {
				currentPage--;
				loadQuestions(currentPage);
				updatePaginationControls();
			}
		});

	});
