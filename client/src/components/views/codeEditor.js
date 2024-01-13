import React, { useEffect } from 'react';
let datalist = [];
let questionnumberprev = 1;
const CodeEditor = ({ code, onChanges, data, userdata, QuestionData }) => {
  const codeTextarea = document.getElementById('code');
  const lineNumbersDiv = document.getElementById('line-numbers');
  function updateLineNumbers() {
    const lines = codeTextarea.value.split('\n');
    const lineNumbersHtml = lines.map((_, index) => `<div>${index + 1}.</div>`).join('');
    lineNumbersDiv.innerHTML = lineNumbersHtml;

  }
  useEffect(() => {
    document.addEventListener('paste', (event) => {
      event.preventDefault();
    })
    document.addEventListener('copy', (event) => {
      event.preventDefault();
    })
  }, [])
  const changedata = (event) => {

    codeTextarea.addEventListener('input', updateLineNumbers);
    let name = event.target.name;
    let value = event.target.value;
    onChanges({ ...data, [name]: value });
    questionnumberprev = QuestionData.questionnumber;
    if (QuestionData.questionnumber !== questionnumberprev) {
      datalist.push({
        name: userdata.name,
        userid: userdata.userid,
        questionnumber: QuestionData.questionnumber,
        questionname: QuestionData.questionname,
        code: data.codewrite

      });
    } else {
      datalist[QuestionData.questionnumber - 1] = {
        name: userdata.name,
        userid: userdata.userid,
        questionnumber: QuestionData.questionnumber,
        questionname: QuestionData.questionname,
        code: data.codewrite

      }
    }
    localStorage.setItem("Event", JSON.stringify(datalist))

  }
  return (
    <>
      <div className=' w-[100%] h-[100%]  bg-[#0e0e13]  cursor-text flex'>
        <div className=' bg-none div1 w-[50px] h-[98%] mt-[16px]  text-center  overflow-hidden'>
          <div id='line-numbers' className='text-[#fff] ' >1.</div>
        </div>
        <textarea name="codewrite" value={code} id="code" cols="118" rows="20" className=' bg-[#181818] resize-none text-[#fff] w-[94%] h-[100%] border-none outline-none p-[20px] font-[600]' onChange={changedata}></textarea>

      </div>

    </>
  );
};

export default CodeEditor;
