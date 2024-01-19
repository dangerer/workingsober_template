<?php
// TYPO3 Security Check
if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

// Let's get configuration of this extension from "Extension Manager"
//$GLOBALS['TYPO3_CONF_VARS']['EXTCONF'][$_EXTKEY] = unserialize($_EXTCONF);

$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['default'] = 'EXT:ns_theme_gtn/Configuration/RTE/Default.yaml';

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('@import "EXT:ns_theme_gtn/Configuration/PageTSconfig/setup.typoscript"');
