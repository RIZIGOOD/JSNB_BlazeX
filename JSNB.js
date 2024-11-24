// Language switch functionality
const languageToggle = document.querySelector('.language-toggle');
let language = 'en';

languageToggle.addEventListener('click', () => {
    if (language === 'en') {
        language = 'ua';
        document.querySelector('.logo').textContent = 'JSNB';
        document.querySelector('.subtitle').textContent = 'Секретна компанія';
        document.querySelector('.content').innerHTML = `
            <h2>Хто ми?</h2>
            <p>
                JSNB — це не просто компанія. Це сила, що діє в тіні, тихо змінюючи світ. 
                Відомі небагатьом, але обговорювані багатьма, ми впливаємо на більше, ніж видно.
            </p>
            <h2>Чому RIZIGOOD?</h2>
            <p>
                Серед мільярдів ми обрали **RIZIGOOD**. Невинне обличчя, яке приховує геніальність. 
                Ідеальний посол для нашої секретної місії. Його подорож із JSNB лише починається — але це історія, варта уваги.
            </p>
            <h2>Що ми робимо?</h2>
            <p>
                Це засекречено. Лише ті, хто у нашому колі довіри, знають правду. Для решти ми просто чутка... шепіт про щось більше.
            </p>
        `;
        languageToggle.textContent = 'Switch to English';
    } else {
        language = 'en';
        document.querySelector('.logo').textContent = 'JSNB';
        document.querySelector('.subtitle').textContent = 'The Mystery Company';
        document.querySelector('.content').innerHTML = `
            <h2>Who Are We?</h2>
            <p>
                JSNB is not just a company. It’s a force hidden in the shadows, silently reshaping the world. 
                Known by few, discussed by many, our influence extends beyond the visible.
            </p>
            <h2>Why RIZIGOOD?</h2>
            <p>
                Among billions, we chose **RIZIGOOD**. A face of innocence masking brilliance. The perfect ambassador for our covert mission. 
                His journey with JSNB is only beginning — but it’s a story worth watching closely.
            </p>
            <h2>What We Do?</h2>
            <p>
                That’s classified. Only those within our trusted circle have access to the truth. For the rest, 
                we are simply a rumor... a whisper of something greater.
            </p>
        `;
        languageToggle.textContent = 'Switch Language';
    }
});
