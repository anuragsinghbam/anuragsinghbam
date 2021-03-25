$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 2
                }
            },
            messages: {
                name: {
                    required: "Enter your good name",
                    minlength: ""
                },
                subject: {
                    required: "We are going to talk about...",
                    minlength: ""
                },
                number: {
                    required: "Enter your contact number",
                    minlength: "your Number must consist of at least 5 characters"
                },
                email: {
                    required: "Please enter your mail ID"
                },
                message: {
                    required: "Type your requiments. I'll be happy to help :-)",
                    minlength: ""
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#success').fadeIn()
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})