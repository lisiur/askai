import { Messages } from "./enUS";

const messages: Messages = {
  lang: "Deutsch",

  "common.cancel": "Abbrechen",
  "common.ok": "OK",
  "common.copy": "Kopieren",
  "common.delete": "Löschen",
  "common.copy.success": "In die Zwischenablage kopiert",
  "common.network.error.timeout": "Netzwerk-Zeitüberschreitung",
  "common.network.error.connect": "Netzwerkverbindungsfehler",
  "common.newVersion": "Neue Version",

  "window.setting": "Einstellungen",

  "chat.new": "Neuer Chat",
  "chat.casual.title": "Schneller Chat",
  "chat.new.defaultTitle": "Neuer Chat",
  "chat.conversations": "Chats",
  "chat.inputNameHint": "Bitte geben Sie den Namen des Chats ein",
  "chat.delivered": "Zugestellt",
  "chat.exportMarkdown": "Markdown exportieren",
  "chat.rename": "Umbenennen",
  "chat.stick": "Anheften",
  "chat.unstick": "Lösen",
  "chat.archive": "Archivieren",
  "chat.busy": "Bitte warten Sie, bis die vorherige Antwort abgeschlossen ist.",

  "chat.explorer.hidePinned": "Angeheftete ausblenden",
  "chat.explorer.showPinned": "Angeheftete anzeigen",
  "chat.explorer.hideArchived": "Archivierte ausblenden",
  "chat.explorer.showArchived": "Archivierte anzeigen",

  "chat.message.resend": "Erneut senden",
  "chat.message.delete": "Löschen",
  "chat.message.delete.hint": "Möchten Sie diese Nachricht wirklich löschen?",
  "chat.message.stopReply": "Antwort beenden",

  "chat.prompt.changed": "Prompt geändert zu: {name}",

  "chat.config.model": "Modell",
  "chat.config.model.hint": "Welches Modell verwendet werden soll.",
  "chat.config.maxBacktrack": "Maximale Backtracks",
  "chat.config.maxBacktrack.hint": "Maximale Anzahl von Backtracks, 0 bedeutet unbegrenzt.",
  "chat.config.temperature": "Temperatur",
  "chat.config.temperature.hint":
    "Welche Sampling-Temperatur verwendet werden soll. Zwischen 0.0 und 2.0. Höhere Werte wie 0.8 machen die Antworten zufälliger, während niedrigere Werte wie 0.2 sie fokussierter und deterministischer machen.",
  "chat.config.topP": "Top P",
  "chat.config.topP.hint":
    "Eine Alternative zum Sampling mit Temperatur, genannt Nucleus-Sampling, bei dem das Modell nur die Ergebnisse der Tokens mit Top-P-Wahrscheinlichkeit berücksichtigt. Ein Wert von 0.1 bedeutet, dass nur die Tokens mit den oberen 10% der Wahrscheinlichkeit berücksichtigt werden.",
  "chat.config.n": "N",
  "chat.config.n.hint":
    "Wie viele Antwort-Varianten für jede Eingabe generiert werden sollen.",
  "chat.config.stop": "Stop-Sequenzen",
  "chat.config.stop.hint":
    "Bis zu 4 Zeichenfolgen, ab denen das Modell aufhört, weitere Tokens zu generieren.",
  "chat.config.maxTokens": "Maximale Tokens",
  "chat.config.maxTokens.hint":
    "Die maximale Anzahl von Tokens, die im Chat generiert werden.",
  "chat.config.presencePenalty": "Präsenzstrafe",
  "chat.config.presencePenalty.hint":
    "Eine Zahl zwischen -2.0 und 2.0. Positive Werte bestrafen neue Tokens basierend darauf, ob sie bereits im Text aufgetreten sind, was die Wahrscheinlichkeit erhöht, dass das Modell über neue Themen spricht.",
  "chat.config.frequencyPenalty": "Häufigkeitsstrafe",
  "chat.config.frequencyPenalty.hint":
    "Eine Zahl zwischen -2.0 und 2.0. Positive Werte bestrafen neue Tokens basierend auf ihrer bisherigen Häufigkeit im Text, was die Wahrscheinlichkeit verringert, dass das Modell dieselbe Zeile wörtlich wiederholt.",

  "chat.export": "Exportieren",

  "chatModel.new": "Neues Modell",
  "chatModel.models": "Modelle",
  "chatModel.inputNameHint": "Bitte geben Sie den Namen des Modells ein",
  "chatModel.rename": "Umbenennen",
  "chatModel.update.success": "Modell erfolgreich aktualisiert",
  "chatModel.price": "Preis",
  "chatModel.tokens": "Tokens",
  "chatModel.unit": "Einheit",

  "prompt.new": "Neues Prompt",
  "prompt.prompts": "Prompts",
  "prompt.inputNameHint": "Bitte geben Sie den Namen des Prompts ein",
  "prompt.newChat": "Neuer Chat",
  "prompt.rename": "Umbenennen",
  "prompt.update.success": "Prompt erfolgreich aktualisiert",

  "prompt.market.prompts": "Prompt-Sammlung",
  "prompt.market.actions.install": "Hinzufügen",
  "prompt.market.actions.newChat": "Neuer Chat",
  "prompt.market.install.success": "Prompt erfolgreich hinzugefügt",

  "plugin.market.plugins": "Plugins",
  "plugin.market.actions.install": "Installieren",
  "plugin.market.actions.update": "Aktualisieren",
  "plugin.market.actions.uninstall": "Deinstallieren",

  "config.setting": "Einstellungen",

  "setting.upgrade.newVersion": "Eine neue Version ist verfügbar",
  "setting.upgrade.cancel": "Später",
  "setting.upgrade.upgrade": "Aktualisieren",
  "setting.upgrade.downloading": "Wird heruntergeladen...",
  "setting.upgrade.relaunch": "Neu starten",
  "setting.upgrade.later": "Später",
  "setting.upgrade.download.success": "Download erfolgreich",
  "setting.upgrade.restart.hint": "Bitte starten Sie die App neu, um das Update anzuwenden.",

  "setting.locale": "Sprache",
  "setting.apiKey": "API-Schlüssel",
  "setting.proxy": "Proxy",
  "setting.theme": "Erscheinungsbild",
  "setting.theme.system": "Automatisch",
  "setting.theme.dark": "Dunkel",
  "setting.theme.light": "Hell",
  "setting.scale": "Skalierung",
  "setting.forwardUrl": "Weiterleitungsserver-URL",
  "setting.forwardApiKey": "API-Schlüssel weiterleiten",
  "setting.port": "Port",
  "setting.webPage": "Webseite",
  "setting.enableWebServer": "Webserver aktivieren",
  "setting.hideTaskbar": "Taskleiste ausblenden",
  "setting.hideMainWindow": "Hauptfenster ausblenden",
  "setting.needRestart.hint": "Die folgenden Einstellungen treten erst nach dem Neustart der App in Kraft",
  "setting.homePage": "Startseite",
} as const satisfies Messages;

export default messages;
