
function speak(text) {
    const message = new SpeechSynthesisUtterance();
    message.lang = "en-EN";
    message.text = text;
    window.speechSynthesis.speak(message);
}
  

$(document).ready(
    function main(){
        $('.note-header p').on('click', function saytext(){
            var $this = $(this);
            speak($this.text());
        });
    }
);