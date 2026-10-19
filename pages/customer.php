<?php
$base_path = '../';
$customers = [
    ['bershka.jpg', 'Bershka'], ['zara.jpg', 'Zara'], ['pull-bear.jpg', 'Pull&Bear'], ['mango.jpg', 'Mango'],
    ['new-york.jpg', 'New York'], ['spring.jpg', 'Springfield'], ['pimkie.jpg', 'Pimkie'], ['jay-jay.jpg', 'Jay Jay'],
    ['rof.jpg', 'ROF'], ['jj-logo.jpg', 'JJ'], ['only.jpg', 'Only'], ['store-1.png', 'Store'],
    ['primark.jpg', 'Primark'], ['tally.jpg', 'Tally Weijl'], ['true-religion.jpg', 'True Religion'],
];
include __DIR__ . '/../includes/header.php';
?>

<section class="container-fluid page-banner section-spaced">
  <div class="row"><div class="col-sm-12"><img src="../assets/images/customers-banner2.jpg" class="img-fluid" alt="Our customers"></div></div>
</section>

<section class="container customer-section section-spaced">
  <h1 class="content-heading content-heading--centered">OUR CUSTOMERS</h1>
  <div class="row customer-logo-grid">
    <?php foreach ($customers as [$image, $name]): ?>
      <div class="col-6 col-md-3 customer-logo">
        <img src="../assets/images/<?= e($image) ?>" alt="<?= e($name) ?>" class="img-fluid" loading="lazy">
      </div>
    <?php endforeach; ?>
  </div>
</section>

<?php include __DIR__ . '/../includes/footer.php'; ?>
