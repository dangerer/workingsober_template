# <INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/phooe/Configuration/TSconfig/TS-config_oldPHOOE.ts">
# Content Elemente ausblenden
TCEFORM.tt_content.CType {
 removeItems = textpic, image, text
#  removeItems = header, text, textpic, textmedia, image, bullets, table, uploads, multimedia, media,mailform, search, login, menu, shortcut, html, script, splash, div, list
#  removeItems = header, text, textpic, textmedia, image, bullets, table, uploads, multimedia, media,mailform, search, login, menu, shortcut, html, script, splash, div, list
}
TCAdefaults.tx_news_domain_model_news.hidden=1

# Rahmen unter Indention and Frames entfernen
TCEFORM.tt_content.section_frame {
     removeItems = 1,5,6,10,11,12,20,21
}

# Appearance Layouts definieren
TCEFORM.tt_content {
    layout {
        altLabels {
            1 = Normal
            2 = Homepage Intro
			3 = Blank Image
			4 = Inhalt 3
			5 = Grid Cards (Schulentwicklung)
			6 = Home Quicklinks Organisationen
			7 = Home Quicklinks Schulen
			8 = Home Quicklinks Personen
			9 = App Card (single App)
			10 = App Card (Card Group App)
			11 = Grid Cards (Linked by header_link)
        }
        addItems{
			4 = Inhalt 3
			5 = Grid Cards (Schulentwicklung)
			6 = Home Quicklinks Organisationen
			7 = Home Quicklinks Schulen
			8 = Home Quicklinks Personen
			9 = App Card (single App)
			10 = App Card (Card Group App)
			11 = Grid Cards (Linked by header_link)
			12 = Newsletter: 2 Spalten
            13 = Newsletter: Image Bottom center
            14 = PopUp Home onload
            15 = Infobox Digiconcept (Card row)
            16 = Blank Layout (remove frame & Anker)
        }
       }
	   frame_class {
	   		removeItems = ruler-before, ruler-after, indent, indent-left, indent-right
	   		addItems {
	   			headerWithoutTxt = Header ohne Text
	   		}
	   	}
}

# Frontend Layouts Seiteneigenschaften
TCEFORM.pages.layout {
	addItems {
        4 = Play Game Layout
	}
	altLabels {
		1 = Homepage
		2 = -
		3 = -
        
	}
}

# Example:
tx_news.templateLayouts {
    1 = News List Home
    2 = News List
}

mod.SHARED.defaultLanguageLabel = Deutsch

# Eigenen Header Style hinzufügen um versteckten Inhalt anzuzeigen
TCEFORM.tt_content.header_layout {
    addItems {
     7 = Header Sidebar H3 - Standort
     8 = Header Sidebar H3 - Oeffnungszeiten
     9 = Header Sidebar H3 - Abschiedsfeiern
     10 = Header Collapse Item (h3)
     11 = Header Slider
    }
}

TCEMAIN.table.tt_content {
 disablePrependAtCopy = 1
 //disableHideAtCopy = 1
}

# Fügt die Konfiguration "full" allen RTE's hinzu
# RTE.default.preset = full
RTE.default.preset = gtn_full2021
# Fügt die Konfiguration "minimal" dem bodytext von Inhaltselementen des Typs textmedia hinzu
#RTE.tt_content.types.textmedia.bodytext.preset = gtn_full2021
RTE.config.tt_content.bodytext.types.textmedia.preset = gtn_full2021
# Fügt die Konfiguration "default" dem bodytext von News-Datensätzen hinzu
RTE.config.tx_news_domain_model_news.bodytext.preset = gtn_full2021

config.admPanel = 0

styles.content.textmedia.linkWrap.lightboxEnabled = 1

# Setzen der Seitenbaumrechte per TypoScript
TCEMAIN {
	# Besitzergruppe festlegen (ID der Gruppe „Seitenbaumrechte“):
	permissions.groupid = 1 

	# Rechte Besitzer:
	permissions.user = show, editcontent, edit, delete, new

	# Rechte Besitzergruppe:
	permissions.group = show, editcontent, edit, new

	# Rechte "everybody" (kann ungesetzt bleiben):
	permissions.everybody =
}

TCEFORM.sys_file_reference.crop.config.cropVariants {
  default {
    title = Default desktop
    selectedRatio = NaN
    allowedAspectRatios {
      NaN {
        title = Frei
        value = 0.0
      }
      1:1 {
        title = 1:1
        value = 1.0
      }
      3:2 {
        title = 3:2
        value = 1.5
      }
      4:3 {
        title = 4:3
        value = 1.3333333333
      }
      16:9 {
        title = 16:9
        value = 1.7777777778
      }
      550:342 {
	      title = Kachel 2 Ebene
		  value = 1.60818713
      }
      550:381 {
	      title = Kachel 1 Ebene
		  value = 1.44356955
      }
      550:365 {
	      title = Kachel Home
		  value = 1.50684932
      }
      1500:751 {
	      title = Headerbild
		  value = 1.99733688
      }
     
    }
  }
}

# Fügt die Konfiguration "full" allen RTE's hinzu
# RTE.default.preset = full
RTE.default.preset = gtn_default
# Fügt die Konfiguration "minimal" dem bodytext von Inhaltselementen des Typs textmedia hinzu
#RTE.tt_content.types.textmedia.bodytext.preset = gtn_full
RTE.config.tt_content.bodytext.types.textmedia.preset = gtn_default
# Fügt die Konfiguration "default" dem bodytext von News-Datensätzen hinzu
RTE.config.tx_news_domain_model_news.bodytext.preset = gtn_default