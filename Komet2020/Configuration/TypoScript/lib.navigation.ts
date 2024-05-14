lib.navigation_main = COA
lib.navigation_main {
	
	# Hierarchisches Menü
	20 = HMENU 
	20 {
		# Was befindet sich im Menu
		# Menu wird definiert
		1 = TMENU
		1 {
			expAll = 1
			# Normalzustand der Menuitems
			NO = 1
			NO {
				#allWrap.insertData=1
				#allWrap=<li class="dropdown" id="menuitem{field:uid}">|
				wrapItemAndSub = <li class="nav-item">|</li>
				# Umwandeln der Sonderzeichen
				stdWrap.htmlSpecialChars = 1
				ATagParams.dataWrap = id="menuitem{field:uid}" class="nav-link"
			}
			IFSUB = 1
			IFSUB {
				#ATagTitle.field = subtitle//title
				allWrap.insertData=1
				allWrap=<li class="nav-item dropdown">|<a href="" class="nav-link dropdown-toggle" data-toggle="dropdown" id="menuitem{field:uid}" aria-haspopup="true" aria-expanded="false"><i class="fa fa-caret-down"></i>
				wrapItemAndSub = |</li>
				# wrapItemAndSub =  <li class="dropdown"><a href="" class="dropdown-toggle" data-toggle="dropdown">|</li>
				# doNotLinkIt = 0
				ATagParams.dataWrap = id="menuitem{field:uid}" class="nav-link nav-link-dropdown"
				# ATagParams.dataWrap = id="menu{field:uid}"
				#allWrap = | <!--<![endif]-->
				#linkWrap = |<!--[if gte IE 7]><!-->
				#ATagBeforeWrap = 1
				
			}
			ACT < .NO
			ACT = 1
			ACT {
				wrapItemAndSub = <li class="nav-item active">|</li>
			}
			# Currentzustand Normal wird kopiert
			CUR < .NO
			CUR {
				wrapItemAndSub = <li class="nav-item active">|</li>
			}
			CURIFSUB < .IFSUB
			CURIFSUB {
				allWrap=<li class="nav-item dropdown active">|<a href="" class="nav-link dropdown-toggle" data-toggle="dropdown" id="menuitem{field:uid}" aria-haspopup="true" aria-expanded="false"><i class="fa fa-caret-down"></i></a>
			}
			ACTIFSUB < .IFSUB
			ACTIFSUB {
				allWrap=<li class="nav-item dropdown active activesub">|<a href="" class="nav-link dropdown-toggle" data-toggle="dropdown" id="menuitem{field:uid}" aria-haspopup="true" aria-expanded="false"><i class="fa fa-caret-down"></i></a>
			}
		}
		2 < .1
		2 {
			wrap = </a><div class="dropdown-menu" aria-labelledby="menuitem1"><div class="triangle"></div><div class="dropdowninner">|</div></div>
			ACT < .NO
			NO = 1
			NO {
				wrapItemAndSub = |
				ATagParams.dataWrap = id="menuitem{field:uid}" class="dropdown-item"
			}
			CUR < .NO
			CUR = 1
			CUR {
			 	wrapItemAndSub = |
				doNotLinkIt = 0
				ATagParams.dataWrap = id="menuitem{field:uid}" class="dropdown-item active"
			}
			ACT = 1
			ACT {
			 	wrapItemAndSub = |
				doNotLinkIt = 0
				ATagParams.dataWrap = id="menuitem{field:uid}" class="dropdown-item active"
			}
			IFSUB >
			ACTIFSUB >
			CURIFSUB >
		}
		3 >
	}
}

