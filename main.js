// animate divs on start
const items = document.querySelectorAll('.filter-sections div');
animate(items);

// filter on click
each('.filter-links li a', function(el) {
    el.addEventListener('click', function(e) {
        e.preventDefault();
        filterLinks(el);
    });
});

// filter links functions
function filterLinks(element) {
    // get text
    const el = element.textContent,
        // convert to lowercase
        linksToLowerCase = el.toLowerCase();
    // if all remove all elements
    if (el === 'All') {
        // first show all view class
        each('.view', function(e) {
            e.classList.remove('view');
        });
        // no show init animation
        animate(items);
    } else {
        // if not click all remove all elements
        each('.view', function(e) {
            e.classList.remove('view');
        });
    }
    // show animation for current elements
    animate(document.querySelectorAll('.' + linksToLowerCase));
}

// forech arrays
function each(el, callback) {
    const allDivs = document.querySelectorAll(el),
    allToArr = Array.prototype.slice.call(allDivs);

    Array.prototype.forEach.call(allToArr, function(selector, index) {
        if (callback) return callback(selector);
    });
}

// animate function
function animate(item) {
    (function show(counter) {
        setTimeout(function() {
            item[counter].classList.add('view');
            counter++;
            if (counter < item.length) show(counter);
        },50);
    })(0);
}