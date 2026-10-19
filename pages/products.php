<?php
$base_path = '../';
include __DIR__ . '/../includes/header.php';

$collections = [
    'latest' => ['label' => 'LATEST COLLECTION', 'images' => ['latest/1.png', 'latest/2.jpg', 'latest/3.jpg', 'latest/4.jpg', 'latest/5.jpg', 'latest/6.jpg', 'latest/7.png', 'latest/8.jpg', 'latest/9.png', 'latest/10.png', 'latest/11.jpg', 'latest/12.png']],
    'men' => ['label' => 'MEN', 'images' => ['men/1.jpg', 'men/2.jpg', 'men/3.png', 'men/4.png', 'men/5.png', 'men/6.png', 'men/7.png', 'men/8.jpg', 'men/9.jpg', 'men/10.jpg', 'men/11.png', 'men/12.png']],
    'women' => ['label' => 'WOMEN', 'images' => ['women/1.png', 'women/2.png', 'women/3.png', 'women/4.png', 'women/5.png', 'women/6.jpg', 'women/7.jpg', 'women/8.png', 'women/9.jpg', 'women/10.png', 'women/11.png', 'women/12.png']],
];
?>

<section class="container-fluid page-banner section-spaced">
  <div class="row"><div class="col-sm-12"><img src="../assets/images/products-3.jpg" alt="Noize Jeans products" class="img-fluid"></div></div>
</section>

<section class="container-fluid">
  <h1 class="text-center">CATEGORIES</h1>
  <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
    <?php foreach ($collections as $key => $collection): ?>
      <li class="nav-item"><a class="nav-link <?= $key === 'latest' ? 'active' : '' ?>" id="<?= e($key) ?>-tab" data-toggle="pill" href="#<?= e($key) ?>" role="tab" aria-controls="<?= e($key) ?>" aria-selected="<?= $key === 'latest' ? 'true' : 'false' ?>"><?= e($collection['label']) ?></a></li>
    <?php endforeach; ?>
  </ul>
  <hr class="mt-0">
</section>

<section class="container">
  <div class="tab-content" id="pills-tabContent">
    <?php foreach ($collections as $key => $collection): ?>
      <div class="tab-pane fade <?= $key === 'latest' ? 'show active' : '' ?>" id="<?= e($key) ?>" role="tabpanel" aria-labelledby="<?= e($key) ?>-tab">
        <div class="row">
          <?php foreach ($collection['images'] as $index => $image): ?>
            <div class="col-6 col-md-2"><div class="Portfolio"><img class="card-img" src="../assets/images/<?= e($image) ?>" alt="<?= e(ucfirst($key)) ?> collection <?= $index + 1 ?>" loading="lazy"></div></div>
          <?php endforeach; ?>
        </div>
      </div>
    <?php endforeach; ?>
  </div>
  <nav class="product-cta" aria-label="More product collections">
    <a href="men" class="btn btn-primary">View More Men Products</a>
    <a href="women" class="btn btn-primary">View More Women Products</a>
  </nav>
  </div>
</section>

<?php include __DIR__ . '/../includes/footer.php'; ?>
