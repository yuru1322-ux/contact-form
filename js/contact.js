const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // 入力値を取得
  const name = document.querySelector("#name").value.trim();
  const kana = document.querySelector("#kana").value.trim();
  const phone = document.querySelector("#phone").value.trim();
  const mail = document.querySelector("#mail").value.trim();
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

  // メールアドレスチェック
  if (!mail) {
    document.querySelector("#mail-error").textContent =
      "メールアドレスを入力してください。";
    isValid = false;
  } else if (!/^[\x21-\x7E]+$/.test(mail)) {
    document.querySelector("#mail-error").textContent =
      "半角英数字・記号で入力してください。";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
    document.querySelector("#mail-error").textContent =
      "メールアドレスの形式を確認してください。";
    isValid = false;
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
  console.log("お名前：", name);
  console.log("ふりがな：", kana);
  console.log("電話番号：", phone);
  console.log("住所：", address);
  console.log("お問い合わせ種別：", document.querySelector("#category").value);
  console.log("お問い合わせ内容：", message);

  alert("入力チェックに成功しました！");
});
