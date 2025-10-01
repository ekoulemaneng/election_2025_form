// Get the current URL
const url = new URL(window.location.href);
// Get the 'lang' parameter from the URL, default to 'en' if not present
const language = url.searchParams.get('lang') || 'fr';
// Get the poll station ID from the URL
const pollStationId = url.searchParams.get('station');
// Get the region name where the poll station is located from the URL
const region = url.searchParams.get('reg');
// Get the division name where the poll station is located from the url
const division = url.searchParams.get('div');
// Get the council name where the pool station is located from the url
const council = url.searchParams.get('ccl');
// Get the location name where the poll station is located from the url
const _location = url.searchParams.get('loc');

// Get the form title element from the DOM
const formTitleElement = document.getElementById('form-title');
// Set the form title based on the 'lang'
formTitleElement.textContent = language === 'fr' ? 'Formulaire de résultat' : 'Result Form';

// Get the definition list element to hold poll station information
const poolStationInfoElement = document.getElementById('poll-station-info');

// Get the 'dt' element to display the pool station identifier from the DOM
const stationIdDefinitionTerm = document.getElementById('dt-poll-station');
// Set the text content of the definition term based on the 'lang' parameter
stationIdDefinitionTerm.textContent = language === 'fr' ? 'Bureau de vote' : 'Poll Station';
// Create a 'dd' element to display the poll station ID
const stationIdDefinitionDescription = document.getElementById('dd-poll-station');
// Set the text content of the definition description to the poll station ID
stationIdDefinitionDescription.textContent = pollStationId;

// Get the 'dt' element to display the region where the pool station is located from the DOM
const regionDefinitionTerm = document.getElementById('dt-region');
// Set the text content of the definition term based on the 'lang' parameter
regionDefinitionTerm.textContent = language === 'fr' ? 'Région' : 'Region';
// Create a 'dd' element to display the region name
const regionDefinitionDescription = document.getElementById('dd-region');
// Set the text content of the definition description to the region name
regionDefinitionDescription.textContent = region;

// Get the 'dt' element to display the division where the pool station is located from the DOM
const divisionDefinitionTerm = document.getElementById('dt-division');
// Set the text content of the definition term based on the 'lang' parameter
divisionDefinitionTerm.textContent = language === 'fr' ? 'Département' : 'Division';
// Create a 'dd' element to display the division name
const divisionDefinitionDescription = document.getElementById('dd-division');
// Set the text content of the definition description to the division name
divisionDefinitionDescription.textContent = division;

// Create a 'dt' element to display the council where the pool station is located from the DOM
const councilDefinitionTerm = document.getElementById('dt-council');
// Set the text content of the definition term based on the 'lang' parameter
councilDefinitionTerm.textContent = language === 'fr' ? 'Commune' : 'Council';
// Create a 'dd' element to display the council name
const councilDefinitionDescription = document.getElementById('dd-council');
// Set the text content of the definition description to the council name
councilDefinitionDescription.textContent = council;

// Get the 'dt' element to display the location where the pool station is located from the DOM
const locationDefinitionTerm = document.getElementById('dt-location');
// Set the text content of the definition term based on the 'lang' parameter
locationDefinitionTerm.textContent = language === 'fr' ? 'Emplacement' : 'Location';
// Create a 'dd' element to display the council name
const locationDefinitionDescription = document.getElementById('dd-location');
// Set the text content of the definition description to the council name
locationDefinitionDescription.textContent = _location;

// Get the form body element from the DOM
const formBodyElement = document.getElementById('form-body');

// Create a heading for the general information section
const generalInfoHeading = document.getElementById('general-info-header');
generalInfoHeading.textContent = language === 'fr' ? 'Informations générales' : 'General Information';

// Get the hidden input to store the poll station ID from the DOM
const pollStationInput = document.getElementById('poll_station_id');
pollStationInput.value = pollStationId;

