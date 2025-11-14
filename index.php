<!--Header area--> <?php include('header.php'); ?>
<!--/Header area-->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Noize Jeans Ltd. - Making Noize</title>
  </head>
  <body>
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
            <img src="images/home.jpg" class="d-block w-100" alt="Slider Image 1">
          </div>
          <div class="carousel-item">
            <img src="images/showrooms.jpg" class="d-block w-100" alt="Slider Image 2">
          </div>
          <div class="carousel-item">
            <img src="images/advanced-auto.jpg" class="d-block w-100" alt="Slider Image 3">
          </div>
          <div class="carousel-item">
            <img src="images/laser.jpg" class="d-block w-100" alt="Slider Image 4">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			<i class="fa fa-chevron-left" aria-hidden="true"></i>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			<i class="fa fa-chevron-right" aria-hidden="true"></i>
        </a>
      </div>
    </section>
    <!-- Home Slider End -->
    <!-- Collection Box Section -->
    <section class="container">
      <div class="row">
        <div class="col-sm-6 collection-image">
          <img src="images/desstud-1.jpg" alt="Collection Image 1" class="img-fluid">
        </div>
        <div class="col-sm-6 collection-image">
          <img src="images/suspro3.jpg" alt="Collection Image 2" class="img-fluid">
        </div>
      </div>
    </section>
    <!-- Collection Box Section End -->
    <!-- Feature Products Section -->
    <div class="container-fluid" style="margin-top: 50px;">
      <div class="row">
        <!-- Heading Section -->
        <div class="col-sm-4 d-flex align-items-center justify-content-center">
          <h2 class="featured-box-content text-center">FEATURED PRODUCTS</h2>
        </div>
        <!-- Heading Section End-->
        <!-- Carousel Section -->
        <div class="col-sm-8">
          <!-- Carousel Container -->
          <div id="carousel" class="carousel slide" data-ride="carousel">
            <!-- Carousel Inner -->
            <div class="carousel-inner">
              <!-- First Slide -->
              <div class="carousel-item active">
                <!-- Slide Content Box with 4 images for larger screens -->
                <div class="slide-box d-none d-sm-flex justify-content-between">
                  <img src="images/DSC_0029.jpg" alt="First slide">
                  <img src="images/IMG_9756-225x300.jpg" alt="First slide">
                  <img src="images/IMG_9327.jpg" alt="First slide">
                  <img src="images/IMG_0581-1-200x300.jpg" alt="First slide">
                </div>
                <!-- Slide Content Box with single image for mobile screens -->
                <div class="slide-box d-sm-none">
                  <img src="images/DSC_0029.jpg" class="d-block w-100" alt="First slide">
                </div>
              </div>
              <!-- Second Slide -->
              <div class="carousel-item">
                <!-- Slide Content Box with 4 images for larger screens -->
                <div class="slide-box d-none d-sm-flex justify-content-between">
                  <img src="images/IMG_0425-225x300.jpg" alt="Second slide">
                  <img src="images/IMG_9800-225x300.jpg" alt="Second slide">
                  <img src="images/latest/8.jpg" alt="Second slide">
                  <img src="images/latest/11.jpg" alt="Second slide">
                </div>
                <!-- Slide Content Box with single image for mobile screens -->
                <div class="slide-box d-sm-none">
                  <img src="images/latest/11.jpg" class="d-block w-100" alt="Second slide">
                </div>
              </div>
              <!-- Third Slide -->
              <div class="carousel-item">
                <!-- Slide Content Box with single image for all screen sizes -->
                <div class="slide-box d-none d-sm-flex justify-content-between">
                  <img src="images/DSC6562.jpg" class="d-block w-100" alt="Third slide">
                  <img src="images/image00055.jpeg" class="d-block w-100" alt="Third slide">
                  <img src="images/image00085.jpeg" class="d-block w-100" alt="Third slide">
                  <img src="images/image00071.jpeg" class="d-block w-100" alt="Third slide">
                  <!-- Add more images or content here -->
                </div>
                <!-- Slide Content Box with single image for mobile screens -->
                <div class="slide-box d-sm-none">
                  <img src="images/image00085.jpeg" class="d-block w-100" alt="Second slide">
                </div>
              </div>
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
          <img src="images/primark.jpg" alt="Brand Logo 1">
          <img src="images/pimkie.jpg" alt="Brand Logo 2">
          <img src="images/new-york.jpg" alt="Brand Logo 3">
          <img src="images/spring.jpg" alt="spring">
          <img src="images/zara.jpg" alt="zara">
          <img src="images/bershka.jpg" alt="Barshka">
          <img src="images/only.jpg" alt="Only">
          <img src="images/mango.jpg" alt="Mango">
          <img src="images/pull-bear.jpg" alt="Pull&Bear">
          <img src="images/jay-jay.jpg" alt="Jay Jay">
        </div>
      </div>
    </section>
    <!-- Footer Section/ Brand logo End-->

    <!--Footer area--> 
      <?php include('footer.php'); ?>
    <!--/Footer area-->
  </body>
</html>