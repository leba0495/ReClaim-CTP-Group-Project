import React from 'react';
import '../styles/SignUpPage.css';

function SignUpPage(props) {
  return (
      <div class="container signup">
          <div class="col-sm">
        <div id="firstline" class="mb-1">Welcome! Please sign up here!</div>
        <div class="mb-5">Already signed up? <a href="./about-us">Log In</a></div>
    <form class="mb-3 needs-validation" novalidate>
    <div id="FirstName" class="mb-3"> 
    <label for="FirstName" class="form-label"> First Name*</label>
      <input type="text" class="form-control" id="FirstName" aria-describedby="firstName" required></input>
      <div class="valid-feedback">
      Looks good!
    </div>
    </div>
    <div id="LastName" class="mb-3">
      <label for="LastName" class="form-label"> Last Name*</label>
      <input type="text" class="form-control" id="LastName" aria-describedby="lastName" required></input>
    </div>
    <div id="InputEmail" class="mb-3">
      <label for="InputEmail" class="form-label">Email address*</label>
      <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" required></input>
    </div>
    <div id="InputPassword" class="mb-3">
      <label for="InputPassword" class="form-label">Password*</label>
      <input type="password" class="form-control" id="InputPassword" required></input>
    </div>
    <div id="InputPhoneNumber" class="mb-3">
    <label for="InputPhoneNumber" class="form-label">Phone Number</label>
      <input type="telnumber" class="form-control" pattern="[+]{1}[0-9]{11,14}" id="InputPhoneNumber" placeholder="Must include +1 to number, do not add spaces or symbols" required></input>
    </div>
    <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="CheckBox"></input>
    <label class="form-check-label" for="CheckBox">Sign me up for emails to hear about all the latest from ReClaim</label>
  </div>
    <button id="signupbutton" type="submit" class="btn btn-primary">Sign me up!</button>
  </form>
  </div>
  </div>

  );
}

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

export default SignUpPage;