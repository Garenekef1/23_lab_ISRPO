const profileForm = document.getElementById("profileForm");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const cityInput = document.getElementById("cityInput");
const hobbyInput = document.getElementById("hobbyInput");
const message = document.getElementById("message");
const result = document.getElementById("result");
const clearBtn = document.getElementById("clearBtn");

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const age = ageInput.value.trim();
  const city = cityInput.value.trim();
  const hobby = hobbyInput.value.trim();

  if (!name || !age || !city || !hobby) {
    message.textContent = "Заполните все поля";
    message.style.color = "#dc2626";
    return;
  }

  message.textContent = "Данные сохранены";
  message.style.color = "#15803d";
  result.innerHTML =
    "Имя: " + name + "<br>" +
    "Возраст: " + age + "<br>" +
    "Город: " + city + "<br>" +
    "Хобби: " + hobby;
});

clearBtn.addEventListener("click", () => {});
