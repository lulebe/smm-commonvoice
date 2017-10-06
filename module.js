const $ = require('jquery')
const querystring = require('querystring')

const speech = require('../../speech/recognition')

const renderer = require('../../renderer')

module.exports = function (data) {

}

const voiceErrorDE = () => {
  responsiveVoice.speak('Entschuldigung, es gab einen Fehler.', 'Deutsch Female', {onend: () => {
    renderer.showVoiceOverlay(false)
  }})
}

speech.addCommands({
  "(Zeig) (Zeige) (mir den) Wikipedia Artikel (für) (zu) (von) *article": (title) => {
    const s = querystring.stringify({titles: title})
    $.get('https://de.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&' + s)
    .then(data => {
      const pages = data.query.pages
      const keys = Object.keys(pages)
      if (keys.length === 0) {
        voiceErrorDE()
        return
      }
      const extract = pages[keys[0]].extract
      var extractSentences = extract.split('.')
      if (extractSentences.length > 3) {
        extractSentences = extractSentences.splice(0, 3)
      }
      extractSentences = extractSentences.join('.')
      responsiveVoice.speak(extractSentences, 'Deutsch Female', {onend: () => {
        renderer.showVoiceOverlay(false)
      }})
    }, voiceErrorDE)
  }
})


//fun
speech.addCommands({
  "Wer bist du (eigentlich)": () => {
    responsiveVoice.speak("Ich bin hier der Spiegel.", 'Deutsch Female', {onend: () => {
      renderer.showVoiceOverlay(false)
    }})
  },
  "Wie sehe ich aus": () => {
    responsiveVoice.speak("Gar nicht übel, aber die Haare könnten besser sitzen.", 'Deutsch Female', {onend: () => {
      renderer.showVoiceOverlay(false)
    }})
  },
  "Was kostest du": () => {
    responsiveVoice.speak("So etwa 450 Euro denke ich.", 'Deutsch Female', {onend: () => {
      renderer.showVoiceOverlay(false)
    }})
  },
  "Wie funktionierst du": () => {
    responsiveVoice.speak(`
      Sehr kompliziert. Ein halb transparenter Spiegel vor einem Bildschirm.
      Darüber befindet sich ein Ultraschallsensor, der erkennt, ob jemand vor mir steht,
      damit mein Bildschirm an geht. Nach 30 Sekunden ohne Person davor geht er wieder aus.
      Muss ja Strom sparen. Unter dem Bildschirm befinden sich fünf Buttons, um mich zu
      steuern. Außerdem gibt es ein Mikrofon, das deine Fragen aufnimmt, sobald du
      Hey Spiegel sagst. Diese werden zur Verarbeitung an Google geschickt
      und ich bekomme den Text wieder. Daraus lese ich dann ab, was du wohl vorhast.
      Jede meiner Funktionen kommt aus einem Modul, da gibt es welche für Wetter, Nachrichten,
      Verkehr und vieles mehr. Diese können über meine App am Handy hinzugefügt und bearbeitet
      werden. Der Computer, der das alles verarbeitet, ist ein Raspberry Pi 3, der auch in
      diesem Kasten steckt.
      `, 'Deutsch Female', {onend: () => {
        renderer.showVoiceOverlay(false)
      }})
  },
})
