# Überschriften anpassen & default Wrap entfernen
<INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/Komet2020/Configuration/TypoScript/lib.tt_content_overwrite_header.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/Komet2020/Configuration/TypoScript/lib.navigation.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/Komet2020/Configuration/TypoScript/lib.rootline.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/Komet2020/Configuration/TypoScript/headerData.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/Komet2020/Configuration/TypoScript/image_responsiv.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/Komet2020/Configuration/TypoScript/media_responsiv.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/Komet2020/Configuration/TypoScript/lib.felogin.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/Komet2020/Configuration/TypoScript/lib.sr_feuserregistration.ts">
<INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/Komet2020/Configuration/TypoScript/lib.femanager.ts">

<INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/Komet2020/Configuration/TypoScript/exabis_competences_grid.ts">



# Klasse bodytext vom Text entfernen
lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.addAttributes.P >

config {
    disablePrefixComment = 0
    baseURL = {$siteBase}
}

plugin {
    tx_news {
        settings {
            facebookLocale = de_DE
            }
    }
}

# Pop-up-Funktion entfernen
tt_content.image.20.1.imageLinkWrap.directImageLink = 1
tt_content.image.20.1.imageLinkWrap.JSwindow = 0

lib.parseFunc_RTE.externalBlocks.table.stdWrap.HTMLparser.tags.table.fixAttrib.class >

tt_content.image.20.1.imageLinkWrap.width = 3000


lib.contentElement {
   templateRootPaths {
      200 = fileadmin/Komet2020/FluidStyledContent/Resources/Private/Templates/
   }
   partialRootPaths {
     200 = fileadmin/Komet2020/FluidStyledContent/Resources/Private/Partials/
   }
   layoutRootPaths {
      200 = fileadmin/Komet2020/FluidStyledContent/Resources/Private/Layouts/
   }
}


