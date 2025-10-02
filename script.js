const userList = document.getElementById("userList");
const errorMessage = document.getElementById("errorMessage");
const reloadBtn = document.getElementById("reloadBtn");

const fetchUserData = async () => {
  userList.innerHTML = "";        // Clear previous data
  errorMessage.textContent = "";  // Clear errors

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const users = await response.json();

    users.forEach(user => {
      const userCard = document.createElement("div");
      userCard.classList.add("user-card");
      userCard.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
      `;
      userList.appendChild(userCard);
    });
  } catch (error) {
    errorMessage.textContent = "Failed to load user data. Please check your connection and try again.";
    console.error("Error fetching data:", error);
  }
};

// Initial fetch
fetchUserData();

// Reload button
reloadBtn.addEventListener("click", fetchUserData);
