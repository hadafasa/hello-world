const newPartyForm = document.querySelector('#new-party-form');
const partyContainer = document.querySelector('#party-container');

const PARTIES_API_URL =
  'http://fsa-async-await.herokuapp.com/api/workshop/parties';
const GUESTS_API_URL =
  'http://fsa-async-await.herokuapp.com/api/workshop/guests';
const RSVPS_API_URL = 'http://fsa-async-await.herokuapp.com/api/workshop/rsvps';
const GIFTS_API_URL = 'http://fsa-async-await.herokuapp.com/api/workshop/gifts';

// get all parties
const getAllParties = async () => {
  try {
    const response = await fetch(PARTIES_API_URL);
    const parties = await response.json();
    return parties;
  } catch (error) {
    console.error(error);
  }
};

// get single party by id
const getPartyById = async (id) => {
  try {
    const response = await fetch(`${PARTIES_API_URL}/${id}`);
    const party = await response.json();
    return party;
  } catch (error) {
    console.error(error);
  }
};

// delete party
const deleteParty = async (id) => {
  try {
    const response = await fetch(`${PARTIES_API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      console.log(`Party with ID ${id} has been deleted.`);
    } else {
      console.error('Failed to delete party.');
    }
  } catch (error) {
    console.error(error);
  }
};

// render a single party by id
const renderSinglePartyById = async (id) => {
  try {
    // fetch party details from server
    const party = await getPartyById(id);

    // GET - /api/workshop/guests/party/:partyId - get guests by party id
    const guestsResponse = await fetch(`${GUESTS_API_URL}/party/${id}`);
    const guests = await guestsResponse.json();

    // GET - /api/workshop/rsvps/party/:partyId - get RSVPs by partyId
    const rsvpsResponse = await fetch(`${RSVPS_API_URL}/party/${id}`);
    const rsvps = await rsvpsResponse.json();

    // GET - get all gifts by party id - /api/workshop/parties/gifts/:partyId -BUGGY?
    // const giftsResponse = await fetch(`${PARTIES_API_URL}/party/gifts/${id}`);
    // const gifts = await giftsResponse.json();

    // create new HTML element to display party details
    const partyDetailsElement = document.createElement('div');
    partyDetailsElement.classList.add('party-details');
    partyDetailsElement.innerHTML = `
            <h2>${party.title}</h2>
            <p>${party.event}</p>
            <p>${party.city}</p>
            <p>${party.state}</p>
            <p>${party.country}</p>
            <h3>Guests:</h3>
            <ul>
            ${guests
              .map(
                (guest, index) => `
              <li>
                <div>${guest.name}</div>
                <div>${rsvps[index].status}</div>
              </li>
            `
              )
              .join('')}
          </ul>
          


            <button class="close-button">Close</button>
        `;
    partyContainer.appendChild(partyDetailsElement);

    // add event listener to close button
    const closeButton = partyDetailsElement.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
      partyDetailsElement.remove();
    });
  } catch (error) {
    console.error(error);
  }
};

// generate random color for party boxes
const generateRandomColor = (colors) => {
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomColorIndex];
  colors.splice(randomColorIndex, 1);
  return randomColor;
};

// randomize party colors
const randomizePartyColors = () => {
  const partyElements = document.querySelectorAll('.party');
const colors = getComputedStyle(document.documentElement).getPropertyValue('--colors').trim().split(', ');

partyElements.forEach((partyElement, index) => {
  const color = colors[index % colors.length];
  partyElement.style.backgroundColor = color;
});
};


// render all parties
const renderParties = async (parties) => {
  try {
    partyContainer.innerHTML = '';
    parties.forEach((party) => {
      const partyElement = document.createElement('div');
      partyElement.classList.add('party');
      partyElement.innerHTML = `
        <h2>${party.name}</h2>
        <p>${party.description}</p>
        <p>${party.date}</p>
        <p>${party.time}</p>
        <p>${party.location}</p>
        <button class="details-button" data-id="${party.id}">See Details</button>
        <button class="delete-button" data-id="${party.id}">Delete</button>
      `;
      partyContainer.appendChild(partyElement);

      // see details
      const detailsButton = partyElement.querySelector('.details-button');
      detailsButton.addEventListener('click', async (event) => {
        const partyId = event.target.dataset.id;
        await renderSinglePartyById(partyId);
      });

      // delete party
      const deleteButton = partyElement.querySelector('.delete-button');
      deleteButton.addEventListener('click', async (event) => {
        const partyId = event.target.dataset.id;
        await deleteParty(partyId);
        partyElement.remove();
      });
    });
    randomizePartyColors();
  } catch (error) {
    console.error(error);
  }
};


// init function
const init = async () => {
  try {
    const parties = await getAllParties();
    renderParties(parties);
  } catch (error) {
    console.error(error);
  }
};


init();
