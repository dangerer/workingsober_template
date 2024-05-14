
plugin.tx_gtnexabiscompetences_grid {
    settings {
#            gradient {
#        	         R.start = 13
#        	         R.end = 1
#        	         G.start = 203
#        	         G.end = 138
#        	         B.start = 4
#        	         B.end = 201
#        		}
        gradient {
            R.start = 112
            R.end = 66
            G.start = 157
            G.end = 133
            B.start = 37
            B.end = 244
        }
    }
}

plugin.tx_gtnexabiscompetences_grid {
    settings {

	oldTypoScriptPageUid = 5

		# page uids for diff using (used as default values)
		pageUids {
			login = 21
			dashboard = 10
			gridView = 11
			crossubjects = 9
			professions =
			export = 8
			import = 7
			history =
			settings =
			help =
			featuredGrids = 6
			importFromOldComet = 
		}

		dashboard {
			# pagebrowser in dashboard
			pagebrowser {
				itemsPerPage         = 15
				insertAbove          = 0
				insertBelow          = 1
				maximumNumberOfLinks = 10
				section = dashboard
			}
		}

		questionnaire {
			enableEeducationFunctionality = 0
			privacyType = contentPopup
			privacyContentUids = 
			pidProcess = 
		}

		webservice {
#			token = 
			# settings for migrating from old comet			
			oldCometAccessToken = 
#			oldCometWsUrl = https://archive.edustandards.org/komet-tool-1/export-data-to-new-comet-version
#			oldCometWsUrl = https://archive.edustandards.org/komet-tool-1/daten-in-neues-komet-uebertragen					
			migrateDataReplace {
				fe_users {
					pid = 
					usergroup = 
				}
			}
		}

	}
}

plugin.tx_exabiscompetences_actions {
	settings {

#		searchGrids = 2390, 2989, 2116, 2115, 2114, 2117, 2118
#		searchGrids = 3002, 3001, 3003, 3004, 3006, 3005
#		cutePartnerFeGroup = 19

	}
}

plugin.tx_exabiscompetences_digiconcept {
settings {
        eeducationFunctionality = 0
	useMDB = 1
        steps {
            plan {
                usedGrids = 3050
		customCurrentStateUsing = 1
            }
            check {
                usedDefaultQuestionnaires = 21
            }
        }
	pageUids {
		invitationsList = 134
		messagesPage = 142
	}
        reportPartTemplates {
            logo1 = <img src="{$siteBase}fileadmin/Komet2020/Resources/Public/Images/cute2.png" height="70">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="{$siteBase}fileadmin/Komet2020/Resources/Public/Images/exabis2.png" height="70">
            footerCompanyData (
		<a href="{$siteBase}">Komet</a>
            )
	    cssRules (
		.headerTable td.headerText .header {
		        color: #901a1e;
		}
                .headerHr {
			color: #901a1e;     
		}
                .footerHr {
			color: #901a1e;     
		}
		.actions-table td.subjectTitle {
		        border-top: 2px solid #901a1e;
		}
		.actionDetails td.label {
		        border-right: 1px solid #901a1e;
		}

	    )
        }
	useGroupingAccess = 1
        rootAccessGroupUid = 20
	mainAccessGroupUid = 21
    }
}



# English
[siteLanguage("languageId") == 1]
plugin.tx_gtnexabiscompetences_grid {
    settings {
		questionnaire {
			privacyContentUids = 292
		}
	}
}

[global]

