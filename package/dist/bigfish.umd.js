(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$3 = ".inline-section {\n    border: solid 1px;\n    padding: 10px;\n    margin: 5px 0;\n    max-width: 600px;\n    background: aqua;\n    border-radius: 2px;\n}\np {\n    padding: 10px 0;\n}";
  styleInject(css_248z$3);

  var css_248z$2 = "button {\n    white-space: nowrap;\n    padding: 7px 20px;\n    border: none;\n    border-radius: 5px;\n    font-weight: 700;\n    background-color: honeydew;\n    cursor: pointer;\n    box-shadow: 2px 2px 4px rgba(0,0,0,0.2);\n}\nbutton:active {\n    background-color: rgb(255, 226, 216);\n    box-shadow: 0 0 0;\n    transition: ease-in-out .05s;\n}\nh1 {\n    margin-bottom: 10px;\n}\n\n.shadow-l {\n    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);\n}\n\n.shadow-s {\n    box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2);\n}";
  styleInject(css_248z$2);

  var css_248z$1 = ".teaser-section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: aqua;\n    border: 1px solid;\n    padding: 20px;\n    width: 600px;\n    border-radius: 2px;\n    margin-bottom: 30px;\n}\n\n.teaser-location {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.teaser-title {\n    font-size: 2rem;\n    margin-bottom: 10px;\n}\n\ntable {\n    border: 1px solid;\n    padding: 10px;\n    width: 100%;\n    border-radius: 3px;\n}\n\nth {\n    text-align: start;\n    white-space: nowrap;\n}\n\nth, td {\n    padding: 3px 20px;\n    margin: 4px;\n    border-radius: 2px;\n}\n\n.teaser-results {\n    background-color: antiquewhite;\n    padding: 10px;\n    \n}\n\n@media (max-width: 600px) {\n    .teaser-section {\n        display: none;\n    }\n}";
  styleInject(css_248z$1);

  var css_248z = ".top-section {\n    border: solid 1px;\n    padding: 30px;\n    margin: 5px 0;\n    max-width: 600px;\n    background: aqua;\n    border-radius: 3px;\n}\n.title {\n    font-size: 3rem;\n}\np {\n    padding: 10px 0;\n}\n";
  styleInject(css_248z);

  window.seeBigFish = function (opts) {
      const { type, siteKey, page, siteName } = opts;
      const requestData = {
          siteKey,
          // ... other data
      };
      const fishResults = getFish(requestData);
      getStyles('mainStyles');
      if (is(type, 'teaser')) {
          showTeaser(fishResults);
      }
      if (is(type, 'inline')) {
          showInline();
      }
      if (is(type, 'topButton')) {
          showTopButton();
      }
  };
  function is(type, str) {
      return (typeof type === 'object' && type.includes(str)) ||
          type === str;
  }
  function getStyles(style) {
      const head = document.getElementsByTagName('HEAD')[0];
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = `../package/styles/${style}.css`;
      head.appendChild(link);
  }
  function getFish(requestData) {
      var _a;
      const response = fetch('big-fish/fishes', {
          headers: {
              'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(requestData),
      });
      (_a = response.data) === null || _a === void 0 ? void 0 : _a.json();
      // DEMO RESULTS
      return [
          { name: 'Billy', size: 42, location: 'Lake Elsinor' },
          { name: 'Sally', size: 32, location: 'Atlantic Ocean' },
          { name: 'Frank', size: 85, location: 'Unknown' },
          { name: 'Mandy', size: 65, location: 'LA Tar Pits' },
      ];
  }
  function showTeaser(fish) {
      const teaser = document.getElementById('teaser');
      getStyles('teaserStyles');
      teaser.innerHTML = /* HTML */ `
        <section class="teaser-section shadow-l">
            <h2 class="teaser-title">Fish List</h2>
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Size In Feet</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
            ` +
          fish
              .map(({ name, size, location }) => {
              return /* HTML */ ` <tr class="teaser-results">
                    <td>${name}</td>
                    <td>${size}</td>
                    <td class="teaser-location">${location}<button onclick="location.href='https://www.youtube.com/watch?v=97-0ghnBMcs'">See results</button></td>

                </tr>`;
          })
              .join(''); // this gets rid of commas
  }
  function showInline() {
      const inline = document.getElementById('inline');
      getStyles('inlineStyles');
      inline.innerHTML = /* HTML */ `
        <section class="inline-section shadow-s">
            <h3>BIG FISH BUMPER</h3> 
            <p>Find all the fish you want by following this link</p>
            <button onclick="location.href='https://spectacularnwt.com/story/big-fish-make-better-fish-stories'">Find Fish</button>
        </section>
            `;
  }
  function showTopButton() {
      const inline = document.getElementById('topButton');
      getStyles('topButtonStyles');
      inline.innerHTML = /* HTML */ `
        <section class="top-section">
            <h3 class="title">TOP DISPLAY</h3> 
            <p>To show off the BIG catches</p>
            <button onclick="location.href='https://greekreporter.com/wp-content/uploads/2022/02/tuna-fish-greece-credit-ert.jpg'">Show Fish</button>
        </section>
            `;
  }

}));