page = PAGE
page {
    shortcutIcon = fileadmin/Komet2020/Resources/Public/Images/favicon.ico
    config {
        spamProtectEmailAddresses = 6
        spamProtectEmailAddresses_atSubst = <span>&#064;</span>
        noPageTitle = 2
    }
    
    # body Tag
    bodyTag >
    bodyTagCObject = TEXT
    bodyTagCObject.field = uid
    bodyTagCObject.wrap = <body id="page-|" class="comet-frontend">
    
##    headerData.3 =< lib.headerDataSocial
    
    meta {
        # Description und Keywords aus den Seiten holen
        description {
            data = TSFE:page|description
        }
        keywords {
            data = TSFE:page|keywords
            # Bereinigen Leerzeichen weg und Umbruch = Komma
            keywords = 1
        }
        X-UA-Compatible = IE=edge
        X-UA-Compatible.httpEquivalent = 1
        viewport = width=device-width, initial-scale=1
        #viewport = width=device-width, initial-scale=.5, maximum-scale=12.0, minimum-scale=.25, user-scalable=yes
    }

    headerData {
        # Body Title
        1 = TEXT
        1 {
            field = title // subtitle
            wrap = <title>| : Komet</title>
        }
        # jQuery
    #    2 = TEXT
       # 2.value (
	#	<script>
#			// Set to the same value as the web property used on the site
#			var gaProperty = 'G-3R6M7TQBJ9';
#			// Disable tracking if the opt-out cookie exists.
#			var disableStr = 'ga-disable-' + gaProperty;
#			if (document.cookie.indexOf(disableStr + '=true') > -1) {
#			  window[disableStr] = true;
#			}
#			// Opt-out function
#			function gaOptout() {
#			  document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
#			  window[disableStr] = true;
#			alert('Das Tracking durch Google Analytics wurde in Ihrem Browser für diese Website deaktiviert.');
#			}
#			</script>
#		        <!-- Global site tag (gtag.js) - Google Analytics -->
#		<script async src="https://www.googletagmanager.com/gtag/js?id=G-3R6M7TQBJ9"></script>
#		<script>
#		  window.dataLayer = window.dataLayer || [];
#		  function gtag(){dataLayer.push(arguments);}
#		  gtag('js', new Date());
#		
#		  gtag('config', 'G-3R6M7TQBJ9', { 'anonymize_ip': true });
#		</script>
#)
        
        # jQuery
        15 = TEXT
        15.value (
        <script
              src="https://code.jquery.com/jquery-2.2.4.js"
              integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="
              crossorigin="anonymous"></script>

            <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
            <!--[if lt IE 9]>
              <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
              <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
            <![endif]-->
        )
        
        # Favicons
        17 = TEXT
        17.value (


            <link rel="apple-touch-icon" sizes="180x180" href="{$siteBase}fileadmin/Komet2020/Resources/Public/Images/apple-touch-icon.png">
            <link rel="icon" type="image/png" sizes="32x32" href="{$siteBase}fileadmin/Komet2020/Resources/Public/Images/favicon-32x32.png">
            <link rel="icon" type="image/png" sizes="16x16" href="{$siteBase}fileadmin/Komet2020/Resources/Public/Images/favicon-16x16.png">
            <link rel="manifest" href="{$siteBase}fileadmin/Komet2020/Resources/Public/Images/site.webmanifest">
            <link rel="mask-icon" href="{$siteBase}fileadmin/Komet2020/Resources/Public/Images/safari-pinned-tab.svg" color="#709e3e">
            <meta name="msapplication-TileColor" content="#00a300">
            <meta name="msapplication-config" content="{$siteBase}fileadmin/Komet2020/Resources/Public/Images/browserconfig.xml">
            <meta name="theme-color" content="#ffffff">
                        
        )
        
        20 =< lib.background_ressources
    }
    
    includeCSS {
        file1 = fileadmin/Komet2020/Resources/Public/bootstrap450/css/bootstrap.min.css
        file2 = fileadmin/Komet2020/Resources/Public/mdbootstrap/css/mdb.css
        file4 = fileadmin/Komet2020/Resources/Public/StyleSheets/fonts.css
        file5 = fileadmin/Komet2020/Resources/Public/StyleSheets/fontawesome.css
        file6 = fileadmin/Komet2020/Resources/Public/StyleSheets/gtn-icomoon.css
        file7 = fileadmin/Komet2020/Resources/Public/StyleSheets/solid.css
        #file5 = fileadmin/Komet2020/Resources/Public/StyleSheets/ionicons.css
        # file7 = fileadmin/Komet2020/Resources/Public/StyleSheets/flexslider.css
        file8 = fileadmin/Komet2020/Resources/Public/StyleSheets/jquery.contextMenu.css
        file9 = fileadmin/Komet2020/Resources/Public/mdbootstrap/css/addons-pro/steppers.min.css
        file10 = fileadmin/Komet2020/Resources/Public/StyleSheets/custom.css
        file11 = fileadmin/Komet2020/Resources/Public/StyleSheets/comet-general.css
        file12 = fileadmin/Komet2020/Resources/Public/StyleSheets/comet-grid.css
        file13 = fileadmin/Komet2020/Resources/Public/StyleSheets/comet-dashboard.css
    
    }
    
    # JS Libary im Footer einfügen
    includeJSFooterlibs {
        file1 = fileadmin/Komet2020/Resources/Public/JavaScript/popper.js
        file2 = fileadmin/Komet2020/Resources/Public/JavaScript/jquery.contextMenu.js
        file3 = fileadmin/Komet2020/Resources/Public/JavaScript/jquery.ui.position.min.js
        file4 = fileadmin/Komet2020/Resources/Public/bootstrap450/js/bootstrap.js
        file5 = fileadmin/Komet2020/Resources/Public/mdbootstrap/js/mdb.js
        file6 = fileadmin/Komet2020/Resources/Public/mdbootstrap/js/addons-pro/steppers.min.js
        # file3 = fileadmin/Komet2020/Resources/Public/JavaScript/animations-extended.min.css
        
        # file3 = fileadmin/Komet2020/Resources/Public/JavaScript/magnific-popup.js
    }
    
    # JS im Footer einfügen
    includeJSFooter {
        # file2 = fileadmin/Komet2020/Resources/Public/JavaScript/jquery.flexslider-min.js
        # file3 = fileadmin/Komet2020/Resources/Public/JavaScript/jquery.cookie.js
        file6 = fileadmin/Komet2020/Resources/Public/JavaScript/custom.js
		cookieHandler = fileadmin/Komet2020/Resources/Public/JavaScript/cookie_handler.js
    }
    
    # Analytics include
    5 = TEXT
    5.value (

        
    )
    
    
    10 = FLUIDTEMPLATE
    10 {
         file.cObject = CASE
         file.cObject {
             key {
                 # levelfield: -1 = schaut nach ob es einen Eintrag gibt, durch das ,slide wird nachgesehen ob ein Eintrag zu finden ist
                 data = levelfield: -1 , backend_layout_next_level, slide
                 # damit wird obriges überschrieben wenn es unter backendlayout einen eintrag gibt überschreibt er data
                 override.data = TSFE:page|backend_layout
                 # override.field = backend_layout
             }
             default = TEXT
            default.value = fileadmin/Komet2020/Resources/Private/Templates/1column.html
             
             1 = TEXT
             1.value = fileadmin/Komet2020/Resources/Private/Templates/1column.html
             
             2 = TEXT
             2.value = fileadmin/Komet2020/Resources/Private/Templates/HTML_Template_CompetenceGrid.html
             
             3 = TEXT
             3.value = fileadmin/Komet2020/Resources/Private/Templates/HTML_Template_Dashboard.html
             
             4 = TEXT
             4.value = fileadmin/Komet2020/Resources/Private/Templates/Comet_Login.html
             
             5 = TEXT
             5.value = fileadmin/Komet2020/Resources/Private/Templates/Comet_Homepage.html

             6 = TEXT
             6.value = fileadmin/Komet2020/Resources/Private/Templates/Comet_Tool.html
             
             7 = TEXT
             7.value = fileadmin/Komet2020/Resources/Private/Templates/Comet_Fe_Register.html
          
             
             }
    
        
        partialRootPath = fileadmin/Komet2020/Resources/Private/Partials/
        layoutRootPath = fileadmin/Komet2020/Resources/Private/Layouts/
        variables {
            
            comet_logo = IMAGE
            comet_logo {
                file = fileadmin/Komet2020/Resources/Public/Images/escaperoom2.png
                params=id=brand alt="Komet" title="Komet"
                imageLinkWrap = 1
                imageLinkWrap.enable = 1
                imageLinkWrap.typolink.parameter=1
                imageLinkWrap.typolink.ATagParams=class="navbar-brand"
            }
            
            comet_logo_text_white = IMAGE
            comet_logo_text_white {
                file = fileadmin/Komet2020/Resources/Public/Images/komet_logo_textwhite.svg
                params=id=brand alt="Komet" title="Komet"
                imageLinkWrap = 1
                imageLinkWrap.enable = 1
                imageLinkWrap.typolink.parameter=1
                imageLinkWrap.typolink.ATagParams=class="img-fluid flex-center"
            }
            
            comet_logo_white = IMAGE
            comet_logo_white {
                file = fileadmin/Komet2020/Resources/Public/Images/komet_logo_white.svg
                params=id=brand alt="Komet" title="Komet"
                imageLinkWrap = 1
                imageLinkWrap.enable = 1
                imageLinkWrap.typolink.parameter=1
                imageLinkWrap.typolink.ATagParams=class="navbar-brand"
            }
            
            logo_footer_1 = IMAGE
            logo_footer_1 {
                file = fileadmin/Komet2020/Resources/Public/Images/cute.jpg
                params=id=logocute alt="Competencies for Universities - using Technology in Education (CUTE)" title="Competencies for Universities - using Technology in Education (CUTE)"
                imageLinkWrap = 1
                imageLinkWrap.enable = 1
                imageLinkWrap.typolink.parameter=https://cute.ku.dk/
                imageLinkWrap.typolink.ATagParams=class="partner-logo"
            }
            
            logo_footer_2 = IMAGE
            logo_footer_2 {
                file = fileadmin/Komet2020/Resources/Public/Images/exabis.jpg
                params=id=logoexabis alt="Lernprozessbegleitung mit Exabis" title="Lernprozessbegleitung mit Exabis"
                imageLinkWrap = 1
                imageLinkWrap.enable = 1
                imageLinkWrap.typolink.parameter=https://exabis.at/
                imageLinkWrap.typolink.ATagParams=class="partner-logo"
            }
            
            footer_imprint = TEXT
            footer_imprint.data = date:U
            footer_imprint.strftime =%Y
            footer_imprint.wrap= © Komet &nbsp;|
            
            navigation_comet_top =< lib.navigation_comet_top
            navbar-top-classes = TEXT
            navigation_footer =< lib.navigation_footer
            language_text =< lib.language_text
            
            footer_txt1 < styles.content.get
            footer_txt1 {
                select.where = colPos = 0
                select.pidInList= 43
            }
            
            footer_txt2 < styles.content.get
            footer_txt2 {
                select.where = colPos = 1
                select.pidInList= 43
            }
            
            footer_img1 < styles.content.get
            footer_img1 {
                select.where = colPos = 2
                select.pidInList= 43
            }
            
            footer_img2 < styles.content.get
            footer_img2 {
                select.where = colPos = 3
                select.pidInList= 43
            }
            
            content_0 < styles.content.get
            content_0 {
                select.where = colPos = 0
            }

            content_1 < styles.content.get
            content_1 {
                select.where = colPos = 1
            }
            
            content_2 < styles.content.get
            content_2 {
                select.where = colPos = 2
            }
            
            content_3 < styles.content.get
            content_3 {
                select.where = colPos = 3
            }
            
            content_4 < styles.content.get
            content_4 {
                select.where = colPos = 4
            }
            
            content_5 < styles.content.get
            content_5 {
                select.where = colPos = 5
            }
            
            content_6 < styles.content.get
            content_6 {
                select.where = colPos = 6
            }
            
            content_7 < styles.content.get
            content_7 {
                select.where = colPos = 7
            }
            
            content_8 < styles.content.get
            content_8 {
                select.where = colPos = 8
            }
            
            content_9 < styles.content.get
            content_9 {
                select.where = colPos = 9
            }
            
            content_10 < styles.content.get
            content_10 {
                select.where = colPos = 10
            }
            content_11 < styles.content.get
            content_11 {
                select.where = colPos = 11
            }
            content_20 < styles.content.get
            content_20 {
                select.where = colPos = 20
            }
            
            HomepageTestImg = TEXT
            HomepageTestImg.value (
                <img src="fileadmin/Komet2020/Resources/Public/Images/IntroImgpng2.png" alt="" class="img-fluid">
            )
            
            homearrowdowntxt = TEXT
            homearrowdowntxt.value = Publizierte Kompetenzraster
            
            btnCommunityScrollDown = TEXT
            btnCommunityScrollDown.value = <p><a href="#communityVersion" class="btn btn-community waves-effect waves-light">zur Komet Community Version</a></p> 
            
            modalHomeOnLoad < styles.content.get
            modalHomeOnLoad {
                select.where = colPos = 0
                select.pidInList= 138
            }
            
        }
    }
    
    3000 = TEXT
    3000.value (
    )

}

