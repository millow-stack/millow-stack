// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Print button functionality
function printResume() {
    window.print();
}

// Event listener for print button
document.addEventListener('DOMContentLoaded', function() {
    const printButton = document.createElement('button');
    printButton.textContent = 'Print Resume';
    printButton.addEventListener('click', printResume);
    document.body.appendChild(printButton);
});

// Apply specific styles when printing
window.onbeforeprint = function() {
    document.body.classList.add('print-version');
};
window.onafterprint = function() {
    document.body.classList.remove('print-version');
};

// Add print-specific styles
const printStyles = document.createElement('style');
printStyles.textContent = `
    @media print {
        /* Hide everything except the main content */
        body * {
            visibility: hidden;
        }
        .container, .container * {
            visibility: visible;
        }
        .container {
            position: absolute;
            left: 0;
            top: 0;
        }
        /* Hide the print button */
        button {
            display: none;
        }
    }
`;
document.head.appendChild(printStyles);
