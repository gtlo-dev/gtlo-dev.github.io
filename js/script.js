const signinModal = new Modal("signin-modal");

signinModal.setBody(`
<form class="signin-form form">
  <label>
    Username
    <input type="text" class="input">
  </label>
  <label>
    Password
    <input type="password" class="input">
  </label>

  <button type="submit" class="btn btn-gradient">Sign In</button>
</form>
<hr />
<span>Don't have any account? <a href="#">Sign Up for free</a></span>
`);
signinModal.setHeader("Sign In");
signinModal.addClass("signin-modal");
signinModal.addClass("container");
