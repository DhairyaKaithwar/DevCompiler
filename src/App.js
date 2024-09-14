import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import Result from "./components/Result";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { useCallback, useState } from "react";
import  HTML_icon from './assets/HTML_icon.png';
import CSS_icon from './assets/CSS_icon.png';
import JS_icon from './assets/JS_icon.png';

function App() {



  const [HTML, setHTML] = useState('')
  const [CSS, setCSS] = useState('')
  const [Js, setJs] = useState('')

  const onChangeHTML=useCallback((value) => {
    // console.log(value);
    setHTML(value);
  },[])
  
  const onChangeCSS=useCallback((value) => {
    // console.log(value);
    setCSS(value);
  },[])
  const onChangeJs=useCallback((value) => {
    // console.log(value);
    setJs(value);
  },[])

  const CodeText=`
  <html>
  <body>${HTML}</body>
  <style>body{background-color:rgb(224, 228, 233)}</style>
  <style>${CSS}</style>
  <script>${Js}</script>
  </html>
  `

  return (
    <>
      {/* <div className='navbar'>
      CODE EDITOR
    </div> */}
      {/* main content  */}
      <div className=" p-2">
        {/* Editor  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
         {/* Html Editor */}
          <div className="bg-[#282c34] p-4 pt-2 rounded-2xl shadow">
            <div className="flex">
              <img className=" w-11 h-11" src={HTML_icon} alt="" />
              <h2 className="pl-2 text-lg font-semibold mb-2 pt-2 text-white">HTML </h2>
            </div>
            <CodeMirror
              value={HTML}
              height="342px"
              theme="dark"
              extensions={[html(true)]}
              onChange={onChangeHTML}
            />
          </div>
          {/* Css Editor  */}
          <div className="bg-[#282c34] p-4 pt-2 rounded-2xl shadow">
          <div className="flex">
              <img className=" w-11 h-11" src={CSS_icon} alt="" />
              <h2 className=" pl-2 text-lg font-semibold mb-2 pt-2 text-white">CSS </h2>
            </div>
            <CodeMirror
              value={CSS}
              height="342px"
              theme="dark"
              extensions={[css(true)]}
              onChange={onChangeCSS}
            />
          </div>
          {/* JavaScript Editor  */}
          <div className="bg-[#282c34] p-4 pt-2 rounded-2xl shadow">
          <div className="flex">
              <img className=" w-9 h-9 rounded-3xl" src={JS_icon} alt="" />
              <h2 className=" pl-3 text-lg font-semibold mb-2 pt-2 text-white">JavaScript </h2>
            </div>
            <CodeMirror
              value={Js}
              height="342px"
              theme="dark"
              extensions={[javascript(true)]}
              onChange={onChangeJs}
            />
          </div>
        </div>
      </div>
      {/* <Editor/> */}
      <Result codeText={CodeText}/>
    </>
  );
}

export default App;