lib.navigation_comet_top = COA
lib.navigation_comet_top {
	# Hierarchisches Menü
	20 = HMENU 
	20 {
		# Menu wird definiert
		1 = TMENU
		1 {
			expAll = 1
			# Normalzustand der Menuitems
			NO = 1
			NO {
				#allWrap.insertData=1
				#allWrap=<li class="dropdown" id="menuitem{field:uid}">|
				wrapItemAndSub = <li class="nav-item">|</li>
				# Umwandeln der Sonderzeichen
				stdWrap.htmlSpecialChars = 0
				ATagParams.dataWrap = id="menuitem{field:uid}" class="nav-link" alt="{field:title}" title="{field:title}"
				# stdWrap.wrap = <i class="fa fa-envelope"></i>|
			}
			ACT < .NO
			ACT = 1
			ACT {
				wrapItemAndSub = <li class="nav-item active">|</li>
			}
			# Currentzustand Normal wird kopiert
			CUR < .NO
			CUR {
				wrapItemAndSub = <li class="nav-item active">|</li>
			}
			IFSUB = 1
			IFSUB {
				#ATagTitle.field = subtitle//title
				allWrap.insertData=1
				allWrap=<li class="nav-item dropdown dropdown-remove-chevronNO">|
				# wrapItemAndSub = |</li>
				# wrapItemAndSub =  <li class="dropdown"><a href="" class="dropdown-toggle" data-toggle="dropdown">|</li>
				doNotLinkIt = 0
				ATagParams.dataWrap = id="menuitem{field:uid}" class="nav-link dropdown-toggle waves-effect waves-light" role="button" data-toggle="dropdown"
				# ATagParams.dataWrap = id="menu{field:uid}"
				#allWrap = | <!--<![endif]-->
				#linkWrap = |<!--[if gte IE 7]><!-->
				#ATagBeforeWrap = 1
			}
			CURIFSUB < .IFSUB
			CURIFSUB {
				
			}
			ACTIFSUB < .IFSUB
			ACTIFSUB  {
				
			}
		}
		2 < .1
		2 {
			wrap = <div class="dropdown-menu dropdown-menu-right">|</div></li>
			ACT < .NO
			NO = 1
			NO {
				wrapItemAndSub = |
				ATagParams.dataWrap = id="menuitem{field:uid}" class="dropdown-item"
			}
			CUR < .NO
			CUR = 1
			CUR {
			 	wrapItemAndSub = |
				doNotLinkIt = 0
				ATagParams.dataWrap = id="menuitem{field:uid}" class="dropdown-item active"
			}
			ACT = 1
			ACT {
			 	wrapItemAndSub = |
				doNotLinkIt = 0
				ATagParams.dataWrap = id="menuitem{field:uid}" class="dropdown-item active"
			}
			IFSUB >
			CURIFSUB >
			ACTIFSUB >
		}
		3 >
	}
	
#	30 = TEXT
#	30.value (
#			<li class="nav-item dropdown dropdown-remove-chevronf">
#				<a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true">
#	)
	
#	32 = TEXT
#	32.value = English
#	32.lang.de = Deutsch

#	34 = TEXT
#	34.value (
#				</a>
#			<div class="dropdown-menu dropdown-menu-right">
#	)
	
#    36 = HMENU
#    36 {
#         special = language
#         special.value = 0,1
#         special.normalWhenNoLanguage = 0
#             
#         1 = TMENU
#         1 {
#             noBlur = 1
#             NO = 1
#             NO {
#                 doNotLinkIt = 1
#                 stdWrap.override =  Deutsch  ||  English
#                 stdWrap {
#                     typolink {
#                         parameter.data = page:uid
#                         additionalParams = &L=0 || &L=1
#                         ATagParams = hreflang="de-DE" || hreflang="en-US"
#                         ATagParams = class="dropdown-item"
#                         addQueryString = 1
#                         addQueryString.exclude = L,id
#                         addQueryString.method = GET
#                     }
#                 }
#             }
#             ACT < .NO
#             ACT.linkWrap = |
#             ACT.stdWrap.typolink.ATagParams = class="dropdown-item active"
#             USERDEF1 < .NO
#             USERDEF1 {
#                 linkWrap = <span class="nolang">|</span>
#                 stdWrap.typolink >
#             }
#             USERDEF2 < .ACT
#             USERDEF2 {
#                 linkWrap = <span class="activelang">|</span>
#                 stdWrap.typolink >
#             }
#         }
#    }
#    38 = TEXT
#    38.value (
#			    </div>
#			</li>
#    )
	
	40 = TEXT
	40 {
		wrap = <li class="nav-item">|</li>
		value = <i class="gtnicon-gtn-dashboard-rounded"></i> <span class="px-2 d-lg-none">Komet Dashboard</span>
		typolink.parameter = 10
		typolink.ATagParams.dataWrap = class="nav-link" id="menuitem22" alt="Komet Dashboard" title="Komet Dashboard"
	}
	40 >
	50 = TEXT
	50 {
		wrap = <li class="nav-item">|</li>
		value = <i class="fas fa-envelope"></i>
		typolink.parameter = 22
		typolink.ATagParams.dataWrap = class="nav-link" id="menuitem22" alt="Kontakt" title="Kontakt"
	}
	# Kontakt deaktivieren
	50 >
	
	60 = TEXT
	60 {
		wrap = <li class="nav-item">|</li>
		value = <i class="fa fa-sign-in"></i> <span class="px-2 d-lg-none">Login</span>
		typolink.parameter = 21
		typolink.ATagParams.dataWrap = class="nav-link" title="Login"
	}
		
}