// Get the label for registered voters input from the DOM
const registeredVotersLabel = document.getElementById('label_registered_voters');
registeredVotersLabel.textContent = language === 'fr' ? 'Nombre d\'électeurs inscrits' : 'Number of registered voters';

// Get the label for votes cast input from the DOM
const votesCastLabel = document.getElementById('label_votes_cast');
votesCastLabel.textContent = language === 'fr' ? 'Nombre de suffrages exprimés' : 'Number of votes cast';

// Get the label for valid votes input from the DOM
const validVotesLabel = document.getElementById('label_valid_votes');
validVotesLabel.textContent = language === 'fr' ? 'Nombre de votes valides' : 'Number of valid votes';

// Get the label for invalid votes input from the DOM
const invalidVotesLabel = document.getElementById('label_invalid_votes');
invalidVotesLabel.textContent = language === 'fr' ? 'Nombre de votes invalides' : 'Number of invalid votes';

// Get the heading for the candidates section for the DOM
const candidatesHeading = document.getElementById('votes-distribution-header');
candidatesHeading.textContent = language === 'fr' ? 'Répartitions des votes valides' : 'Distribution of valid votes';

// Get the 'button' element to submit the form
const submitButtonElement = document.getElementById('submit-form');
submitButtonElement.textContent = language === 'fr' ? 'Envoyer' : 'Send';

// Get the 'button' element to reset the form
const resetButtonElement = document.getElementById('reset-form');
resetButtonElement.textContent = language === 'fr' ? 'Réinitialiser' : 'Reset';

// Get the 'button' element to validate the form
const validateButtonElement = document.getElementById('validate-form');
validateButtonElement.textContent = language === 'fr' ? 'Valider' : 'Validate';

// Get the 'button' element to modify the form
const modifyButtonElement = document.getElementById('modify-form');
modifyButtonElement.textContent = language === 'fr' ? 'Modifier' : 'Modify';

// Get the 'fieldset' element that contains general information inputs
const generalInfoFieldset = document.getElementById('general-info');

// Get the 'fieldset' element that contains votes distribution inputs
const votesDistributionFieldset = document.getElementById('votes-distribution');

// Get the definitions list that displays the results summary
const resultsSummaryElement = document.getElementById('results-summary');

// Get the definition term and description for registered voters in the results summary
const resultRegisteredVotersTerm = document.getElementById('dt-registered-voters');
const resultRegisteredVotersDescription = document.getElementById('dd-registered-voters');
// Set the text content for registered voters in the results summary
resultRegisteredVotersTerm.textContent = language === 'fr' ? 'Électeurs inscrits' : 'Registered voters';

// Get the definition term and description for votes cast in the results summary
const resultVotesCastTerm = document.getElementById('dt-votes-cast');
const resultVotesCastDescription = document.getElementById('dd-votes-cast');
// Set the text content for votes cast in the results summary
resultVotesCastTerm.textContent = language === 'fr' ? 'Suffrages exprimés' : 'Votes cast';

// Get the definition term and description for valid votes in the results summary
const resultValidVotesTerm = document.getElementById('dt-valid-votes');
const resultValidVotesDescription = document.getElementById('dd-valid-votes');
// Set the text content for valid votes in the results summary
resultValidVotesTerm.textContent = language === 'fr' ? 'Votes valides' : 'Valid votes';

// Get the definition term and description for invalid votes in the results summary
const resultInvalidVotesTerm = document.getElementById('dt-invalid-votes');
const resultInvalidVotesDescription = document.getElementById('dd-invalid-votes');
// Set the text content for invalid votes in the results summary
resultInvalidVotesTerm.textContent = language === 'fr' ? 'Votes invalides' : 'Invalid votes';

// Get the description term for Ateki votes in the results summary
const resultAtekiVotesDescription = document.getElementById('dd-ateki-votes');

// Get the definition term for Bello votes in the results summary
const resultBelloVotesDescription = document.getElementById('dd-bello-votes');

