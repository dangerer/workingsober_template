
plugin.tx_femanager {
        view {
                templateRootPath >
                templateRootPaths {
#                        10 = EXT:femanager/Resources/Private/Templates/
			0 = fileadmin/Komet2020/Resources/Private/Femanager/Templates/               
		}
                partialRootPath >
                partialRootPaths {
#                        10 = EXT:femanager/Resources/Private/Partials/
                        0 = fileadmin/Komet2020/Resources/Private/Femanager/Partials/
                }
                layoutRootPath >
                layoutRootPaths {
 #                       10 = EXT:femanager/Resources/Private/Layouts/
                        0 = fileadmin/Komet2020/Resources/Private/Femanager/Layouts/
                }
        }

	settings {

		new {

			redirect = TEXT
			redirect {
				typolink {
					parameter = 20
					returnLast = url
					#linkAccessRestrictedPages = 1
				}
			}


			validation {
				firstName.required = 1
				lastName.required = 1
				terms.required = 1
				email.uniqueInDb = 1
			}

			email {
				
				createUserNotify {
                    ##########################
                    # Set values (overwrite)
                    ##########################

                    # (de)activate email completely
                    _enable = TEXT
                    _enable.value = 1

                    # Overwrite Receivers (please fill both)
#                    receiver {
#                        email = TEXT
#                        email.value =
#                        name = TEXT
#                        name.value =
#                    }

                    # Overwrite Senders (please fill both)
                    sender {
                        email = TEXT
                        email.value = admin@site.info
                        name = TEXT
                        name.value = Komet system
                    }

                    # Overwrite Subject
                    subject = TEXT
                    subject.data = LLL:EXT:femanager/Resources/Private/Language/locallang.xlf:emailCreateUserNotifySubject

                    # Set CC receivers
                    cc = TEXT
                    cc.value =

                    # Set mail priority from 1 to 5
                    priority = TEXT
                    priority.value =

                }


			}

		}

	}

}

plugin.tx_femanager._LOCAL_LANG.de {
	tx_femanager_domain_model_user.terms = Ich akzeptiere die allgemeinen Geschäftsbedingungen 
	tx_femanager_domain_model_user.termslinktext = Klicken Sie hier für die Allgemeinen Geschäftsbedingungen 
}
