const destinations = [
    {
      name: "Maldives",
      description: "A tropical paradise with white sandy beaches.",
      type: "beaches",
      images: ["beach1.jpg", "beach2.jpg"]
    },
    {
      name: "Kyoto, Japan",
      description: "Known for its beautiful temples and cherry blossoms.",
      type: "temples",
      images: ["temple1.jpg", "temple2.jpg"]
    },
    {
      name: "Switzerland",
      description: "Perfect for exploring mountain landscapes.",
      type: "mountains",
      images: ["mountain1.jpg", "mountain2.jpg"]
    },
    {
      name: "Paris, France",
      description: "Enjoy the iconic Eiffel Tower and charming streets.",
      type: "city",
      images: ["paris1.jpg", "paris2.jpg"]
    }
  ];
  
  document.getElementById("recommendButton").addEventListener("click", () => {
    const preference = document.getElementById("preference").value.toLowerCase();
    const destinationList = document.getElementById("destinationList");
    destinationList.innerHTML = ""; // Clear previous recommendations
  
    const filteredDestinations = destinations.filter(dest =>
      dest.type.includes(preference)
    );
  
    if (filteredDestinations.length > 0) {
      filteredDestinations.forEach(dest => {
        const card = document.createElement("div");
        card.className = "destination-card";
        card.innerHTML = `
          <h3>${dest.name}</h3>
          <p>${dest.description}</p>
          <img src="${dest.images[0]}" alt="${dest.name} Image 1">
          <img src="${dest.images[1]}" alt="${dest.name} Image 2">
        `;
        destinationList.appendChild(card);
      });
    } else {
      destinationList.innerHTML = `<p>No destinations found for your preferences.</p>`;
    }
  });
  
  // Handle contact form submission
  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
  });
  