// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(document).ready(function () {
    // Check if the dark mode is enabled
    var isDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

    // Set the initial state of the toggle switch
    $('#dark-mode-toggle').prop('checked', isDarkModeEnabled);

    // Apply dark mode styles if enabled
    if (isDarkModeEnabled) {
        enableDarkMode();
    }

    // Handle toggle switch change event
    $('#dark-mode-toggle').change(function () {
        if ($(this).is(':checked')) {
            enableDarkMode();
            localStorage.setItem('darkModeEnabled', 'true');
        } else {
            disableDarkMode();
            localStorage.setItem('darkModeEnabled', 'false');
        }
    });

    // Function to enable dark mode styles
    function enableDarkMode() {
        // Apply your dark mode CSS styles here
        $('html').addClass('dark-mode');
    }

    // Function to disable dark mode styles
    function disableDarkMode() {
        // Remove your dark mode CSS styles here
        $('html').removeClass('dark-mode');
    }
});