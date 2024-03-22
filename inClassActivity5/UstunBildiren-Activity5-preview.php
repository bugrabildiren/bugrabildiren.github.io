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
    elseif (empty($_POST["email"])) {
        $errors[] = "Email: Not provided";
    }
    elseif (empty($_POST["email"]) || !filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
      $errors[] = "invalid email format";
    }
    elseif (empty($_POST["username"])) {
        $errors[] = "Username: Not provided";
    }
    elseif (empty($_POST["password"])) {
        $errors[] = "Password: Not provided";
    }
    elseif (empty($_POST["address"])) {
        $errors[] = "Address: Not provided";
    }
    elseif (empty($_POST["country"])) {
        $errors[] = "Country: Not provided";
    }
    elseif (empty($_POST["zip"])) {
        $errors[] = "Zip Code: Not provided";
    }
    elseif (empty($_POST["sex"])) {
        $errors[] = "Sex: Not provided";
    }
    elseif (empty($_POST["lang"])) {
        $errors[] = "Language: Not provided";
    }
    elseif (empty($_POST["about"])) {
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
      echo "<h2>Error!</h2>";
      echo "<ul>";
      foreach ($errors as $error) {
        echo "<li>" . $error . "</li>";
      }
      echo "</ul>";
      echo "<p>Form is not provided.</p>";
    }
  } else {
    header("Location: UstunBildiren-Activity5.php");
  }
  ?>
</body>
</html>