# Background Image über Seiten Ressourcen einbinden
lib.background_ressources = COA
lib.background_ressources.10 = FILES
lib.background_ressources.10 {
    references {
        table = pages
        uid.data = page:uid
        fieldName = media
    }
    renderObj = TEXT
    renderObj {
        typolink{
            parameter.stdWrap{
                cObject = IMG_RESOURCE
                cObject{
                    file.import = uploads/media/
                    file.import.data = levelmedia:-1, slide
                    file.import.listNum = rand
                    file.treatIdAsReference = 1
                }
            }
            returnLast = url
            forceAbsoluteUrl = 1
        }
  wrap = <style type="text/css">.view-homepage, .intro-login { background-image: url(|) !important; }</style>
    }

}
# page.headerData.20 =< lib.background_ressources

# enable iFrames
lib.parseFunc_RTE.allowTags := addToList(object,param,embed,iframe)

[23 in tree.rootLineIds || 19 in tree.rootLineIds]
page {
    headerData.5 = TEXT
    headerData.5.value (
        <meta name="robots" content="noindex, nofollow">
        <meta name="googlebot" content="noindex">
    )
}
[global]


# Standartmeldung leeres Feld
plugin.tx_extbase._LOCAL_LANG.de {
   validator.notempty.empty = Dieses Feld muss ausgefüllt werden!
   validator.emailaddress.notvalid = Diese Mailadresse ist ungültig!
}


