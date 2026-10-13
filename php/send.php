<?php
/*
header('Content-Type: application/json; charset=utf-8');

// Axiosから送られたJSONを受け取る
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// データが正しく受け取れたか確認
if (!is_array($data)) {
    http_response_code(400);

    echo json_encode([
        'success' => false,
        'message' => 'データを正しく受け取れませんでした。'
    ]);

    exit;
}

// 受け取ったデータを返す（動作確認用）
echo json_encode([
    'success' => true,
    'message' => 'PHPにデータが届きました！',
    'data' => $data
], JSON_UNESCAPED_UNICODE); */



header('Content-Type: application/json; charset=utf-8');

// JSON形式のデータを受け取る
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// JSONが正しく受け取れたか確認
if (!is_array($data)) {
    http_response_code(400);

    echo json_encode([
        'success' => false,
        'message' => 'データを正しく受け取れませんでした。'
    ], JSON_UNESCAPED_UNICODE);

    exit;
}

// 必須項目を定義
$requiredFields = [
    'name' => 'お名前',
    'kana' => 'ふりがな',
    'mail' => 'メールアドレス',
    'phone' => '電話番号',
    'address' => '住所',
    'message' => 'お問い合わせ内容',
];

// 必須項目のチェック
foreach ($requiredFields as $key => $label) {
    if (
        !isset($data[$key]) ||
        !is_string($data[$key]) ||
        trim($data[$key]) === ''
    ) {
        http_response_code(422);

        echo json_encode([
            'success' => false,
            'message' => $label . 'を入力してください。'
        ], JSON_UNESCAPED_UNICODE);

        exit;
    }

    // 前後の空白を除去
    $data[$key] = trim($data[$key]);
}

// メールアドレスの形式をチェック
if (!filter_var($data['mail'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);

    echo json_encode([
        'success' => false,
        'message' => 'メールアドレスの形式を確認してください。'
    ], JSON_UNESCAPED_UNICODE);

    exit;
}

// ここまで通過したら、入力チェック成功
echo json_encode([
    'success' => true,
    'message' => '入力チェックに成功しました。',
    'data' => $data
], JSON_UNESCAPED_UNICODE);



