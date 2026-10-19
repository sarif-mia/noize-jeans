<?php
require_once __DIR__ . '/../includes/bootstrap.php';
$base_path = '../';
$page_head = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.8.2/css/lightbox.min.css">';
$images = gallery_images('men');
include __DIR__ . '/../includes/header.php';
?>

<section class="photo-gallery section-spaced">
  <div class="container">
    <h1 class="gallery-heading">Men All Images</h1>
    <div class="row photos">
      <?php foreach ($images as $index => $image): ?>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 item">
          <a href="../assets/images/men/<?= e($image) ?>" data-lightbox="men-collection" data-title="Men collection <?= $index + 1 ?>">
            <img class="img-fluid" src="../assets/images/men/<?= e($image) ?>" alt="Men collection <?= $index + 1 ?>" loading="lazy">
          </a>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.8.2/js/lightbox.min.js"></script>
<?php include __DIR__ . '/../includes/footer.php'; ?>
