const resultElement=document.getElementById("result");
let recognition;
function startCnverting(){
    if( 'webkitSpeechRecognition' in window){
        recognition=new webkitSpeechRecognition();
    setup(recognition);
    recognition.start();
}}
function setup(recognition){
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang="en-US";
    
    recognition.onresult=function(event){
        const {finalTrans,interTrans}=processResult(event.results);
            resultElement.innerHTML=finalTrans+interTrans;

        }
    }


function processResult(results){
    let finalTrans='';
    let interTrans='';
    for(let i=0;i<results.length;i++){
        let trans=results[i][0].transcript;
        trans=trans.replace('\n',"<br>");
        if(results[i].isFinal){
            finalTrans+=trans;
        }else{
                interTrans+=trans;
            }}
            return {finalTrans,interTrans}
        }

        function stopCnverting(){
            if(recognition){
                recognition.stop();
            }


        }


