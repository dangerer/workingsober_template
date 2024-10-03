<?php
// TYPO3 Security Check
if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)->configureContainer(
    (
    new \B13\Container\Tca\ContainerConfiguration(
        'b13-2cols-auto', // CType
        '2 Column Auto', // label
        'Some Description of the Container', // description
        [
            [
                ['name' => 'left side', 'colPos' => 201],
                ['name' => 'right side', 'colPos' => 202]
            ]
        ] // grid configuration
    )
    )
        // set an optional icon configuration
        ->setIcon('EXT:container_example/Resources/Public/Icons/b13-2cols-auto.svg')
);