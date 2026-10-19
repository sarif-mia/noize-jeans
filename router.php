<?php
// Router for PHP's built-in development server. Apache continues to use .htaccess.
$request_path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?? '/';
$file_path = __DIR__ . $request_path;

if ($request_path !== '/' && is_file($file_path)) {
    return false;
}

$route = trim($request_path, '/');
if ($route === '') {
    require __DIR__ . '/index.php';
    return true;
}

if (preg_match('/^[a-z-]+$/', $route) && is_file(__DIR__ . '/pages/' . $route . '.php')) {
    $page_key = $route;
    require __DIR__ . '/pages/' . $route . '.php';
    return true;
}

http_response_code(404);
echo 'Page not found';
