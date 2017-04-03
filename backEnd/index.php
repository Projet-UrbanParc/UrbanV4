<?php  //Start the Session
session_start();
 require('connect.php');
//3. If the form is submitted or not.
//3.1 If the form is submitted
if (isset($_POST['username']) and isset($_POST['password'])){
//3.1.1 Assigning posted values to variables.
$username = $_POST['username'];
$password = $_POST['password'];
//3.1.2 Checking the values are existing in the database or not
$query = "SELECT * FROM `user` WHERE username='$username' and password='$password'";
 
$result = mysqli_query($connection, $query) or die(mysqli_error($connection));
$count = mysqli_num_rows($result);
//3.1.2 If the posted values are equal to the database values, then session will be created for the user.
if ($count == 1){
$_SESSION['username'] = $username;
}else{
//3.1.3 If the login credentials doesn't match, he will be shown with an error message.
$fmsg = "Désolé le login et/ou le mot de passe ne sont convenable.";
}
}
//3.1.4 if the user is logged in Greets the user with message
if (isset($_SESSION['username'])){
$username = $_SESSION['username'];
    
//***************************************************************//
require('showtest.php');
//***************************************************************//
    
    
 
}else{
//3.2 When the user visits the page first time, simple login form will be displayed.
?>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Interface d'administration</title>
        <link rel="stylesheet" type="text/css" href="backCss/loginStyle.css">
        <link href="https://fonts.googleapis.com/css?family=Frijole|Monofett" rel="stylesheet"> 
    </head>
    
    <body>
        <form method="POST">
            <h2>Connection</h2>
            <div>
	           <input type="text" name="username" placeholder="Identifiant" required>
	        </div>
            <input type="password" name="password" id="inputPassword" placeholder="Mot de passe" required>
            <button type="submit">Login</button>
        </form>
    </body>
</html>
<?php } ?>