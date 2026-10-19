<?php
declare(strict_types=1);

/** Shared application helpers. Keep templates focused on markup. */

const SITE_NAME = 'Noize Jeans Ltd.';

function e(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

function asset_url(string $path, string $basePath = ''): string
{
    return e($basePath . ltrim($path, '/'));
}

/** @return list<string> */
function gallery_images(string $collection): array
{
    $directory = dirname(__DIR__) . '/assets/images/' . $collection;
    $images = glob($directory . '/*.{jpg,jpeg,png,webp}', GLOB_BRACE) ?: [];
    natsort($images);

    return array_values(array_map(static fn (string $image): string => basename($image), $images));
}
