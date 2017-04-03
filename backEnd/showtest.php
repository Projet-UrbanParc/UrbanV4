<?php 

    $page = $_POST['pageSelect'];

?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Interface d'administration</title>
        <link rel="stylesheet" type="text/css" href="backCss/adminStyle.css">
        <link href="https://fonts.googleapis.com/css?family=Frijole|Monofett" rel="stylesheet"> 
</head>
    <body>
        <form method="post" action="#" id="adminForm">
            <select id="select1" name="pageSelect" form="adminForm">
                <option <?php if ($page == 'LinksAccueil'){ ?>selected="true" <?php }; ?> value="LinksAccueil">Accueil</option>
                
                <option <?php if ($page == 'LinksAccrobranche'){ ?>selected="true" <?php }; ?> value="LinksAccrobranche">Accrobranche</option>
                
                <option <?php if ($page == 'LinksAnniversaire'){ ?>selected="true" <?php }; ?> value="LinksAnniversaire">Anniversaire</option>
                
                <option <?php if ($page == 'LinksBistrot'){ ?>selected="true" <?php }; ?> value="LinksBistrot">Bistrot</option>
                
                <option <?php if ($page == 'LinksEvenement'){ ?>selected="true" <?php }; ?> value="LinksEvenement">Evenements</option>
                
                <option <?php if ($page == 'LinksGroupes'){ ?>selected="true" <?php }; ?> value="LinksGroupes">Groupes</option>
                
                <option <?php if ($page == 'LinksSkatepark'){ ?>selected="true" <?php }; ?> value="LinksSkatepark">Skatepark</option>
                
                <option <?php if ($page == 'LinksTarifs'){ ?>selected="true" <?php }; ?> value="LinksTarifs">Tarifs</option>
                
                <option <?php if ($page == 'LinksTrampo'){ ?>selected="true" <?php }; ?> value="LinksTrampo">Trampoline</option>
            </select>
            
            <input value="Administrer"type="submit">
            <a href='logout.php'><input id="dc" value="Déconnexion" type="button"></a>
        </form>
        
        <section id="mainSection">
            <div id="content">
            <?php 
//************* ACCUEIL ******************************//
                
if ($page == "LinksAccueil") {
    
    //**** IMG 1 *****//
    
    echo "<img src='LinksAccueil/img/1.jpg'>
          <form action='imgUpload.php' method='post'    enctype='multipart/form-data'>
             <input type='file' name='file_upload' id='fileToUpload'>
             <input type='submit' value='Upload' name='submit'>
           </form>";
    
    //**** IMG 2 *****//
    
    echo "<img src='LinksAccueil/img/2.jpg'>
            <form action='imgUpload2.php' method='post' enctype='multipart/form-data'>
             <input type='file' name='file_upload' id='fileToUpload'>
             <input type='submit' value='Upload' name='submit'>
           </form>";
    
    //**** IMG 3 *****//
    
    echo "<img src='LinksAccueil/img/3.jpg'>
              <form action='imgUpload3.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
               </form>";
    
    //**** IMG 4 *****//
    
    echo "<img src='LinksAccueil/img/4.jpg'>
            <form action='imgUpload4.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
    //**** IMG 5 *****//
    
    echo "<img src='LinksAccueil/img/5.jpg'>
            <form action='imgUpload5.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
}
//************** BISTROT **********************************//               
elseif ($page == "LinksBistrot") {
    
    //**** IMG 1 *****//
    
    echo "<img src='LinksBistrot/img/1.jpg'>
            <form action='imgUpload6.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
    //**** IMG 2 ******//
    
    echo "<img src='LinksBistrot/img/2.jpg'>
            <form action='imgUpload7.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
    //**** IMG 3 ******//
    
    echo "<img src='LinksBistrot/img/3.jpg'>
            <form action='imgUpload8.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
}
                
//*********** ACCROBRANCHE **************************//
                
elseif ($page == "LinksAccrobranche") {
    
    //**** IMG 1 ******//
    
    echo "<img src='LinksAccrobranche/img/1.jpg'>
            <form action='imgUpload9.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
    //**** IMG 2 ******//
    
    echo "<img src='LinksAccrobranche/img/2.jpg'>
            <form action='imgUpload10.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
    //**** IMG 3 ******//
    
    echo "<img src='LinksAccrobranche/img/3.jpg'>
            <form action='imgUpload11.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
    //**** IMG 4 ******//
    
    echo "<img src='LinksAccrobranche/img/4.jpg'>
            <form action='imgUpload12.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
    //**** IMG 5 ******//
    
    echo "<img src='LinksAccrobranche/img/5.jpg'>
            <form action='imgUpload13.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
}

