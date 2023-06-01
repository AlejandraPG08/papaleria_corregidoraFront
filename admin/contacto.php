<?php
include_once("views/header.php");
include("views/menuUsuario.php");
?>
<main>
    <section class="formulario"  style="background-color:#fcf6e1;">
        <div class="containerForm">
            <div class="left">
                <div class="form-wrapper">
                    <div class="contact-heading">
                        <h1>
                            Contacto
                            <span>.</span>
                        </h1>
                        <p class="text">Datos: </p>
                    </div>
                    <form method="POST" action="https://formsubmit.co/alejandra.plancarte08@gmail.com"
                        class="contact-form" enctype="multipart/form-data" id="formulario">
                        <div class="input-wrap">
                            <input type="text" class="contact-input" autocomplete="off" name="nombre" required
                                id="nombre">
                            <label>Nombre</label>
                            <i class="icon fa-solid fa-user-astronaut"></i>
                        </div>
                        <div class="input-wrap">
                            <input type="tel" class="contact-input" autocomplete="off" name="phone" required id="phone">
                            <label>Telefono</label>
                            <i class="icon fa-solid fa-phone"></i>
                        </div>
                        <div class="input-wrap">
                            <input type="email" class="contact-input" autocomplete="off" name="email" required
                                id="email">
                            <label>Email</label>
                            <i class="icon fa-solid fa-at"></i>
                        </div>
                        <div class="input-wrap textarea w-100">
                            <textarea name="message" autocomplete="off" class="contact-input" required
                                id="message"></textarea>
                            <label>Mensaje</label>
                            <i class="icon fa-solid fa-pencil"></i>
                        </div>
                        <div class="contact-buttons w-100">
                            <input type="submit" name="enviar" value="Enviar" class="btnForm">
                        </div>
                        <input type="hidden" name="_next"
                            value="http://localhost/papeleria_corregidora/Papaleria_Corregidora/admin/contacto.php">
                        <input type="hidden" name="_captcha" value="false">
                    </form>
                </div>
            </div>
            <div class="right">
                <div class="wave-wp">
                    <br><br><br><br>
                    <h1><b>Sucursal principal</b>
                        <span style="color: #A1CA0E; font-size: 3.5rem;">.</span>
                    </h1>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.6270165242386!2d-100.99329318955455!3d20.644054500801808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c98ad6b5ed507%3A0xc91eae0d75c7cd53!2sPapeleria%20Corregidora!5e0!3m2!1ses!2smx!4v1684307660234!5m2!1ses!2smx"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
</main>

<?php
include("views/footerWeb.php");
?>