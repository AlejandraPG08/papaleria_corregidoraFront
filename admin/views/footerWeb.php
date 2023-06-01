<?php
require_once('phpqrcode/qrlib.php');
$path = 'images/';
$qrcode =$path.time().".png";
QRcode::png("https://tr.ee/SuG3C5Y8h9", $qrcode, 'H', 4, 4);
?>
<footer class="footer">
    <div class="grupo-1">
        <div class="box">
            <figure>
                <a href="#">
                    <img src="images/papeleria.png" alt="icono de pie de pagina">
                </a>
            </figure>
        </div>
        <div class="box">
            <h2>SOBRE NOSOTROS</h2>
            <p style="text-align: justify;">En Papeleria Corregidora, nos esforzamos por ofrecer un excelente
                servicio al cliente. Nuestro equipo está compuesto por expertos amigables y conocedores que están listos
                para ayudarte a encontrar los productos adecuados y responder a tus preguntas. Valoramos tu satisfacción
                y nos esforzamos por brindarte una experiencia de compra agradable y sin complicaciones.
            </p>
        </div>
        <div class="box">
            <h2>SIGUENOS</h2>
            <div class="red-social">
                <a href="https://www.facebook.com/pages/Papeleria%20Corregidora/490820767708058/"><i
                        class="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://twitter.com"><i class="fa-brands fa-twitter"></i></a>
                <a href="https://www.youtube.com"><i class="fa-brands fa-youtube"></i></a>
            </div>
            <br>
            <?php
            echo "<img src='".$qrcode."'>";
            ?>
        </div>
    </div>
    <div class="grupo-2">
        <small>&copy; 2023 <b>Papeleria Corregidora</b> - Todos los derechos reservados</small>
    </div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
    crossorigin="anonymous"></script>
<script src="js/menu.js"></script>
<script src="js/app.js"></script>
<script src="js/login.js"></script>
<script src="js/timeline.js"></script>
<script src="js/productos.js"></script>
<script src="js/button_alert.js" type="module"></script>
</body>

</html>