// Get the definition term for Biya votes in the results summary
const resultBiyaVotesDescription = document.getElementById('dd-biya-votes');

// Get the definition term for Bougha votes in the results summary
const resultBoughaVotesDescription = document.getElementById('dd-bougha-votes');

// Get the definition term for Tchiroma votes in the results summary
const resultTchiromaVotesDescription = document.getElementById('dd-tchiroma-votes');

// Get the definition term for Iyodi votes in the results summary
const resultIyodiVotesDescription = document.getElementById('dd-iyodi-votes');

// Get the definition term for Kwemo votes in the results summary
const resultKwemoVotesDescription = document.getElementById('dd-kwemo-votes');

// Get the definition term for Libii votes in the results summary
const resultLibiiVotesDescription = document.getElementById('dd-libii-votes');

// Get the definition term for Matomba votes in the results summary
const resultMatombaVotesDescription = document.getElementById('dd-matomba-votes');

// Get the definition term for Akere votes in the results summary
const resultAkereVotesDescription = document.getElementById('dd-akere-votes');

// Get the definition term for Osih votes in the results summary
const resultOsihVotesDescription = document.getElementById('dd-osih-votes');

// Get the definition term for Tomaino votes in the results summary
const resultTomainoVotesDescription = document.getElementById('dd-tomaino-votes');

// Get all input elements in the form
const inputElements = formBodyElement.querySelectorAll('input[type="number"]');
// Add event listeners to each input element
inputElements.forEach(input => {
    input.addEventListener('input', () => {
        // Remove the leading zeros
        input.value = String(parseInt(input.value, 10));
        // If the input value is negative, set it to zero
        if (parseInt(input.value, 10) < 0 || isNaN(parseInt(input.value, 10))) {
            input.value = '0';
        }
        // If the input value exceeds 500, set it to 500
        if (parseInt(input.value, 10) > 500) {
            input.value = '500';
        }
    });
});
    
// Collect form data into an object
const data = {};

// Add an event listener to the button to handle form validation
validateButtonElement.addEventListener('click', () => {
    // Collect form data into an object
    new FormData(formBodyElement).forEach((value, key) => {
        data[key] = !isNaN(value.trim()) ? parseInt(value.trim(), 10) : value.trim();
    });
    // Validate the collected data
    const validation = votesValidation(data);
    if (!validation.ok) {
        window.Telegram?.WebApp?.showAlert(validation.message);
        return;
    }
    console.log(data);
    // Update the results summary
    resultRegisteredVotersDescription.textContent = data['registered_voters'];
    resultVotesCastDescription.textContent = data['votes_cast'];
    resultValidVotesDescription.textContent = data['valid_votes'];
    resultInvalidVotesDescription.textContent = data['invalid_votes'];
    resultAtekiVotesDescription.textContent = data['ateki_votes'];
    resultBelloVotesDescription.textContent = data['bello_votes'];
    resultBiyaVotesDescription.textContent = data['biya_votes'];
    resultBoughaVotesDescription.textContent = data['bougha_votes'];
    resultTchiromaVotesDescription.textContent = data['tchiroma_votes'];
    resultIyodiVotesDescription.textContent = data['iyodi_votes'];
    resultKwemoVotesDescription.textContent = data['kwemo_votes'];
    resultLibiiVotesDescription.textContent = data['libii_votes'];
    resultMatombaVotesDescription.textContent = data['matomba_votes'];
    resultAkereVotesDescription.textContent = data['akere_votes'];
    resultOsihVotesDescription.textContent = data['osih_votes'];
    resultTomainoVotesDescription.textContent = data['tomaino_votes'];
    // Hide the validation and reset buttons
    validateButtonElement.style.display = 'none';
    resetButtonElement.style.display = 'none';
    // Hide the general info and votes distribution fieldsets
    document.getElementById('general-info').style.display = 'none';
    document.getElementById('votes-distribution').style.display = 'none';
    // Show the submit and modify buttons
    submitButtonElement.style.display = 'block';
    modifyButtonElement.style.display = 'block';
    // Show the results summary
    resultsSummaryElement.style.display = 'grid';
});

