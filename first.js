 document.getElementById("validationForm").addEventListener("submit", function (e) {
      e.preventDefault(); 

      const firstName = document.getElementById("firstName").value.trim();
      const lastName = document.getElementById("lastName").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const cnic = document.getElementById("cnic").value.trim();
      const zip = document.getElementById("zip").value.trim();
      const country = document.getElementById("country").value;
      const gender = document.querySelector('input[name="gender"]:checked');

      let error = "";

      if (!firstName || !lastName) {
        error = "First Name and Last Name are required.";
      } else if (phone.length !== 11 || isNaN(phone)) {
        error = "Phone number must be 11 digits.";
      } else if (!gender) {
        error = "Please select a gender.";
      } else if (cnic.length !== 14 || isNaN(cnic)) {
        error = "CNIC must be 14 digits.";
      } else if (zip.length !== 4 || isNaN(zip)) {
        error = "ZIP Code must be 4 digits.";
      } else if (country === "") {
        error = "Please select a country.";
      }

      const errorEl = document.getElementById("error");
      if (error) {
        errorEl.textContent = error;
      } else {
        errorEl.textContent = "";
        alert("Form submitted successfully!");
        this.reset();
      }
    });
