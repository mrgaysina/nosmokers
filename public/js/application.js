const endpoint = 'http://www.boredapi.com/api/activity/';
const buttonhelp = document.getElementById('buttonhelp');
const activityWrapper = document.querySelector('.activity');
const buttonsend = document.getElementById('buttonsend');
const inputsend = document.getElementById('inputsend');
const inputhelp = document.getElementById('inputhelp');
const trytofind = document.getElementById('trytofind');

const getActivity = async (event) => {
  event.preventDefault();
  const isFree = event.target.children.namedItem('free');

  const Api = isFree ? `${endpoint}?price=0` : endpoint;
  const response = await fetch(Api);
  const json = await response.json();
  const { activity, type } = json;
  activityWrapper.value = activity;
};

buttonhelp.addEventListener('click', getActivity);

buttonsend.addEventListener('click', async (event) => {
  event.preventDefault();
  console.log(event);
  const response = await fetch(`/profile/your-trigger/${event.target.classList[2]}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      trigger: event.path[2].children[0].firstChild.value,
      help: event.path[2].children[1].firstChild.value,
    }),
  });
  const responseJson = await response.json();

  if (responseJson.isUpdateSuccessful) {
    const newTrigger = document.createElement('th');
    const newAction = document.createElement('td');
    const newRow = document.createElement('tr');
    newRow.appendChild(newTrigger);
    newRow.appendChild(newAction);
    newTrigger.innerText = responseJson.newTrigger;
    newAction.innerText = responseJson.newAction;
    event.path[4].children[2].children[1].appendChild(newRow);
  }
});
