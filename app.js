const terminal = document.getElementById("terminal");
const consoleOutput = document.getElementById("console-output");
const terminalIcon = document.getElementById("terminal-icon");
const successSound = document.getElementById("successSound");

// Функція для анімації тексту з RGB зміною кольору
function typeTextWithRGB(text, callback, colorStart = 0, colorEnd = 255) {
  const newMessage = document.createElement("div");
  consoleOutput.appendChild(newMessage);
  let i = 0;
  let colorValue = colorStart;
  const colorChangeRate = Math.abs(colorEnd - colorStart) / text.length;

  const interval = setInterval(() => {
    newMessage.innerHTML += text[i];
    newMessage.style.color = `rgb(${colorValue}, ${255 - colorValue}, 255)`;
    i++;
    colorValue += colorChangeRate;
    if (i === text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 40);
}
// Плавне закриття термінала
function closeTerminal(callback) {
  gsap.to("#terminal", {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    ease: "power2.out",
    onComplete: callback,
  });
}


// Поява термінала з ярлика
function showTerminal(callback) {
  gsap.to("#terminal-icon", {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    ease: "power2.out",
    onComplete: () => {
      terminal.style.display = "block";
      gsap.fromTo(
        terminal,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out", onComplete: callback }
      );
    },
  });
}



// Функція для рандомного рішення: "Дозволено" або "Відмовлено"
function decideAccess() {
  const result = Math.random() > 0.5; // Результат: true = "Дозволено", false = "Відмовлено"
  const messages = {
    allowed: [
      "ДОСТУП ДОЗВОЛЕНО!",
      "!!! УСПІШНО !!! Система зламана.",
      "!!! ПРИВІТАННЯ !!! Тепер ви адміністратор.",
    ],
    denied: [
      "ДОСТУП ВІДМОВЛЕНО!",
      "!!! ПОМИЛКА !!! Ви спіймані.",
      "!!! ЗАБОРОНЕНО !!! Невдала спроба.",
    ],
  };

  const randomMessage = result
    ? messages.allowed[Math.floor(Math.random() * messages.allowed.length)]
    : messages.denied[Math.floor(Math.random() * messages.denied.length)];

  // Вивід результату
  typeTextWithRGB(`\n> ${randomMessage}\n`, () => {
    if (result) {
      setTimeout(() => {
        typeTextWithRGB("\n>>> ПЕРЕХІД НА OSNOVA...\n", () => {
          window.location.href = "JSNBosnova.html"; // Перехід на іншу сторінку
        });
      }, 2000);
    } else {
      typeTextWithRGB("\n>>> Спробуйте ще раз пізніше...\n", () => {
        typeTextWithRGB("\n>>> Не здавайтесь! Ви знову близькі до успіху.\n");
      });
    }
  });
}

// Старт хакерської анімації
function startHack() {
  hackSound.play();
  typeTextWithRGB("!!! СТАРТ ХАКЕРСЬКОЇ АТАКИ !!! \n", () => {
    setTimeout(() => {
      typeTextWithRGB(">>> СИСТЕМА ЗАПУЩЕНА...\n", () => {
        setTimeout(() => {
          typeTextWithRGB(">>> АНАЛІЗ УРАЗЛИВОСТЕЙ...\n", () => {
            setTimeout(() => {
              decideAccess(); // Викликаємо перевірку доступу
            }, 1000);
          });
        }, 1000);
      });
    }, 1000);
  });
}

// Іконка терміналу
document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");

  terminalIcon.addEventListener("click", () => {
    // Сховати вступний текст і відкрити термінал
    gsap.to("#intro", {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        intro.style.display = "none";
        terminal.style.display = "block";
        gsap.fromTo(
          "#terminal",
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, ease: "power2.out", onComplete: startHack }
        );
      },
    });
  });
});