#### Komet Backend ####
#[page["backend_layout"] == '6'] || [page["backend_layout"] == '3'] || [page["backend_layout"] == '2'] || [page["backend_layout"] == '9']
[traverse(page, "backend_layout") in [6, 3, 2, 9]]
# Body Class
page.bodyTagCObject.wrap = <body id="page-|" class="fixed-sn comet-backend">
# navbar-comet-top Comet Tool, Klassen &  Toggle BTN
page.10.variables {
            navbar-top-classes.value = navbar-toggleable-md navbar-expand-lg double-nav
            toggle-btn-sidenav = TEXT
            toggle-btn-sidenav.value (
              <div class="dn mr-auto collapse-sidebar-backend">
                  <button class="btn-floating btn-default btn-sm btn-comet-round btn-dashboard-collapse button-collapse" data-activates="slide-out"><i class="fas fa-ellipsis-v"></i></button>
              </div>
            )
            # toggle-btn-sidenav.value >
            comet_logo >
}
[global]

#### Full Background Templates ####
#[page["backend_layout"] == '4'] || [page["backend_layout"] == '7']
[traverse(page, "backend_layout") in [4, 7]]
page.bodyTagCObject.wrap = <body id="page-|" class="comet-frontend full_bg-page">
page.10.variables {
#            comet_logo < .comet_logo_white
#            navbar-top-classes.value = navbar-text-white bg-black
            navbar-top-classes.value = bg-white
}
[global]