//
modifyButtonElement.addEventListener('click', () => {
    // Hide the submit and modify buttons
    submitButtonElement.style.display = 'none';
    modifyButtonElement.style.display = 'none';
    // Hide the results summary
    resultsSummaryElement.style.display = 'none';
    // Show the validation and reset buttons
    validateButtonElement.style.display = 'block';
    resetButtonElement.style.display = 'block';
    // Show the general info and votes distribution fieldsets
    document.getElementById('general-info').style.display = 'block';
    document.getElementById('votes-distribution').style.display = 'block';
});

// Add an event listener to the button to handle form submission
formBodyElement.addEventListener('submit', (event) => {
    // Prevent default submit action
    event.preventDefault();
    // Send the data to the Telegram bot
    window.Telegram?.WebApp?.sendData(JSON.stringify(data));
    // Optionally, show a confirmation message
    window.Telegram?.WebApp?.showAlert(language === 'fr' ? 'Données envoyées avec succès!' : 'Data sent successfully!', () => {
        // Reset the form after submission
        formBodyElement.reset(); 
    });
});

// Add an event listener to the button to handle form reset
formBodyElement.addEventListener('reset', (event) => {
    // Prevent the default reset action
    event.preventDefault();
    // Confirm before resetting the form
    window.Telegram?.WebApp?.showConfirm(language === 'fr' ? 'Reinitialiser tous les champs' : 'Reset all fields?', confirmed => {
        if (confirmed) {
            formBodyElement.reset();
        }
    });
});

// Initialize Telegram Web App
if (window.Telegram?.WebApp) {
    // Notify Telegram that the Web App is ready
    Telegram.WebApp.ready();
    // Optionally, you can expand the Web App to full height
    Telegram.WebApp.expand();
    // Enable closing confirmation to prevent accidental closure
    Telegram.WebApp.enableClosingConfirmation();
    // Set the color scheme based on Telegram's theme
    document.documentElement.className = window.Telegram.WebApp.colorScheme;
}


// Vote data validation function
const votesValidation = data => {
    // Check if the number of registered voters is greater than zero
    if (data['registered_voters'] === 0) {
        return {
            ok: false, 
            message: language === 'fr' ? 'Le nombre d\'électeurs inscrits doit être supérieur à zéro.' : 'The number of registered voters must be greater than zero.'
        };
    }
    // Check if the number of votes cast is not greater than the number of registered voters 
    if (data['votes_cast'] > data['registered_voters']) {
        return {
            ok: false, 
            message: language === 'fr' ? 'Le nombre de votes exprimés ne peut pas dépasser le nombre d\'électeurs inscrits.' : 'The number of votes cast cannot exceed the number of registered voters.'
        };
    }
    // Check if the total of valid and invalid votes equals the number of votes cast
    if (data['valid_votes'] + data['invalid_votes'] !== data['votes_cast']) {
        return {
            ok: false, 
            message: language === 'fr' ? 'Le total des votes valides et invalides doit être égal au nombre de votes exprimés.' : 'The total of valid and invalid votes must equal the number of votes cast.'
        };
    }
    // Check if the total votes for candidates equals the number of valid votes
    if (data['valid_votes'] !== ['ateki', 'bello', 'biya', 'bougha', 'tchiroma', 'iyodi', 'kwemo', 'libii', 'matomba', 'akere', 'osih', 'tomaino'].reduce((sum, candidate) => sum + (data[`${candidate}_votes`] || 0), 0)) {
        return {
            ok: false, 
            message: language === 'fr' ? 'Le total des votes pour les candidats doit être égal au nombre de votes valides.' : 'The total votes for candidates must equal the number of valid votes.'
        };
    }
    // If all checks pass, return okay
    return { ok: true };
}
