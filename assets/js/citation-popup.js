function showCitation(citationKey) {
    const citation = citations[citationKey];
    if (!citation) return;

    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
        <span class="popup-close">&times;</span>
        <h3>BibTeX Citation</h3>
        <pre>${citation}</pre>
        <button class="popup-copy">Copy to clipboard</button>
    `;
    
    document.body.appendChild(popup);
    popup.style.display = 'block';
    
    const closeBtn = popup.querySelector('.popup-close');
    closeBtn.onclick = function() {
        document.body.removeChild(popup);
    };
    
    const copyBtn = popup.querySelector('.popup-copy');
    copyBtn.onclick = function() {
        navigator.clipboard.writeText(citation)
    };
    
    const closeOnClickOutside = function(event) {
        if (!popup.contains(event.target)) {
            document.body.removeChild(popup);
            document.removeEventListener('click', closeOnClickOutside);
        }
    };

    // Add a small delay to prevent the popup from closing immediately
    setTimeout(() => {
        document.addEventListener('click', closeOnClickOutside);
    }, 100);
}