#### Login Page ####
#[page["backend_layout"] == '4']
[traverse(page, "backend_layout") == 4]
page.10.variables {
    mask-class = align-items-center
}
[global]

#### FE Register Page ####
#[page["backend_layout"] == '7']
[traverse(page, "backend_layout") == 7]
page.10.variables {
    mask-class =
}
[global]

#### Komet Homepage ####
#[page["backend_layout"] == '5']
[traverse(page, "backend_layout") == 5]
page.bodyTagCObject.wrap = <body id="page-|" class="home-page">
page.10.variables {
    navbar-top-classes.value = bg-white
}
[global]

# English ID = 1
[siteLanguage("languageId") == "1"]
page.10.variables {
#            comet_logo_white.file = fileadmin/Komet2020/Resources/Public/Images/komet_logo_white_en.svg
            comet_logo.file = fileadmin/Komet2020/Resources/Public/Images/komet_logo_en.svg
            comet_logo_text_white.file = fileadmin/Komet2020/Resources/Public/Images/komet_logo_textwhite_en.svg
            homearrowdowntxt.value = published competence grids
            logo_footer_2 = IMAGE
            logo_footer_2 {
                params=id=logoexabis alt="supporting learning processes with exabis" title="supporting learning processes with exabis "
            }
            btnCommunityScrollDown.value = <p><a href="#communityVersion" class="btn btn-community waves-effect waves-light">to comet community version</a></p> 
}
[global]


# Cache deaktivieren
config.no_cache = 1
page.config.no_cache = 1

# disable on live server!
config.contentObjectExceptionHandler = 0

lib.constants.close= TEXT
lib.constants.close.value = Schliessen
[siteLanguage("languageId") == "1"]
	lib.constants.close.value = Close
[global]

[loginUser('*')]
page.10.variables {
	modalHomeOnLoad >
}
[end]


