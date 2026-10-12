const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // 入力値を取得
  const name = document.querySelector("#name").value.trim();
  const kana = document.querySelector("#kana").value.trim();
  const phone = document.querySelector("#phone").value.trim();
  const address = document.querySelector("#address").value.trim();
  const message = document.querySelector("#message").value.trim();

  document.querySelectorAll(".contact__error").forEach((error) => {
    error.textContent = "";
  });

  let isValid = true;

  // 名前チェック
  if (!name) {
    document.querySelector("#name-error").textContent =
      "お名前を入力してください。";
    isValid = false;
  }

  // ふりがなチェック
  if (!kana) {
    document.querySelector("#kana-error").textContent =
      "ふりがなを入力してください。";
    isValid = false;
  } else if (!/^[ぁ-ゖー\s　]+$/.test(kana)) {
    document.querySelector("#kana-error").textContent =
      "ひらがなで入力してください。";
    isValid = false;
  }

  // 電話番号チェック
  if (!phone) {
    document.querySelector("#phone-error").textContent =
      "電話番号を入力してください。";
    isValid = false;
  } else if (!/^[0-9０-９+\-()（）\s　]+$/.test(phone)) {
    document.querySelector("#phone-error").textContent =
      "電話番号の形式を確認してください。";
    isValid = false;
  } else {
    const digits = phone.replace(/[^0-9０-９]/g, "");

    if (digits.length < 10 || digits.length > 11) {
      document.querySelector("#phone-error").textContent =
        "電話番号は10〜11桁で入力してください。";
      isValid = false;
    }
  }

  // 住所チェック
  if (!address) {
    document.querySelector("#address-error").textContent =
      "住所を入力してください。";
    isValid = false;
  }

  // お問い合わせ内容チェック
  if (!message) {
    document.querySelector("#message-error").textContent =
      "お問い合わせ内容を入力してください。";
    isValid = false;
  }

  // バリデーション結果
  if (!isValid) {
    return;
  }
});
