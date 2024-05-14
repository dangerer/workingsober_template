
plugin.tx_srfeuserregister_pi1 {

	templateFile = fileadmin/Komet2020/Resources/Private/Templates/Fe_user_registration_ext_template.html
	
	pid = 34
	userGroupsPidList = 37
	registerPID = 33
	editPID = 33
	confirmPID = 33
	loginPID = 31
	
	email.from = cas2andra@gmail.com
	email.fromName = Komet Tool
	email.admin = as2andra@gmail.com
	email.replyToAdmin = as2andra@gmail.com

	create {
		preview = 0
		fields = email, first_name, last_name, password, company, terms_acknowledged, image
		# captcha_response, terms_acknowledged, telephone, company, gender, address, city, zip, country, static_info_country
		required = email, first_name, last_name, password, terms_acknowledged
		allowUserGroupSelection = 0
		allowedUserGroups = 1
		defaultValues {
			usergroup = 7
#			gender = 99
		}
		overrideValues {
			usergroup = 7
		}
		evalValues {
			# at least one upercase, one lowercase, special character
			# preg[^(?=.*)(?=.*[a-z])(?=.*[A-Z])(?=.*[`~@#$%^&+=.,:;?!\-_*()\\\[\]"'|])([a-zA-Z0-9`~@#$%^&+=*.,:;?!\-_()\\\[\]"'|]){1,100}$]
			# preg does not work because preg contains ']'
			password = twice
#			captcha_response = freecap
			email = email,atMost[255],uniqueGlobal
		}
	}
}

plugin.tx_srfeuserregister {
	_LOCAL_LANG {
		de {
			required_info_notice = Alle Felder mit * sind Pflichtfelder.
			password = Passwort
			first_name = Vorname
			last_name = Nachname
			company = Organisation/Firma
			image = Profilbild
			password_again = Passwort wiederholen
			email = Email
		}
		en {
			
		}
	}	
}