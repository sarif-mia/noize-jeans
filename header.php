<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="icon" type="image/x-icon" href="images/logo.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet'>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <style>
      /*/... Start header menu &humburger... */
      .hamburger-menu {
        position: relative;
        z-index: 1;
      }

      .menu__item {
        display: block;
        padding: 5px 0px;
        background: transparent;
        color: #fff;
        /* Set the desired text color */
        transition: background-color 0.2s;
        transform: translateY(-100%);
        /* Initially, move the menu items out of view */
      }

      .menu__item::before {
        content: "\2022";
        /* Bullet character */
        color: #fff;
        /* Change the color as per your preference */
        position: absolute;
        left: -17px;
        margin-right: 5px;
      }

      .menu__box a {
        color: #fff;
        /* Set the text color for menu items */
        font-size: 12px;
        /* Set the font size for menu items */
        letter-spacing: 4px;
        font-family: sans-serif;
        /* Set the font family for menu items */
      }

      #menu__toggle:checked~.menu__box .menu__item {
        transform: translateY(0);
        /* Show the menu items with slide down effect when checkbox is checked */
      }

      #menu__toggle {
        opacity: 0;
      }

      #menu__toggle:checked+.menu__btn>span {
        transform: rotate(45deg);
      }

      #menu__toggle:checked+.menu__btn>span::before {
        top: 0;
        transform: rotate(0deg);
      }

      #menu__toggle:checked+.menu__btn>span::after {
        top: 0;
        transform: rotate(90deg);
      }

      #menu__toggle:checked~.menu__box {
        left: 0 !important;
        opacity: 1;
      }

      .menu__btn {
        position: fixed;
        top: 30px;
        left: 30px;
        width: 26px;
        height: 26px;
        cursor: pointer;
        z-index: 2;
      }

      .menu__btn>span,
      .menu__btn>span::before,
      .menu__btn>span::after {
        display: block;
        position: absolute;
        width: 100%;
        height: 3px;
        background-color: #616161;
        transition-duration: 0.25s;
      }

      .menu__btn>span::before {
        content: '';
        top: -8px;
      }

      .menu__btn>span::after {
        content: '';
        top: 8px;
      }

      .menu__box {
        display: block;
        position: fixed;
        top: 60px;
        left: -100%;
        width: 210px;
        height: 340px;
        color: #000;
        background-color: #000;
        ;
        transition-duration: .30s;
        z-index: 2;
        opacity: 0;
        justify-content: flex-start;
        /* Align items to the left */
      }

      /* CSS to remove link underline */
      ul.menu__box li a {
        text-decoration: none;
        color: #fff;
        /* Set the default text color for the links */
      }

      /*\... end header menu humburge ... */
      /*/... header logo design start... */
      header {
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        /* Set your desired background color */
      }

      .logo {
        flex: 0 0 140px;
        /* Set the desired width for the logo */
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .logo img {
        max-height: 100%;
        max-width: auto;
      }

      /*\end header area */
      /* Customizations for Image Grid */
      .image-row .col {
        margin-bottom: 10px;
      }

      .image-row .col img {
        max-width: 100%;
        height: auto;
      }

      /* Slider container */
      .slider-container {
        height: 500px;
        background: url('slider-image.jpg') no-repeat center center;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .carousel-control-next,
      .carousel-control-prev {
        z-index: 0 !important;
      }

      /* Slider content */
      .slider-content {
        text-align: center;
        color: #fff;
      }

      /* Collection image */
      .collection-image {
        position: relative;
        overflow: hidden;
        transition: transform 0.3s;
      }

      /* Collection image hover effect */
      .collection-image:hover {
        transform: scale(1.1);
      }

      /* Collection image size */
      .collection-image img {
        width: 100%;
        height: auto;
        padding-top: 30px;
      }

      /*End Collection Images*/

      /* Feature box images */

 
.carousel {
  width: 100%;
}
.slide-box img {
        margin-right: 5px; /* Add margin-right to create a gap between images */
    }
.slide-box {
  display: flex;
  justify-content: space-between;
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .slide-box img {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .slide-box img {
    -ms-flex: 0 0 33.3333%;
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
  }
}

@media (min-width: 992px)
{
  .slide-box img {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
}

.carousel-caption {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: .5rem;
}
      
      /*Feature box images End */

      .featured-box-content{
          display: block;
          font-size: 32px;
          font-weight: 900;
          color: #242424;
          line-height: 38px;
          letter-spacing: 6px;
          text-align:center;
          
          font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
        }

        


      /* Design Products Page */
      /* Common styles for Portfolio */
      .Portfolio {
        position: relative;
        margin: 5px auto;
        /* Center align */
        border: 2px solid black;
        width: 180px;
        transition-duration: 0.4s;
        border-radius: 5px;
        animation: winanim 0.5s;
        -webkit-backface-visibility: visible;
        backface-visibility: visible;
        box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 5px 8px 0 rgba(0, 0, 0, .14), 0 1px 14px 0 rgba(0, 0, 0, .12);
      }

      /* Hover effect for Portfolio */
      .Portfolio:hover {
        box-shadow: 0 12px 16px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19);
      }

      /* Image styling within Portfolio */
      .Portfolio img {
        width: 100%;
        /* Responsive width */
        height: 250px;
        /* Responsive height */
        display: block;
        /* Center align */
        margin: 0 auto;
        /* Center align */
        border-radius: 5px;
      }

      /* Navigation styling */
      .nav {
        padding: 20px;
        margin: 0 auto;
        /* Center align */
        text-align: center;
        /* Center align */
      }

      .nav li a {
        margin: 5px;
        padding: 15px 20px;
        font-size: 16px;
        color: #fff;
        background: #000;
        transition-duration: 0.4s;
      }

      .nav a:hover {
        background: #333;
      }

      .nav .active {
        background-color: #4CAF50 !important;
        color: #fff;
      }

      /* Keyframes animation */
      @keyframes winanim {
        0% {
          opacity: 0;
          transform: scale3d(.3, .3, .3);
        }

        50% {
          opacity: 1;
        }
      }

      /* Media query for mobile devices */
      @media only screen and (max-width: 768px) {
        .Portfolio {
          width: auto;
          /* Responsive width */
          margin: 5px auto;
          /* Center align */
        }

        .nav {
          margin: 0 auto;
          /* Center align */
        }

        .nav li a {
          padding: 8px;
          /* Adjust padding for smaller screens */
        }
      }

      /* Design Products Page End */
      /*/ Footer styles */
      .footer {
        background-color: #000;
        color: #fff;
        padding: 35px 10px;
      }

      .custom-font p {
        font-family: sans-serif;
        font-size: 13px;
        line-height: 2.42857143;
        margin-top: 0;
        letter-spacing: 2px;
        margin-bottom: 1rem;
      }

      .custom-font h3 {
        color: #fff;
        font-size: 14px;
        letter-spacing: 2px;
        font-weight: 900;
        margin-bottom: 45px;
      }

      /* Brand logos container */
      .brand-logos {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
        background-color: #ffffff;
      }

      /* Brand logo row */
      .brand-logos .brand-logo-row {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        overflow: hidden;
      }

      /* Brand logo size and animation */
      .brand-logos img {
        max-width: 100%;
        height: auto;
        margin: 10px;
        transform: translateX(0);
        animation: slideAnimation 25s infinite;
      }

      /* Brand logo slide animation */
      @keyframes slideAnimation {
        0% {
          transform: translateX(0);
        }

        20% {
          transform: translateX(-100%);
        }

        40% {
          transform: translateX(-200%);
        }

        60% {
          transform: translateX(-300%);
        }

        80% {
          transform: translateX(-400%);
        }

        100% {
          transform: translateX(-500%);
        }
      }

      /* Second image section */
      .second-image {
        background-color: #000;
        /* Set the desired background color */
        padding: 40px;
        text-align: center;
      }

      /* Second image size */
      .second-image img {
        width: auto;
        max-width: 100%;
        height: auto;
      }

      /* Image with shadow effect */
      .image-with-shadow {
        box-shadow: 0 0 10px rgba(207, 207, 207, 0.5);
        /* Add the desired shadow effect */
      }

      /* Image with shadow size */
      .image-with-shadow img {
        width: 100%;
        max-width: 100%;
        height: auto;
        padding: 40px;
      }

      /* about page */
      .banner .h2 {
        font-weight: 800;
      }

      /* sir images border */
      .image-wrapper {
        border: 1px solid #d3d0d0;
        padding: 4px;
      }

      #btn-back-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: none;
      }

      .about-section {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        /* Add any desired styling for the section */
      }

      .map-container {
        flex: 1 0 50%;
        /* Add any desired styling for the map container */
      }

      .information-container {
        flex: 1 0 40%;
        /* Add any desired styling for the information container */
      }

      /* Style for individual location entries */
      .location {
        margin-bottom: 15px;
      }

      /* Style for the contact form */
      /* Example styling for the container and row */
      .container {
        max-width: 960px;
        margin: 0 auto;
      }

      .row {
        display: flex;
        flex-wrap: wrap;
      }

      /* Example styling for the left and right columns */
      .col-md-6 {
        flex: 0 0 50%;
        max-width: 50%;
        padding: 15px;
      }

      /* Example styling for the form elements */
      form {
        display: flex;
        flex-direction: column;
      }

      label {
        margin-bottom: 5px;
      }

      input[type="text"],
      input[type="email"],
      textarea {
        padding: 10px;
        margin-bottom: 15px;
      }

      input[type="submit"] {
        background-color: #007bff;
        color: #fff;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
      }

      input[type="submit"]:hover {
        background-color: #0056b3;
      }

      /* CSS Styles */
      .information-container {
        font-family: "Lato", sans-serif;
        ;
        font-weight: 500;
        line-height: 1.1;
        color: #333;
        letter-spacing: 4px;
      }

      .information-container h2 {
        /* If you want to style the h2 element separately */
        font-size: 30px;
      }

      .information-container h3 {
        /* If you want to style the h3 elements separately */
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 15px;
        font-weight: bold;
      }

      .information-container p {
        /* If you want to style the p elements separately */
        font-size: 14px;
      }

      /* Style the section and columns */
      .section {
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 20px;
      }

      .column {
        flex: 1;
        padding: 10px;
      }

      .contact-form label,
      .contact-form input,
      .contact-form textarea,
      .contact-form button {
        display: block;
        width: 100%;
        margin-bottom: 10px;
      }

      .contact-form button {
        background-color: #212529;
        ;
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
        width: 100px
      }

      /* Optional custom styles */
      .blog-single-content p {
        font-size: 16px;
        letter-spacing: 1px;
        line-height: 28px;
        margin: 15px 0;
        line-height: 22px !important;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      }

      .blog-single-content h1 {
        font-family: Helvetica, Arial, sans-serif;
        font-size: 26px;
        font-weight: 900;
        letter-spacing: 6px;
        line-height: 36px;
      }

      .blog-single-content {
        font-size: 26px;
        letter-spacing: 6px;
        line-height: 36px;
        margin-top: 20px;
      }

      /*\Contact Form Design End */
      /* Add custom styles for mobile devices */
      @media (max-width: 767px) {
        .section {
          display: flex;
          flex-direction: column;
        }

        .column {
          width: 100%;
          margin-bottom: 20px;
        }

        .contact-form label,
        .contact-form input,
        .contact-form textarea,
        .contact-form button {
          width: 100%;
        }
      }
	  
	.circ-logo{
		height: auto;
		width: 60px;
	}
	
	.carousel-control-prev {
		height: 50px;
		width: 50px;
		background: #000;
		color: #fff;
		font-size: 2em;
		top: 290px !important;
		width: 3.5% !important;
	}
	
	.carousel-control-next {
		height: 50px;
		width: 50px;
		background: #000;
		color: #fff;
		font-size: 2em;
		top: 290px !important;
		width: 3.5% !important;
	}

	@media only screen and (max-width: 650px){
		.circ-logo{
			height: auto;
			width: 60px;
			padding-right: 10px;
		}
		
		.line-logo{
			height: auto;
			width: 150px;
		}
		
		.carousel-indicators {
			margin-bottom: -5px;
		}
		
		.carousel-control-prev {
			font-size: 1em;
			top: 42px !important;
			width: 7.5% !important;
		}
		
		.carousel-control-next {
			font-size: 1em;
			top: 42px !important;
			width: 7.5% !important;
		}
		
		.Portfolio img {
			height: auto !important;
		}
	}
     
    </style>
  </head>
  <body>
    <!-- Navbar with centered logo -->
    <header style="height: 60px; display: flex; justify-content: center; align-items: center;">
      <a href="index.php">
        <div class="logo">
          <img src="images/logo.png" alt="Logo" class="circ-logo">
          <img src="images/logonew2.png" alt="Logo" class="line-logo">
        </div>
      </a>
      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>
        <ul class="menu__box">
          <li>
            <a class="menu__item" href="index.php">Home</a>
          </li>
          <li>
            <a class="menu__item" href="about.php">About Noize</a>
          </li>
          <li>
            <a class="menu__item" href="design.php">Design Studio</a>
          </li>
          <li>
            <a class="menu__item" href="production.php">Noize Production</a>
          </li>
          <li>
            <a class="menu__item" href="sustainable.php">Sustainable Production</a>
          </li>
          <li>
            <a class="menu__item" href="#">More Noize</a>
          </li>
          <li style="padding-left: 25px;">
            <a class="menu__item" href="https://noizejeans.com/care">Noize Care</a>
          </li>
          <li style="padding-left: 25px;">
            <a class="menu__item" href="products.php">Products</a>
          </li>
          <li style="padding-left: 25px;">
            <a class="menu__item" href="https://noizejeans.com/customer">Customer</a>
          </li>
          <li style="padding-left: 25px;">
            <a class="menu__item" href="https://noizejeans.com/contact">Find Us</a>
          </li>
        </ul>
      </div>
    </header>
  </body>
</html>