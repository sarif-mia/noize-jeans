<?php
require_once __DIR__ . '/bootstrap.php';

/** Shared document opening and primary navigation. */
$base_path = $base_path ?? '';
$page_titles = ['about' => 'About Us', 'care' => 'Noize Care', 'contact' => 'Contact Us', 'customer' => 'Customers', 'design' => 'Design Studio', 'men' => 'Men Products', 'production' => 'Noize Production', 'products' => 'Products', 'sustainable' => 'Sustainable Production', 'women' => 'Women Products'];
$page_key = $page_key ?? basename($_SERVER['SCRIPT_NAME'] ?? 'index.php', '.php');
$page_title = $page_title ?? ($page_titles[$page_key] ?? SITE_NAME . ' - Making Noize');
$asset = static fn (string $path): string => asset_url($path, $base_path);
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Noize Jeans Ltd. — sustainable denim production.">
  <title><?= e($page_title) ?></title>
  <link rel="icon" type="image/png" href="<?= $asset('assets/images/logo.png') ?>">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
  <link rel="stylesheet" href="<?= $asset('assets/css/style.css') ?>">
  <?= $page_head ?? '' ?>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script defer src="<?= $asset('assets/js/site.js') ?>"></script>
</head>
<body>
  <header class="site-header">
    <a href="<?= $asset('') ?>" aria-label="Noize Jeans home">
      <span class="logo"><img src="<?= $asset('assets/images/logo.png') ?>" alt="Noize Jeans" class="circ-logo"><img src="<?= $asset('assets/images/logonew2.png') ?>" alt="" class="line-logo"></span>
    </a>
    <nav class="hamburger-menu" aria-label="Primary navigation">
      <input id="menu__toggle" type="checkbox" aria-label="Toggle navigation menu" aria-expanded="false">
      <label class="menu__btn" for="menu__toggle" aria-hidden="true"><span></span></label>
      <ul class="menu__box">
        <li><a class="menu__item" href="<?= $asset('') ?>">Home</a></li>
        <li><a class="menu__item" href="<?= $asset('about') ?>">About Noize</a></li>
        <li><a class="menu__item" href="<?= $asset('design') ?>">Design Studio</a></li>
        <li><a class="menu__item" href="<?= $asset('production') ?>">Noize Production</a></li>
        <li><a class="menu__item" href="<?= $asset('sustainable') ?>">Sustainable Production</a></li>
        <li class="menu__section">More Noize</li>
        <li class="menu__subitem"><a class="menu__item" href="<?= $asset('care') ?>">Noize Care</a></li>
        <li class="menu__subitem"><a class="menu__item" href="<?= $asset('products') ?>">Products</a></li>
        <li class="menu__subitem"><a class="menu__item" href="<?= $asset('customer') ?>">Customer</a></li>
        <li class="menu__subitem"><a class="menu__item" href="<?= $asset('contact') ?>">Find Us</a></li>
      </ul>
      <label class="menu__backdrop" for="menu__toggle" aria-label="Close navigation menu"></label>
    </nav>
  </header>
  <main>
