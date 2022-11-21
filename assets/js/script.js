const generatedContent = document.getElementById('body')

generatedContent.innerHTML = mainPageContent()


function mainPageContent() {
    const renderMainPageContent =
        `<main id="main">
            <h1 class="titleH1">Create text thumbnails</h1>
            <div class="wrapper">
                <div class="canvas_1200_630">
                    <p class="thumb-text_1200_630">What size should open graph image be?</p>
                    <p class="thumb-text_1200_630">1200 x 630 pixels for Facebook Open Graph.</p>
                    <p class="thumb-text_1200_630">This Canvas already in 1200x630</p>
                    <p class="thumb-text_1200_630">Customize your text, outline color in CSS file.</p>
                    <p class="thumb-text_1200_630">Make a screenshot.</p>
                </div>
            </div>
            <div class="wrapper">
                <div class="canvas_400_400">
                    <p class="thumb-text_400_400">What size should open graph image be?</p>
                    <p class="thumb-text_400_400">around 400x400 pixels for WhatsApp.</p>
                    <p class="thumb-text_400_400">This Canvas already in 400x400</p>
                    <p class="thumb-text_400_400">Customize your text, outline color in CSS file.</p>
                    <p class="thumb-text_400_400">Make a screenshot.</p>
                </div>
            </div>
        </main>`
    return renderMainPageContent
}