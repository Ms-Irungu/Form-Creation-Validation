async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById("api-data");

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();
        
        dataContainer.innerHTML = "";

        const userList = document.createElement('ul');
        
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the user's name as the text
            userList.appendChild(listItem); // Append the list item to the user list
        });
        dataContainer.appendChild(userList); // Append the user list to the data container


    } catch (error) {
        dataContainer.textContent = 'Failed to load user data.';
    }

}
document.addEventListener('DOMContentLoaded', fetchUserData);
