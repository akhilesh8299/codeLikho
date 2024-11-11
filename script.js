function run(){
    let htmlCode= document.getElementById("html-code");
    let cssCode= document.getElementById("css-code");
    let jsCode= document.getElementById("js-code");
    let output= document.getElementById("output");

    output.contentDocument.body.innerHTML=htmlCode.value + "<style>" + cssCode.value + "</style>";

    output.contentWindow.eval(jsCode.value)

}


const txtFull = "For typing test"; 
const txtArr = txtFull.split("");

function getRandomTime() {
  return Math.random() * 0.5;
}
function getEle(id) {
  return document.getElementById("text");
}
function ModifyTxt(el, txt) {
  return (el.innerHTML = txt);
}
function writeOut(txtArr, curChar = 0) {
  const randomTime = getRandomTime();
  setTimeout(
    () => {
      const el = getEle("text");
      let elTxt = el.innerHTML;
      elTxt += txtArr[curChar];
      ModifyTxt(el, elTxt);
      if (curChar + 1 == txtArr.length) {
        return deleteOut(txtArr, txtArr.length);
      }
      return writeOut(txtArr, curChar + 1);
    },

    randomTime * 1000
  );
}
function deleteOut(txtArr, curChar = 0) {
  const randomTime = getRandomTime();
  setTimeout(
    () => {
      const el = getEle("text");
      let elTxt = el.innerHTML;
      //remove
      const elTxtArr = elTxt.split("");
      const elTxtArrLen = elTxtArr.length;
      console.log(elTxtArr.length - 1);
      const newElTxt = elTxtArr.splice(0, curChar - 1).join("");
      ModifyTxt(el, newElTxt);
      if (elTxtArrLen == 0) {
        return writeOut(txtArr, 0);
      }
      return deleteOut(txtArr, elTxtArrLen - 1);
    },

    randomTime * 1000
  );
  return;
}
writeOut(txtArr);
