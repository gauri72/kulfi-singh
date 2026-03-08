// Simple front-end contact form handling using EmailJS (no PHP backend required).
// This script validates the form and sends the submitted data to both footer emails
// via an EmailJS email template.

jQuery(document).ready(function () {
    var $form = jQuery('#contactpage');

    if (!$form.length) {
        return;
    }

    // EmailJS configuration (provided by the site owner)
    var EMAILJS_PUBLIC_KEY = 'tgH3oMTt9qDkA02kp';
    var EMAILJS_SERVICE_ID = 'service_3m27ovd';
    var EMAILJS_TEMPLATE_ID = 'template_3snoc4a';

    // Initialize EmailJS if the library has been loaded on the page
    if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY !== 'YOUR_EMAILJS_PUBLIC_KEY') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }

    $form.on('submit', function (e) {
        e.preventDefault();

        var fname  = jQuery.trim(jQuery('#fname').val());
        var lname  = jQuery.trim(jQuery('#lname').val());
        var email  = jQuery.trim(jQuery('#email').val());
        var phone  = jQuery.trim(jQuery('#phone').val());
        var msg    = jQuery.trim(jQuery('#msg').val());

        if (!fname || !lname || !email || !phone) {
            alert('Please fill in all required fields (First Name, Last Name, Email, Phone).');
            return;
        }

        if (typeof emailjs === 'undefined') {
            alert('The form is configured to use EmailJS, but the EmailJS library is not loaded.');
            return;
        }

        var templateParams = {
            from_name: fname + ' ' + lname,
            from_email: email,
            phone: phone,
            message: msg,
            // Optional: explicitly pass the destination email if your template uses it
            to_email: 'kolekargauri8@gmail.com'
        };

        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
            .then(function () {
                alert('Thank you! Your message has been sent.');
                $form[0].reset();
            })
            .catch(function () {
                alert('Sorry, something went wrong while sending your message. Please try again later.');
            });
    });
});
