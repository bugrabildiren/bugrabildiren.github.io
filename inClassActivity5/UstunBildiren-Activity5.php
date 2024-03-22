<!DOCTYPE html>
<html>
<head>
  <title>Registration Form</title>
  <style>
  body {
    font-family: Arial, sans-serif;
  }
  .form-group {
    display: flex;
    margin-bottom: 15px;
  }
  .form-group label {
    width: 120px;
    display: inline-block;
  }
  </style>
</head>
<body>
  <h1>Registration Form</h1>
  <form action="UstunBildiren-Activity5-preview.php" method="post">
  <form>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="Your Name">
    </div>
    <div class="form-group">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" placeholder="Username">
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" placeholder="Password">
    </div>
    <div class="form-group">
      <label for="address">Address:</label>
      <input type="text" id="address" name="address" placeholder="Your Address">
    </div>
    <div class="form-group">
      <label for="country">Country:</label>
      <select id="country" name="country">
        <option value="">Please select a country</option>
        <option selected value="US">America</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
    <div class="form-group">
      <label for="zip">ZIP Code:</label>
      <input type="text" id="zip" name="zip" placeholder="ZIP Code">
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Your Email">
    </div>
    <div class="form-group">
      <label for="sex">Sex:</label>
      <input type="radio" id="sex" name="sex" value="Male"> Male
      <input type="radio" id="sex" name="sex" value="Female"> Female
    </div>
    <div class="form-group">
      <label for="lang">Language:</label>
      <input type="checkbox" id="lang" name="lang" value="English"> English
      <input type="checkbox" id="lang" name="lang" value="French"> French
      <input type="checkbox" id="lang" name="lang" value="Germany"> German
    </div>
    <div class="form-group">
      <label for="about">About:</label>
      <textarea id="about" name="about" rows="5" cols="30" placeholder="Tell us about yourself"></textarea>
    </div>
    <input type="submit" value="Submit">
  </form>
</body>
</html>
