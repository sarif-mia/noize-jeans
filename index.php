<?php
$base_path = '';
$featured_products = [
  'DSC_0029.jpg', 'IMG_9756-225x300.jpg', 'IMG_9327.jpg', 'IMG_0581-1-200x300.jpg',
  'IMG_0425-225x300.jpg', 'IMG_9800-225x300.jpg', 'latest/8.jpg', 'latest/11.jpg',
  'DSC6562.jpg', 'image00055.jpeg', 'image00085.jpeg', 'image00071.jpeg',
];
include __DIR__ . '/includes/header.php';
?>
    <!--Home Slider-->
    <section>
      <div id="carouselExampleIndicators" class="carousel slide swiper-container" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="assets/images/home.jpg" class="d-block w-100" alt="Slider Image 1">
          </div>
          <div class="carousel-item">
            <img src="assets/images/showrooms.jpg" class="d-block w-100" alt="Slider Image 2">
          </div>
          <div class="carousel-item">
            <img src="assets/images/advanced-auto.jpg" class="d-block w-100" alt="Slider Image 3">
          </div>
          <div class="carousel-item">
            <img src="assets/images/laser.jpg" class="d-block w-100" alt="Slider Image 4">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" aria-label="Previous slide">
			<i class="fa fa-chevron-left" aria-hidden="true"></i><span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" aria-label="Next slide">
			<i class="fa fa-chevron-right" aria-hidden="true"></i><span class="sr-only">Next</span>
        </a>
      </div>
    </section>
    <!-- Home Slider End -->
    <!-- Collection Box Section -->
    <section class="container">
      <div class="row">
        <div class="col-sm-6 collection-image">
          <a href="design" aria-label="Explore the Noize Design Studio"><img src="assets/images/desstud-1.jpg" alt="Explore the Noize Design Studio" class="img-fluid"></a>
        </div>
        <div class="col-sm-6 collection-image">
          <a href="sustainable" aria-label="Explore sustainable production"><img src="assets/images/suspro3.jpg" alt="Explore sustainable production" class="img-fluid"></a>
        </div>
      </div>
    </section>
    <!-- Collection Box Section End -->
    <!-- Feature Products Section -->
    <div class="container-fluid section-top-spaced">
      <div class="row">
        <!-- Heading Section -->
        <div class="col-sm-4 d-flex align-items-center justify-content-center">
          <h2 class="featured-box-content text-center">FEATURED PRODUCTS</h2>
        </div>
        <!-- Heading Section End-->
        <!-- Carousel Section -->
        <div class="col-sm-8">
          <!-- Carousel Container -->
          <div id="carousel" class="carousel slide featured-products-carousel" data-ride="carousel" data-interval="6000">
            <div class="carousel-inner">
              <?php foreach ($featured_products as $slide_index => $mobile_image): ?>
                <?php $visible_products = array_map(static fn (int $offset): string => $featured_products[($slide_index + $offset) % count($featured_products)], range(0, 3)); ?>
                <div class="carousel-item <?= $slide_index === 0 ? 'active' : '' ?>">
                  <div class="slide-box d-none d-sm-flex">
                    <?php foreach ($visible_products as $image_index => $image): ?>
                      <img src="assets/images/<?= e($image) ?>" alt="Featured product <?= $slide_index + $image_index + 1 ?>" loading="lazy">
                    <?php endforeach; ?>
                  </div>
                  <div class="slide-box d-sm-none">
                    <img src="assets/images/<?= e($mobile_image) ?>" alt="Featured product <?= $slide_index + 1 ?>">
                  </div>
                </div>
              <?php endforeach; ?>
            </div>
          </div>
          <!-- Carousel Controls -->
          <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <!-- Carousel End -->
      </div>
    </div>
    <!-- Feature Products End -->
    <!-- Footer Section/ Brand logo -->
    <section class="brand-logos">
      <div class="container-fluid">
        <div class="brand-logo-row">
          <img src="assets/images/primark.jpg" alt="Brand Logo 1">
          <img src="assets/images/pimkie.jpg" alt="Brand Logo 2">
          <img src="assets/images/new-york.jpg" alt="Brand Logo 3">
          <img src="assets/images/spring.jpg" alt="spring">
          <img src="assets/images/zara.jpg" alt="zara">
          <img src="assets/images/bershka.jpg" alt="Barshka">
          <img src="assets/images/only.jpg" alt="Only">
          <img src="assets/images/mango.jpg" alt="Mango">
          <img src="assets/images/pull-bear.jpg" alt="Pull&Bear">
          <img src="assets/images/jay-jay.jpg" alt="Jay Jay">
        </div>
      </div>
    </section>
    <!-- Footer Section/ Brand logo End-->

    <!--Footer area--> 
      <?php include __DIR__ . '/includes/footer.php'; ?>
    <!--/Footer area-->
