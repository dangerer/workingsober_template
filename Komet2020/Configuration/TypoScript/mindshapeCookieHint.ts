
plugin.tx_mindshapecookiehint {
  settings {
        #choose style between "dark" or "light" (optional, default: dark)
       # style = light
        #position on "top" or "bottom" of your website (optional, default: bottom)
        position = bottom
        #page-id for more details about your cookies (optional, default: - )
       readmore = 27
       #append the cookie to the bottom of your page so it doesn't overlap footer-content
       appendToBottom = 0
  }

  _LOCAL_LANG.de {
        hint.learnMore = Weitere Informationen.
        hint.dismiss = OK
        hint.message = Diese Website nutzt Cookies, um bestmögliche Funktionalität bieten zu können. Durch Nutzung dieser Seite sind Sie mit der Verwendung von Cookies einverstanden.
  }

  _LOCAL_LANG.default {
        hint.learnMore = More info.
        hint.dismiss = Got it
        hint.message = This website uses cookies to ensure you get the best experience on our website.
  }
  
  _LOCAL_LANG.cs {
        hint.learnMore = Více informací.
        hint.dismiss = OK
        hint.message = Coocies è Tyto webové stránky využívají k ukládání nastavení a optimálnímu fungování soubory cookies. Používáním tohoto webu vyjadřujete svůj souhlas s jejich využíváním.
  } 
}