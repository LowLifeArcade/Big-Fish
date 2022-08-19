import '../../styles/inlineStyles.css'
import '../../styles/mainStyles.css'
import '../../styles/teaserStyles.css'
import '../../styles/topButtonStyles.css'

import { DisplayType, fishOpts, FishReq, FishResult, StyleSheets } from './fishTypes'

window.seeBigFish = function(opts: fishOpts) {
    const { 
        type, 
        siteKey,
        page,
        siteName
    } = opts; 
    
    const requestData: FishReq = {
        siteKey,
        // ... other data
    };
    
    const fishResults: FishResult[] = getFish(requestData);
    
    getStyles('mainStyles');
    
    if(is(type, 'teaser')) {
        showTeaser(fishResults);
    };
    
    if(is(type, 'inline')) {
        showInline();
    };
    
    if(is(type, 'topButton')) {
        showTopButton();
    };
}

function is( type:string | string[], str: DisplayType) {
    return (typeof type === 'object' && type.includes(str)) ||
    type === str
}

function getStyles(style:StyleSheets) {
    // const head = document.getElementsByTagName('HEAD')[0];
    // const link = document.createElement('link');
    // link.rel = 'stylesheet';
    // link.type = 'text/css';
    // link.href = `../package/styles/${style}.css`;
    // head.appendChild(link);
}

function getFish(requestData: FishReq) {
    const BIG_FISH_URL = '';
    const response: any = fetch(`${BIG_FISH_URL}/api/v1/fish`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(requestData),
    });
    const fish: FishResult[] = response.data?.json(); 
    
    // DEMO RESULTS
    return [
        { name: 'Billy', size: 42, location: 'Lake Elsinor' },
        { name: 'Sally', size: 32, location: 'Atlantic Ocean' },
        { name: 'Frank', size: 85, location: 'Unknown' },
        { name: 'Mandy', size: 65, location: 'LA Tar Pits' },
    ] as FishResult[]
}

function showTeaser(fish: FishResult[]) {
    const teaser = document.getElementById('teaser') as HTMLHtmlElement;
    
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
        </section>`
    );
}

function showInline() {
    const inline = document.getElementById('inline') as HTMLHtmlElement;
    
    getStyles('inlineStyles');
    
    inline.innerHTML = /* HTML */ `
        <section class="inline-section shadow-s">
            <h3>BIG FISH BUMPER</h3> 
            <p>Find all the fish you want by following this link</p>
            <button onclick="location.href='https://spectacularnwt.com/story/big-fish-make-better-fish-stories'">Find Fish</button>
        </section>
            `
}

function showTopButton() {
    const topButton = document.getElementById('topButton') as HTMLHtmlElement;
    
    getStyles('topButtonStyles');
    
    topButton.innerHTML = /* HTML */ `
        <section class="top-section">
            <h3 class="title">TOP DISPLAY</h3> 
            <p>To show off the BIG catches</p>
            <button onclick="location.href='https://greekreporter.com/wp-content/uploads/2022/02/tuna-fish-greece-credit-ert.jpg'">Show Fish</button>
        </section>
            `
}
