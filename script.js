// Handle student details visibility
document.getElementById("employment")?.addEventListener("change", function () {
  try {
    let employmentStatus = document.getElementById("employment").value;
    let studentDetails = document.getElementById("student-details");

    if (studentDetails) {
      if (employmentStatus === "Student") {
        studentDetails.style.display = "block";
      } else {
        studentDetails.style.display = "none";
      }
    } else {
      console.error('Element with ID "student-details" not found.');
    }
  } catch (error) {
    console.error("Error handling student details visibility:", error);
  }
});

// Show the first tab on page load
document.addEventListener("DOMContentLoaded", function () {
  try {
    const firstTabButton = document.querySelector(".tab-button");
    if (firstTabButton) {
      firstTabButton.click(); // Automatically click the first tab on load
    } else {
      console.error('No element with class "tab-button" found.');
    }
  } catch (error) {
    console.error("Error during DOMContentLoaded event:", error);
  }
});



document.addEventListener("DOMContentLoaded", () => {
    const startAssessmentButton = document.getElementById("startAssessmentButton");
    const consentPage = document.getElementById("consent-page"); // Fixed ID
    const mainPage = document.querySelector(".main-container"); // Correct main container class
    const acceptConsentButton = document.querySelector("#consent-form button[type='submit']"); // Correct selector
    const assessmentPage = document.getElementById("assessmentPage"); // Assuming this section exists

    // Ensure all sections are hidden except the main container on load
    if (mainPage) mainPage.style.display = "block"; // Show main page
    if (consentPage) consentPage.style.display = "none"; // Hide consent page
    if (assessmentPage) assessmentPage.style.display = "none"; // Hide assessment page

    // Show Consent Page when Start Assessment is clicked
    if (startAssessmentButton) {
        startAssessmentButton.addEventListener("click", () => {
            if (mainPage) mainPage.style.display = "none"; // Hide main page
            if (consentPage) consentPage.style.display = "block"; // Show consent page
        });
    }

    // Show Assessment Page when Consent is accepted
    if (acceptConsentButton) {
        acceptConsentButton.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent form submission (for now)
            if (consentPage) consentPage.style.display = "none"; // Hide consent page
            if (assessmentPage) assessmentPage.style.display = "block"; // Show assessment page
        });
    }
});




    // Dynamic Header Logic
    const dynamicHeader = document.getElementById("dynamic-header");
    const mainContent = document.getElementById("main-content");
    const consentPage = document.getElementById("consent-page");

    // Function to show the consent page and update header
    function showConsentPage() {
      mainContent.style.display = "none";
      consentPage.style.display = "block";

      // Update the header for the consent page
      dynamicHeader.innerHTML = `
        <h1>Consent for Assessment</h1>
        <p>We value your privacy and need your consent to proceed.</p>
      `;
    }

    // Function to go back to the main content and reset header
    function showMainContent() {
      consentPage.style.display = "none";
      mainContent.style.display = "block";

      // Reset the header for the main content
      dynamicHeader.innerHTML = `
        <img src="logo.jpeg" alt="Logo">
        <h1>Mental Well-Being Assessment</h1>
        <p>Take the first step towards better mental well-being with our insightful assessment.</p>
      `;
    }

    // Show/hide Student info based on Employment Status selection
    document.getElementById('employment').addEventListener('change', function() {
      const studentInputs = document.getElementById('student-inputs');
      const occupationInputs = document.getElementById('occupation-input');
      if (this.value === 'Student') {
        studentInputs.style.display = 'block';
        occupationInputs.style.display = 'none';
      } else if (this.value === 'Employed') {
        occupationInputs.style.display = 'block';
        studentInputs.style.display = 'none';
      } else {
        studentInputs.style.display = 'none';
        occupationInputs.style.display = 'none';
      }
    });

    // Show/hide custom occupation input when "Other" is selected
    document.getElementById('occupation').addEventListener('change', function() {
      const otherOccupation = document.getElementById('other-occupation');
      if (this.value === 'Other') {
        otherOccupation.style.display = 'block';
      } else {
        otherOccupation.style.display = 'none';
      }
    });


    // Attach event listeners
    document.getElementById("startAssessmentButton").addEventListener("click", showConsentPage);
    document.getElementById("backToMain").addEventListener("click", showMainContent);


