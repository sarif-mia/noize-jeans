<?php
declare(strict_types=1);

require_once __DIR__ . '/includes/bootstrap.php';

if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
}

function contact_redirect(string $type, string $message): never
{
    $_SESSION['contact_flash'] = ['type' => $type, 'message' => $message];
    header('Location: /contact', true, 303);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    contact_redirect('error', 'Invalid contact form request.');
}

$csrfToken = (string) ($_POST['csrf_token'] ?? '');
if (!hash_equals((string) ($_SESSION['contact_csrf'] ?? ''), $csrfToken)) {
    contact_redirect('error', 'Your session has expired. Please try again.');
}

if (trim((string) ($_POST['website'] ?? '')) !== '') {
    contact_redirect('success', 'Thank you for your message.');
}

$name = trim((string) ($_POST['name'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$subject = trim((string) ($_POST['subject'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));

if ($name === '' || $subject === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    contact_redirect('error', 'Please complete every field with a valid email address.');
}

if (mb_strlen($name) > 120 || mb_strlen($subject) > 180 || mb_strlen($message) > 5000) {
    contact_redirect('error', 'Please shorten your message and try again.');
}

$recipient = getenv('NOIZE_CONTACT_TO') ?: 'info@noizejeans.com';
$sender = getenv('NOIZE_CONTACT_FROM') ?: 'noreply@noizejeans.com';
$safeSubject = str_replace(["\r", "\n"], '', $subject);
$body = "Name: {$name}\nEmail: {$email}\n\nMessage:\n{$message}\n";
$headers = [
    'From: ' . $sender,
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
];

if (!mail($recipient, '[Noize Jeans] ' . $safeSubject, $body, implode("\r\n", $headers))) {
    contact_redirect('error', 'We could not send your message right now. Please email info@noizejeans.com directly.');
}

contact_redirect('success', 'Thank you. Your message has been sent.');
