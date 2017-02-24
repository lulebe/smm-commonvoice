const speech = require('../../speech/recognition')

const renderer = require('../../renderer')

module.exports = function (data) {

}

speech.addCommands({
  "(Zeig) (Zeige) (mir den) Wikipedia Artikel (für) (zu) (von) *article": () => {
    renderer.showVoiceOverlay(false)
  }
})


//fun
speech.addCommands({
  "Wer bist du (eigentlich)": () => {
    responsiveVoice.speak("Ich bin hier der Spiegel.", 'Deutsch Female', () => {renderer.showVoiceOverlay(false)})
  },
  "Wie sehe ich aus": () => {
    responsiveVoice.speak("Gar nicht übel, aber die Haare könnten besser sitzen.", 'Deutsch Female', () => {renderer.showVoiceOverlay(false)})
  },
  "Was kostest du": () => {
    responsiveVoice.speak("So etwa 280 Euro denke ich.", 'Deutsch Female', () => {renderer.showVoiceOverlay(false)})
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
      `, 'Deutsch Female', () => {renderer.showVoiceOverlay(false)})
  },
})
