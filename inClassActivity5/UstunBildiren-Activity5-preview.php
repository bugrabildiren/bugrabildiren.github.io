<!DOCTYPE html>
<html>
<head>
  <title>Preview</title>
</head>
<body>
  <h1>Preview</h1>
  <?php
   if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $errors = [];

    if (empty($_POST["name"])) {
      $errors[] = "Name: Not provided";
    }
    if (empty($_POST["email"])) {
      $errors[] = "Email: Not provided";
    }
    elseif (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
      $errors[] = "Invalid email format";
    }
    if (empty($_POST["username"])) {
        $errors[] = "Username: Not provided";
    }
    if (empty($_POST["password"])) {
        $errors[] = "Password: Not provided";
    }
    if (empty($_POST["address"])) {
        $errors[] = "Address: Not provided";
    }
    if (empty($_POST["country"])) {
        $errors[] = "Country: Not provided";
    }
    if (empty($_POST["zip"])) {
        $errors[] = "Zip Code: Not provided";
    }
    if (empty($_POST["sex"])) {
        $errors[] = "Sex: Not provided";
    }
    if (empty($_POST["lang"])) {
        $errors[] = "Language: Not provided";
    }
    if (empty($_POST["about"])) {
        $errors[] = "About: Not provided";
    }

    if (empty($errors)) {
      echo "<ul>";
      foreach ($_POST as $key => $value) {
        if ($key != "submit") {
          echo "<li><strong>" . ucfirst($key) . ":</strong> " . $value . "</li>";
        }
      }
      echo "</ul>";
    } else {
      foreach ($errors as $error) {
        echo "<li>" . $error . "</li>";
      }
    }
  } else {
    header("Location: UstunBildiren-Activity5.php");
  }
  ?>
</body>
</html>
