<!DOCTYPE html>
<html lang="en">

<head>
    <?php include("include/head.php"); ?>
</head>

<body>
    <!--Header Start-->
    <?php include("include/header.php"); ?>
    <!--Header End-->
    <!-- banner -->
    <div class="banner inner-banner">
        <div class="bg-image">
            <img src="assets/images/blog-bg.webp" alt="img" width="" height="">
        </div>
        <div class="container">
            <div class="banner-info">
                <div class="shape">
                    <img src="./assets/images/banner-shape.webp" alt="" width="" height="">
                </div>
                <h1 class="banner-title h1" data-gsap="fadeUp">Contact Us</h1>
                <div class="breadcrumb" data-gsap="fadeUp">
                    <ul>
                        <li><a href="index.php">Home</a></li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- banner -->
    <div class="contact-wrap pt-100 pb-80">
        <div class="container">
            <div class="row gap-x-30">
                <div class="col-lg-5">
                    <div class="title-wrap pb-30">
                        <h2 class="h2" data-gsap="fadeUp" data-delay="0.1">How to reach us</h2>
                    </div>
                    <div class="get-in-touch">
                        <ul class="info" data-gsap="fadeUp">
                            <li>
                                <a href="mailto:inspiringhopecounselingllc@gmail.com">
                                    <svg class="icon" width="50" height="50">
                                        <use xlink:href="assets/images/svgsprit.svg#email-icon">
                                        </use>
                                    </svg>
                                    <span>inspiringhopecounselingllc@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:8592820204">
                                    <svg class="icon" width="50" height="50">
                                        <use xlink:href="assets/images/svgsprit.svg#call-icon">
                                        </use>
                                    </svg>
                                    <span>(859) 282 -0204 </span>
                                </a>
                            </li>
                            <li>
                                <a href="https://maps.app.goo.gl/tgzKhSh61ZKsdmph6" target="_blank">
                                    <svg class="icon" width="50" height="50">
                                        <use xlink:href="assets/images/svgsprit.svg#location-icon">
                                        </use>
                                    </svg>
                                    <span>600 Rodeo Dr, (second floor) ,<br>
                                        Erlanger, KY 41018</span>
                                </a>
                            </li>
                        </ul>
                        <div class="btn-wrap" data-gsap="fadeUp">
                            <a href="contact-us.php" class="btn btn-primary">Schedule Appointment</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="contact-form">
                        <div class="title-wrap text-sm" data-gsap="fadeUp" data-delay="0.1">
                            <h2 class="h2">Let’s get in touch</h2>
                            <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                        </div>
                        <form data-gsap="fadeUp" data-delay="0.2">
                            <div class="form-row">
                                <div class="col col-50">
                                    <div class="input-box">
                                        <input type="text" placeholder="First name" class="form-control">
                                    </div>
                                </div>
                                <div class="col col-50">
                                    <div class="input-box">
                                        <input type="text" placeholder="Last name" class="form-control">
                                    </div>
                                </div>
                                <div class="col col-50">
                                    <div class="input-box">
                                        <input type="text" placeholder="Email address" class="form-control">
                                    </div>
                                </div>
                                <div class="col col-50">
                                    <div class="input-box">
                                        <input type="text" placeholder="Phone number" class="form-control">
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="input-box">
                                        <textarea placeholder="Message" class="form-control"></textarea>
                                    </div>
                                </div>
                                <div class="col btn-wrap text-end">
                                    <button type="submit" class="btn">Send message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="map-wrap pb-160">
        <div class="container">
            <div class="map img-cover" data-gsap="fadeUp">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17426.253716376752!2d72.65323786192265!3d22.997612369404994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87cf76479217%3A0xbe50540453c71a8c!2sVastral%2C%20Ahmedabad%2C%20Gujarat%20380038!5e1!3m2!1sen!2sin!4v1730564188860!5m2!1sen!2sin"
                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
    <!--Footer Start-->
    <?php include("include/footer.php"); ?>
    <?php include("include/script.php"); ?>
    <!--Footer End-->
</body>

</html>