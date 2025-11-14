<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="icon" type="image/x-icon" href="../assets/images/logo.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet'>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <link rel="stylesheet" href="<?php echo isset($base_path) ? $base_path : '../'; ?>assets/css/style.css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  </head>
  <body>
    <!-- Navbar with centered logo -->
    <header style="height: 60px; display: flex; justify-content: center; align-items: center;">
      <a href="<?php echo isset($base_path) ? $base_path : '../'; ?>">
        <div class="logo">
          <img src="<?php echo isset($base_path) ? $base_path : '../'; ?>assets/images/logo.png" alt="Logo" class="circ-logo">
          <img src="<?php echo isset($base_path) ? $base_path : '../'; ?>assets/images/logonew2.png" alt="Logo" class="line-logo">
        </div>
      </a>
      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>
        <ul class="menu__box">
          <li>
            <a class="menu__item" href="<?php echo isset($base_path) ? $base_path : '../'; ?>">Home</a>
          </li>
          <li>
            <a class="menu__item" href="<?php echo isset($base_path) ? $base_path : '../'; ?>about">About Noize</a>
          </li>
          <li>
            <a class="menu__item" href="<?php echo isset($base_path) ? $base_path : '../'; ?>design">Design Studio</a>
          </li>
          <li>
            <a class="menu__item" href="<?php echo isset($base_path) ? $base_path : '../'; ?>production">Noize Production</a>
          </li>
          <li>
            <a class="menu__item" href="<?php echo isset($base_path) ? $base_path : '../'; ?>sustainable">Sustainable Production</a>
          </li>
          <li>
            <a class="menu__item" href="#">More Noize</a>
          </li>
          <li style="padding-left: 25px;">
            <a class="menu__item" href="<?php echo isset($base_path) ? $base_path : '../'; ?>care">Noize Care</a>
          </li>
          <li style="padding-left: 25px;">
            <a class="menu__item" href="<?php echo isset($base_path) ? $base_path : '../'; ?>products">Products</a>
          </li>
          <li style="padding-left: 25px;">
            <a class="menu__item" href="<?php echo isset($base_path) ? $base_path : '../'; ?>customer">Customer</a>
          </li>
          <li style="padding-left: 25px;">
            <a class="menu__item" href="<?php echo isset($base_path) ? $base_path : '../'; ?>contact">Find Us</a>
          </li>
        </ul>
      </div>
    </header>
  </body>
</html>
