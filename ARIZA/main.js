//bot token
var telegram_bot_id = "7186722460:AAEQrlxJwKXZCmNMetlAtXHy_r0BYXBalrU"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = 6665877403; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, lname, message, nike;
var ready = function () {
  u_name = document.querySelector("#fname").value;
  lname = document.querySelector("#lname").value;
  message = document.querySelector("#manzil").value;
  nike = document.querySelector("#country").value;
  message =
    "🟢Ismi va Familyasi: " +
    u_name +
    "\n🟡Telefon raqami: " +
    lname +
    "\n🟢Manzil: " +
    message +
    "\n🟡Kategoriyasi: " +
    nike;
};
var sendtelegram = function () {
  ready();
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };
  $.ajax(settings).done(function (response) {});
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("manzil").value = "";
  document.getElementById("country").value = "";
  alert("🟢 ARIZANGIZ QABUL QILINDI 🟡");
  window.location.href = "https://t.me/ARCH_ALIU";
  return false;
};
