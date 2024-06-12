document.addEventListener("DOMContentLoaded", function () {
  const data = [
    {
      name: "June Cha",
      position: "Software Engineer",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "This platform is an absolute game-changer for competitive programmers. The extensive range of problems and challenges offered here truly hones your skills and prepares you for any coding competition. With detailed solutions and an active community, it's the perfect environment to sharpen your coding prowess.",
    },
    {
      name: "Iida Niskanen",
      position: "Data Engineer",
      photo: "https://randomuser.me/api/portraits/women/67.jpg",
      text: "I can't express enough how valuable this platform has been for me. As someone deeply passionate about algorithms and data structures, I've found the diverse set of problems here both stimulating and enriching. The intuitive interface and seamless experience make it my go-to destination for honing my problem-solving skills.",
    },
    {
      name: "Renee Sims",
      position: "Cloud engineer",
      photo: "https://randomuser.me/api/portraits/women/8.jpg",
      text: "If you're serious about excelling in competitive coding, look no further. This platform not only provides a comprehensive set of problems but also fosters a supportive community where you can exchange ideas and strategies. It's been instrumental in my journey towards becoming a better competitive coder.",
    },
    {
      name: "Sasha Ho",
      position: "Phd student",
      photo: "https://randomuser.me/api/portraits/women/46.jpg",
      text: "I've tried numerous competitive programming platforms, but none come close to the quality and depth offered here. From beginner-friendly challenges to advanced algorithmic puzzles, there's something for everyone. The platform's commitment to excellence is evident in every aspect, making it my preferred choice for honing my coding skills.",
    },
    {
      name: "Veeti Seppanen",
      position: "Frontend developer",
      photo: "https://randomuser.me/api/portraits/men/97.jpg",
      text: "As a seasoned programmer, I'm always on the lookout for platforms that challenge and inspire me. This platform exceeds all expectations with its vast array of problems and unparalleled learning resources. Whether you're a novice or a seasoned coder, you'll find endless opportunities to push your boundaries and elevate your skills.",
    },
  ];

  let currentIndex = 0;

  function createTestimonials(data) {
    const testimonialContainer = document.getElementById("testimonial-content"); // Select the container where testimonials will be injected.
    testimonialContainer.innerHTML = ""; // Clear any existing content in the container.

    // Loop through each item in the data array and create a testimonial element for each.
    data.forEach((item, index) => {
      const testimonial = document.createElement("div"); // Create a new div element for each testimonial.
      testimonial.classList.add("testimonial"); // Add the testimonial class to each div.

      // Set the first testimonial as active by adding'active' class.
      if (index === 0) {
        testimonial.classList.add("active");
      }

      // Inject content into the testimonial div.
      testimonial.innerHTML = `
        <p>"${item.text}"</p>
        <img src="${item.photo}" alt="Profile picture of ${item.name}">
        <h3>${item.name}</h3>
        <p>${item.position}</p>
      `;

      // Append the created testimonial to the testimonial container.
      testimonialContainer.appendChild(testimonial);
    });
  }

  // Function to display the testimonial based on index
  function showTestimonial(index) {
    const testimonials = document.querySelectorAll(".testimonial");
    testimonials[currentIndex].classList.remove("active");
    currentIndex = index;
    testimonials[currentIndex].classList.add("active");
  }

  // Event listener for the "Next" button
  document.getElementById("next").addEventListener("click", function () {
    // Shows the next testimonial by incrementing the index.
    showTestimonial((currentIndex + 1) % data.length);
  });

  // Event listener for the "Previous" button
  document.getElementById("prev").addEventListener("click", function () {
    // Shows the previous testimonial
    showTestimonial((currentIndex - 1 + data.length) % data.length);
  });

  // Automatically change testimonials every 3 seconds
  setInterval(function () {
    // Moves to the next testimonial automatically
    showTestimonial((currentIndex + 1) % data.length);
  }, 3000);

  // Call the function to create testimonials and inject in DOM.
  createTestimonials(data);

  // Select element with the id "year"
  const yearElement = document.getElementById("year");
  // Current year
  const currentYear = new Date().getFullYear();
  // Set current year as text
  yearElement.textContent = currentYear;
});
