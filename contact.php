<?php
// ============================================================
//  contact.php — Minecraftive Contact Form Handler
// ============================================================

// Only process if form was submitted via POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  header('Location: index.html');
  exit;
}315302

// ── Receive & Sanitize ──────────────────────────────────────
$name    = htmlspecialchars(trim($_POST['name']    ?? ''));
$email   = htmlspecialchars(trim($_POST['email']   ?? ''));
$type    = htmlspecialchars(trim($_POST['type']    ?? ''));
$message = htmlspecialchars(trim($_POST['message'] ?? ''));

// ── Server-side Empty Checks ────────────────────────────────
$errors = [];

if (empty($name))    $errors[] = 'Name is required.';
if (empty($email))   $errors[] = 'Email address is required.';
if (!filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($email))
                     $errors[] = 'Email address is not valid.';
if (empty($type))    $errors[] = 'Please select a suggestion type.';
if (empty($message)) $errors[] = 'Message is required.';
if (strlen($message) < 20 && !empty($message))
                     $errors[] = 'Message must be at least 20 characters.';

// ── Type Label Map ──────────────────────────────────────────
$typeLabels = [
  'build' => '🧱 Build Idea',
  'mob'   => '👾 Mob Suggestion',
  'seed'  => '🌿 Seed Idea',
  'other' => '❓ Other',
];
$typeLabel = $typeLabels[$type] ?? htmlspecialchars($type);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Minecraftive – Message <?php echo empty($errors) ? 'Sent' : 'Error'; ?></title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Nunito:wght@400;700;800&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="style.css"/>
  <style>
    body { background: #0d0d1a; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 2rem; }
    .response-card { background: #0d1f14; border: 2px solid; border-radius: 12px; padding: 2.5rem 2rem; max-width: 560px; width: 100%; text-align: center; }
    .response-card.success { border-color: #2e7d32; box-shadow: 0 0 40px #4caf5022; }
    .response-card.error   { border-color: #d32f2f; box-shadow: 0 0 40px #d32f2f22; }
    .response-icon  { font-size: 3.5rem; margin-bottom: 1rem; }
    .response-title { font-family: 'Press Start 2P', monospace; font-size: .85rem; margin-bottom: 1rem; line-height: 1.6; }
    .response-title.success { color: #4CAF50; }
    .response-title.error   { color: #ef5350; }
    .summary-box { background: #071208; border: 1px solid #2e7d32; border-radius: 6px; padding: 1.2rem 1.4rem; text-align: left; margin: 1.5rem 0; }
    .summary-row { display: flex; gap: .75rem; margin-bottom: .6rem; font-size: .85rem; }
    .summary-row:last-child { margin-bottom: 0; }
    .summary-label { font-family: 'Press Start 2P', monospace; font-size: .45rem; color: #FFD600; min-width: 70px; padding-top: 3px; }
    .summary-value { color: #a5d6a7; line-height: 1.5; word-break: break-word; }
    .error-list { text-align: left; background: #1a0505; border: 1px solid #d32f2f; border-radius: 6px; padding: 1rem 1.4rem; margin: 1.2rem 0; }
    .error-list li { color: #ef9a9a; font-size: .85rem; margin-bottom: .4rem; }
    .back-btn { font-family: 'Press Start 2P', monospace; font-size: .55rem; background: #4CAF50; color: #fff; border: none; padding: .75rem 1.5rem; border-radius: 2px; box-shadow: 0 4px 0 #2e7d32; cursor: pointer; text-decoration: none; display: inline-block; transition: transform .1s; }
    .back-btn:hover { transform: translateY(-2px); background: #66bb6a; color: #fff; }
    .back-btn.gold { background: #FFD600; color: #1a1000; box-shadow: 0 4px 0 #b8860b; }
    .back-btn.gold:hover { background: #ffe033; color: #1a1000; }
  </style>
</head>
<body>

<?php if (empty($errors)): ?>

  <!-- ── SUCCESS ── -->
  <div class="response-card success">
    <div class="response-icon">✅</div>
    <div class="response-title success">Message Received!</div>
    <p style="color:#a5d6a7;font-size:.9rem;margin-bottom:0">
      Thanks <strong style="color:#fff"><?php echo $name; ?></strong>! We got your message and may feature your idea on Minecraftive.
    </p>

    <div class="summary-box">
      <div class="summary-row">
        <span class="summary-label">NAME</span>
        <span class="summary-value"><?php echo $name; ?></span>
      </div>
      <div class="summary-row">
        <span class="summary-label">EMAIL</span>
        <span class="summary-value"><?php echo $email; ?></span>
      </div>
      <div class="summary-row">
        <span class="summary-label">TYPE</span>
        <span class="summary-value"><?php echo $typeLabel; ?></span>
      </div>
      <div class="summary-row">
        <span class="summary-label">MESSAGE</span>
        <span class="summary-value"><?php echo nl2br($message); ?></span>
      </div>
      <div class="summary-row">
        <span class="summary-label">SENT AT</span>
        <span class="summary-value"><?php echo date('F j, Y \a\t g:i A'); ?></span>
      </div>
    </div>

    <a href="index.html" class="back-btn">&#9658; Back to Minecraftive</a>
  </div>

<?php else: ?>

  <!-- ── ERROR ── -->
  <div class="response-card error">
    <div class="response-icon">❌</div>
    <div class="response-title error">Oops! Something's Wrong</div>
    <p style="color:#ef9a9a;font-size:.9rem">Please fix the following errors and try again:</p>

    <ul class="error-list">
      <?php foreach ($errors as $error): ?>
        <li><?php echo $error; ?></li>
      <?php endforeach; ?>
    </ul>

    <a href="index.html" class="back-btn gold">&#8592; Go Back & Fix</a>
  </div>

<?php endif; ?>

</body>
</html>
