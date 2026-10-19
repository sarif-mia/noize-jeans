<?php
require_once __DIR__ . '/../includes/bootstrap.php';

if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
}

$_SESSION['contact_csrf'] ??= bin2hex(random_bytes(32));
$contact_flash = $_SESSION['contact_flash'] ?? null;
unset($_SESSION['contact_flash']);

$base_path = '../';
include __DIR__ . '/../includes/header.php';
?>
<!-- /Header area -->



<section class="container-fluid page-banner section-spaced">
  <div class="row">
    <div class="col-sm-12">
    <img src="../assets/images/find-us.jpg" alt="Find Noize Jeans" class="img-fluid" />
    </div>
  </div>
</section>
  

<section class="site-container contact-layout">
  <div class="map-container">
    <!-- Embed Google Maps iframe here with your desired location -->
    <!-- Example: -->
   
    <iframe src="https://maps.google.com/maps?q=Mika%20Corner%20Stone,%20Dhaka&t=&z=15&ie=UTF8&iwloc=&output=embed" title="Noize Jeans Dhaka location" allowfullscreen loading="lazy"></iframe>

  </div>
  
<!-- Information Center -->
  <div class="information-container">
    <h2>FIND US ANYTIME AND GET INVOLVED</h2>

    <div class="location">
      <h3>Dhaka:</h3>
      <p>House: 16-17, Level: 7 & 8, Mika Corner Stone, Road: 12,<br> Sector: 6, Uttara, Dhaka-1230, Bangladesh.</p>
    </div>

    <div class="location">
      <h3>Dubai:</h3>
      <p>1302 U-Bora Tower, Business Bay,<br> Dubai – UAE</p>
    </div>

    <div class="location">
      <h3>Barcelona:</h3>
      <p>Rambla de Catalunya, 15, 1-2, 08007,<br> Barcelona, Spain.</p>
    </div>

    <div class="location">
      <h3>New York:</h3>
      <p>214 WEST, 39TH STREET, SUITE 801,<br> NY – 10018, New York, USA</p>
    </div>
    
   
    <!--
    <div class="location">
      <h3>Hong Kong:</h3>
      <p>Unit 1308, 13/F, CEO Tower,<br> 77 Wing Hong Street, Cheung Sha Wan,<br> Kowloon, Hong Kong</p>
    </div>
    -->
    
  </div>
</section>
<!-- Contact Form -->
<section class="site-container contact-message-section section-spaced">
    <div class="contact-message-spacer"></div>
    <div class="contact-message-content">
        <div class="information-container">
            <h3>info@noizejeans.com</h3>
            <h3>Leave Message</h3>
        </div>
            <p>Your email address will not be published. Required fields are marked.</p>
            <?php if ($contact_flash): ?>
              <div class="contact-alert contact-alert--<?= e($contact_flash['type']) ?>" role="status" aria-live="polite"><?= e($contact_flash['message']) ?></div>
            <?php endif; ?>
            <form class="contact-form" action="../contact-submit.php" method="post">
                <input type="hidden" name="csrf_token" value="<?= e($_SESSION['contact_csrf']) ?>">
                <div class="contact-honeypot" aria-hidden="true"><label for="website">Website</label><input type="text" id="website" name="website" tabindex="-1" autocomplete="off"></div>
                <label for="name">Your Name (required)</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Your Email (required)</label>
                <input type="email" id="email" name="email" required>

                <label for="subject">Subject:</label>
                <input type="text" id="subject" name="subject" required>

                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Send Message</button>
            </form>
    </div>
</section>

    <!--Footer area-->
<?php include __DIR__ . '/../includes/footer.php'; ?>
<!--/Footer area-->