//************* ANNIVERSAIRE ***************************//

elseif ($page == "LinksAnniversaire") {
    
    //**** IMG 1 ******//
    
    echo "<img src='LinksAnniversaire/img/1.jpg'>
            <form action='imgUpload14.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
    //**** IMG 2 *******//
    
    echo "<img src='LinksAnniversaire/img/2.jpg'>
            <form action='imgUpload15.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
    //***** IMG 3 ******//
    
    echo "<img src='LinksAnniversaire/img/3.jpg'>
            <form action='imgUpload16.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
}

//**************** EVENEMENT ***************************//

elseif ($page == "LinksEvenement") {
    
    //***** IMG 1 ******//
    
    echo "<img src='LinksEvenement/img/1.jpg'>
            <form action='imgUpload17.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
    //***** IMG 2 *****//
    
    echo "<img src='LinksEvenement/img/2.jpg'>
            <form action='imgUpload18.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
    //***** IMG 3 *****//
    
    echo "<img src='LinksEvenement/img/3.jpg'>
            <form action='imgUpload19.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
    //***** IMG 4 *****//
    
    echo "<img src='LinksEvenement/img/4.jpg'>
            <form action='imgUpload20.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
}

//*********** GROUPES *********************************//

elseif ($page == "LinksGroupes") {
    
    //***** IMG 1 ******//
    
    echo "<img src='LinksGroupes/img/1.jpg'>
            <form action='imgUpload21.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
}

//********* SKATEPARK ********************************//

elseif ($page == "LinksSkatepark") {
    
    //***** IMG 1 ******//
    
    echo "<img src='LinksSkatepark/img/1.jpg'>
            <form action='imgUpload22.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
    //***** IMG 2 *****//
    
    echo "<img src='LinksSkatepark/img/2.jpg'>
            <form action='imgUpload23.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
    //****** IMG 3 ******//
    
    echo "<img src='LinksSkatepark/img/3.jpg'>
            <form action='imgUpload24.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
    //****** IMG 4 *****//
    
    echo "<img src='LinksSkatepark/img/4.jpg'>
            <form action='imgUpload25.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
    //***** IMG 5 *****//
    
    echo "<img src='LinksSkatepark/img/5.jpg'>
            <form action='imgUpload26.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
    //**** IMG 6 ****//
    
    echo "<img src='LinksSkatepark/img/6.jpg'>
            <form action='imgUpload27.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
    //***** IMG 7 *****//
    
    echo "<img src='LinksSkatepark/img/7.jpg'>
            <form action='imgUpload28.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
    
}

//************ TARIFS *****************************//

elseif ($page == "LinksTarifs") {
    
    //**** IMG 1 *****//
    
    echo "<img src='LinksTarifs/img/1.jpg'>
            <form action='imgUpload29.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
    //**** IMG 2 *****//
    
    echo "<img src='LinksTarifs/img/2.jpg'>
            <form action='imgUpload30.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
    //**** IMG 3 *****//
    
    echo "<img src='LinksTarifs/img/3.jpg'>
            <form action='imgUpload31.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
    //***** IMG 4 *****//
    
    echo "<img src='LinksTarifs/img/4.jpg'>
            <form action='imgUpload32.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
    //***** IMG 5 *****//
    
    echo "<img src='LinksTarifs/img/5.jpg'>
            <form action='imgUpload33.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
}

//*********** TRAMPO ************************************//

elseif ($page == "LinksTrampo") {
    
    //***** IMG 1 *****//
    
    echo "<img src='LinksTrampo/img/1.jpg'>
            <form action='imgUpload34.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
    //***** IMG 2 *****//
    
    echo "<img src='LinksTrampo/img/2.jpg'>
            <form action='imgUpload35.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
    
    
    //***** IMG 3 *****//
    echo "<img src='LinksTrampo/img/3.jpg'>
            <form action='imgUpload36.php' method='post' enctype='multipart/form-data'>
                <input type='file' name='file_upload' id='fileToUpload'>
                <input type='submit' value='Upload' name='submit'>
            </form>";
}

?>
            
        </div>
        <div id="content2">
            <?php 
//************* ACCUEIL ******************************//
    if ($page == "LinksAccueil") {
        
       // echo "  <form id='accueilForm' action='#'           method='post'>
             //       <input type='text' name='titre' id='titreAccueil'>
              //      <textarea></textarea>
               //     <input type='submit' value='Valider' name='AccueilSubmit'>
              //  </form>";
}
            ?>
            </div>
    </section>   
    </body>
</html>

