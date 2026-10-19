  </main>
<!-- Footer Section/ Common Item -->
<section class="container-fluid">
  <div class="row">
    <div class="col-sm-4 image-with-shadow footer-highlight">
      <img src="<?= $asset('assets/images/complaince-1.jpg') ?>" alt="Noize compliance" class="img-fluid">
    </div>
    <div class="col-sm-4 second-image">
      <img src="<?= $asset('assets/images/logo.png') ?>" alt="Noize Jeans" class="img-fluid">
    </div>
    <div class="col-sm-4 image-with-shadow">
      <img src="<?= $asset('assets/images/complaince-2.jpg') ?>" alt="Noize production" class="img-fluid">
    </div>
  </div>
</section>

<footer class="footer custom-font py-3">
  <div class="container">
    <div class="row align-items-center">
      <!-- Company Location (Left) -->
      <div class="col-md-4 text-center text-md-left">
        <h3>OUR OFFICE LOCATIONS</h3>
        <p class="mb-0">Dhaka</p>
        <p class="mb-0">Hong Kong</p>
        <p class="mb-0">Dubai</p>
        <p class="mb-0">Barcelona</p>
        <p class="mb-0">New York</p>
        
        
      </div>

      <!-- Company Logo (Middle) -->
      <div class="col-md-4 text-center">
        <img src="<?= $asset('assets/images/footer-logo.png') ?>" alt="Noize Jeans" class="footer-logo">
      </div>

      <!-- Company Phone Number (Right) -->
      <div class="col-md-4 text-center text-md-right mt-3 mt-md-0">
        <h3>REACH US</h3>
        <p class="mb-0">New York: +13472443619</p>
        <p class="mb-0">Barcelona: +34 667 18 81 71</p>
        <p class="mb-0">Dubai: +971 58 524 8983</p>
        <p>Dhaka: +880 17 1715 4231</p>
        <p class="mb-0"><a class="footer-link" href="mailto:info@noizejeans.com">E: info@noizejeans.com</a></p>
      </div>
    </div>
  </div>
  
  <div class="copy-right">
    <hr class="horizontal-line">
    <p class="text-center">&copy; <?= date('Y') ?> NOIZE JEANS LTD. | Developed by: <a class="footer-link" href="https://noizejeans.com">NOIZE IT DEPARTMENT</a></p>
  </div>
</footer>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
