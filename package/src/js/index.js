import '../../styles/inlineStyles.css';
import '../../styles/mainStyles.css';
import '../../styles/teaserStyles.css';
import '../../styles/topButtonStyles.css';
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
    ;
    if (is(type, 'inline')) {
        showInline();
    }
    ;
    if (is(type, 'topButton')) {
        showTopButton();
    }
    ;
};
function is(type, str) {
    return (typeof type === 'object' && type.includes(str)) ||
        type === str;
}
function getStyles(style) {
    // const head = document.getElementsByTagName('HEAD')[0];
    // const link = document.createElement('link');
    // link.rel = 'stylesheet';
    // link.type = 'text/css';
    // link.href = `../package/styles/${style}.css`;
    // head.appendChild(link);
}
function getFish(requestData) {
    var _a;
    const response = fetch(`${process.env.BIG_FISH_URL}big-fish/fishes`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(requestData),
    });
    const fish = (_a = response.data) === null || _a === void 0 ? void 0 : _a.json();
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
    +(
    /* HTML */
    `</tbody>
        </table>
        </section>`);
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
    const topButton = document.getElementById('topButton');
    getStyles('topButtonStyles');
    topButton.innerHTML = /* HTML */ `
        <section class="top-section">
            <h3 class="title">TOP DISPLAY</h3> 
            <p>To show off the BIG catches</p>
            <button onclick="location.href='https://greekreporter.com/wp-content/uploads/2022/02/tuna-fish-greece-credit-ert.jpg'">Show Fish</button>
        </section>
            `;
}
