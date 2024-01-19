<?php

// Provide detailed information and depenencies of EXT:ns_theme_gtn
$EM_CONF['ns_theme_gtn'] = [
    'title' => 'Working Sober TYPO3 Theme',
    'description' => 'The child theme of EXT:ns_basetheme',
    'category' => 'templates',
    'author' => 'Team NITSAN',
    'author_email' => 'info@nitsan.in',
    'author_company' => 'NITSAN Technologies Pvt Ltd',
    'state' => 'stable',
    'version' => '1.0.0',
    'constraints' => [
        'depends' => [
            'ns_basetheme' => '10.0.0-11.5.99',
        ],
        'conflicts' => [
        ],
        'suggests' => [
        ],
    ],
    //'autoload' => array(
    //	'classmap' => array('Classes/'),
    //),
];
