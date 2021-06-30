const q = window.location.href.split('?')[location.href.split('?').length - 1].split('=')[1].split("+").join(" ")
let isCalled = false;

function checkMain() {
    if (isCalled === false) {
        const inputActive = Array.from(document.querySelectorAll('div'))
        .find(el => el.textContent === 'Quick Find')
        if (inputActive) {
            isCalled = true

            const wrapApp = document.querySelector("div.notion-overlay-container.notion-default-overlay-container")
            isCalled = true
            inputActive.click()
            var callback = function() {
                checkMain2()
            };
    
            // Create the observer
            var observer = new MutationObserver(callback);
            // Start observing
            observer.observe(wrapApp, { childList: true });
    
        }
    }
}

function checkMain2() {

    if (document.querySelector('input')) {
        var input = document.querySelector("input")
        var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
        nativeInputValueSetter.call(input, q);
        var ev2 = new Event('input', { bubbles: true});
        input.dispatchEvent(ev2);
    }
}

const body = document.querySelector("body")

var callback = function() {
    checkMain()
};

// Create the observer
var observer = new MutationObserver(callback);
// Start observing
observer.observe(body, { childList: true });