[siteLanguage("languageId") == "1"]
lib.navigation_comet_top.40.value = <i class="gtnicon-gtn-dashboard-rounded"></i> <span class="px-2 d-lg-none">Comet dashboard</span>
lib.navigation_comet_top.40.typolink.ATagParams.dataWrap = class="nav-link" id="menuitem22" alt="Comet dashboard" title="Comet dashboard"
[end]

[loginUser('*')]
lib.navigation_comet_top {
	60 >
	
	62 = TEXT
	62.value = <li class="nav-item dropdown dropdown-remove-chevron"><a class="nav-link dropdown-toggle nav-link-headerpic" data-toggle="dropdown" role="button" aria-haspopup="true"><span class="head-profilpic">
	
	64 = COA_INT
	64 {
		10 = FILES
		10 {
			references {
				table = fe_users
				fieldName = image
				uid.dataWrap = {TSFE:fe_user|user|uid}
			}
			begin = 0
			maxItems = 1
			renderObj = IMAGE
			renderObj {
				file.import.dataWrap = {file:current:storage}:{file:current:identifier}
				wrap = |
				file.width = 75c
				file.height = 75c
			}
		}
	}
	
	66 = TEXT
	66.value = </span> <span class="d-lg-none">Profil</span></a><div class="dropdown-menu dropdown-menu-right">
	
	68 = TEXT
	68 {
		value = Profil bearbeiten
		typolink.parameter = 18
		typolink.ATagParams.dataWrap = class="dropdown-item"
	}
	
	70 = TEXT
	70 {
		value = Logout
		typolink.parameter = 21
		typolink.additionalParams=&logintype=logout
		typolink.ATagParams.dataWrap = class="dropdown-item"
	}
	
	72 = TEXT
	72.value (
		    </div>
		</li>
	)	
}
[end]

[siteLanguage("languageId") == "1" && loginUser('*')] 
lib.navigation_comet_top {
	66.value = </span> <span class="d-lg-none">Profile</span></a><div class="dropdown-menu dropdown-menu-right">
	68.value = Edit profile
}
[end]

lib.navigation_footer = COA
lib.navigation_footer {
	
	10 = TEXT
	10.value = © 2021 GTN Solution GmbH - Global Training Network
	10.typolink.parameter = https://lab1.gtn-solutions.com/
	10.typolink.ATagParams.dataWrap = target="_blank"
	10.wrap = <ul class="nav-footer"><li>|</span></li>
	10>
	# Hierarchisches Menü
	20 = HMENU 
	20 {
		# Was befindet sich im Menu
		# Menu wird definiert
		special = list
		special.value = 17,16
		includeNotInMenu = 1 
#		do
		1 = TMENU
		1 {
			expAll = 1
			wrap = |</ul>
			# Normalzustand der Menuitems
			NO = 1
			NO {
				#allWrap.insertData=1
				#allWrap=<li class="dropdown" id="menuitem{field:uid}">|
				wrapItemAndSub = <li>|</li>
				# Umwandeln der Sonderzeichen
				stdWrap.htmlSpecialChars = 1
				# ATagParams.dataWrap = id="menuitem{field:uid}"
			}
		}
		30 = TEXT
		30.value = </ul>

	}
}
