# Template FE Login
plugin.tx_felogin_login {
        view {
		templateRootPaths.333 = fileadmin/Komet2020/Resources/Private/FeLogin/Templates/					
	        partialRootPaths.333 = fileadmin/Komet2020/Resources/Private/FeLogin/Partials/
		layoutRootPaths.333 = fileadmin/Komet2020/Resources/Private/FeLogin/Layouts/
	}
	settings {
		#   templateFile = fileadmin/Komet2020/Resources/Private/Templates/FrontendLogin.html
		email_from = noreply@site.info
		email_fromName = Koordinierungsstelle Arbeitsfähigkeit erhalten
	}
}

plugin.tx_felogin_pi1 {
  _LOCAL_LANG {
    de {
	  ll_status_header = Sie sind eingeloggt  
      username = Benutzername:
      password = Passwort:
      ll_forgot_header = Passwort vergessen?
      ll_forgot_header_backToLogin = Zurück zum Login
      ll_enter_your_data = Benutzername oder Emailadresse:
      reset_password = Passwort zurücksetzen
      ll_change_password_message = Bitte geben Sie das neue Passwort zweimal ein.
      newpassword_label1 = Neues Passwort:
      newpassword_label2 = Neues Passwort wiederholen:
      ll_change_password_done_message = Ihr Passwort wurde erfolgreich geändert
      ll_change_password_header = Passwort ändern
      change_password = Passwort ändern
      ll_welcome_message = Geben Sie bitte hier Ihren Benutzernamen und Ihr Passwort ein:
      ll_forgot_reset_message = Geben Sie bitte hier Ihren Emailadresse ein. Wir senden Ihnen umgehend Informationen zum Zurücksetzen des Passworts zu. 
      ll_forgot_validate_reset_password (
Passwort zurücksetzen 
%s
Sie erhalten diese Nachricht, da Sie Ihr Passwort zurücksetzen lassen wollen. Zur Bestätigung bitte nachstehenden Link aufrufen:
%s

Aus Sicherheitsgründen ist dieser Link nur bis %s aktiv. Falls Sie den Link nicht bis dahin aufgerufen haben, müssen Sie die Schritte zum Zurücksetzen des Passworts wiederholen.

Mit freundlichen Grüßen 

Komet   
)
      ll_error_message = Während der Anmeldung ist ein Fehler aufgetreten. Wahrscheinlich haben Sie Ihren Benutzernamen oder das Passwort falsch eingegeben. Vergewissern Sie sich, dass Sie Ihre Zugangsdaten korrekt eingegeben haben - Groß-/Kleinschreibung wird unterschieden. Eine andere Möglichkeit ist, dass Sie die Cookies in Ihrem Web-Browser deaktiviert haben.
      ll_forgot_reset_message_emailSent = Es wurde eine E-Mail mit einem Link zum Zurücksetzen des Passworts an die in Ihrem Benutzerkonto gespeicherte E-Mail-Adresse geschickt. Sollten Sie keine E-Mail erhalten, wurde Ihr Konto oder die E-Mail-Adresse nicht gefunden.
    }
    en {
      ll_status_header = Your are logged in 
      username = Username
      password = Password

    }
    default {
      username = Username
      password = Password
      
    }
  }
}