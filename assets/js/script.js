const generatedContent = document.getElementById('body')

generatedContent.innerHTML = mainPageContent()

// function mainPageContent() {
//     const renderMainPageContent =
//         `<main id="main">
//             <h1 class="titleH1">Array iteration cheat sheet</h1>
//             <p class="paragraph">
//                 <a class="link" title="forEach Method" href="./forEach/forEach.html">forEach Method</a>
//             </p>
//             <p class="paragraph">
//                 <a class="link" title="Map Method" href="./map/map.html">map Method</a>
//             </p>
//     </main>`
//     return renderMainPageContent
// }

function mainPageContent() {
    const renderMainPageContent =
        `<main id="main">
            <h1 class="titleH1">Create text thumbnails</h1>
            <div class="wrapper">
                <div class="canvas_1200_630">
                    <p class="thumb-text_1200_630">Lorem Ipsum</p>
                    <p class="thumb-text_1200_630">Lorem Ipsum</p>
                    <p class="thumb-text_1200_630">Lorem Ipsum</p>
                </div>
            </div>
            <div class="wrapper">
                <div class="canvas_400_400">
                    <p class="thumb-text_400_400">Lorem Ipsum</p>
                    <p class="thumb-text_400_400">Lorem Ipsum</p>
                    <p class="thumb-text_400_400">Lorem Ipsum</p>
                </div>
            </div>
        </main>`
    return renderMainPageContent
}