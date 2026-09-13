import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";


export default function WordCounterPage(){

    let [inputAllData, setInputAllData] = useState('');
    let [totalWord, setTotalWord] = useState(0);
    let [wordArray, setWordArray] = useState([]);
    let [totalChar, setTotalChar] = useState(0);
    let [totalSentences, setTotalSentences] = useState(0);
    let [totalParagraph, setTotalParagraph] = useState(0);
    let [readingTime, setReadingTime] = useState(0);
    let [speakingTime, setSpeakingTime] = useState(0);
    let [wordDensity, setWordDensity] = useState([]);
    let [wordCounter, setWordCounter] = useState();
    let [wDensity, setWDensity] = useState();

    /* for seaching unique word or character */
    let [searchInputWord, setSearchInputWord] = useState('');
    //upper case concept
    function upperCase(){
        setInputAllData(inputAllData.toUpperCase());
    }
    function lowerCase(){
        setInputAllData(inputAllData.toLowerCase());
    }
    function sentenceCase(){
        let word = inputAllData.split(" ");
        let word2 = word.map((w, index)=> w.substring(0,1).toUpperCase()+w.substring(1));
        setInputAllData(word2.join(" "));
    }

    function  searchInputUniqueWord(event){
        setSearchInputWord(event.target.value);
        
    }
    useEffect(()=>{
           let word = inputAllData.split(" ");
            //total-word counter
           setTotalWord(word.length-1);
           setWordArray((wordArray)=> [...word]);
            //total-character counter
            setTotalChar(inputAllData.length);
            //total-sentences
            word = inputAllData.split(".");
            setTotalSentences(word.length-1);
            //paragraph-counter
            word = inputAllData.split("\n");
            setTotalParagraph(word.length-1);
            //reading-time-total-word/sentences
            let totalMin = totalWord/250;
            let totalSec = totalMin*60;
            let roundedNumber = Math.round(totalSec);
            setReadingTime(roundedNumber);
            //speaking-time-total-work/sentences
             let min = totalWord/140;
             let sec = min*60;
             let roundedNumber1 = Math.round(sec);
             setSpeakingTime(roundedNumber1);
            //word-density-work/sentences
            /*
                word-density = {(total word apperance)/100}*100
            */
          
            let wArr = inputAllData.split(' ');
            wArr = wArr.splice(0, wArr.length-1);
            let wNewArr =  [... new Set(wArr)];
            let counter=0;
            let allDensity = wNewArr.map((word, index)=>{
                counter = 0;
                wArr.map((str, index)=>{
                    if(str==word)
                        counter++;
                })
                let densityValue = ((counter/totalWord)*100);
                densityValue = densityValue.toFixed(2);
                return(
                    <li className="w-100 keywords-item justify-between items-center px-2 bg-gray-300 d-flex" key={index}>
                        <div>
                            <span className="font-semibold-1 context-des ">{(word.length>=20)? word.substring(0,21)+"..." : word} : </span> 
                        </div>
                        <div>
                            <span className="font-semibold-2 context-value-des">{counter} : </span> 
                            <span className="font-semibold-3">{densityValue}%</span>
                        </div>
                    </li>
                )
            })
            setWordDensity(allDensity);
        
    },[inputAllData])
return(
    <section className="word-count-head">
        <Navbar></Navbar>
        <div className="container-fluid word-counter-container">
            <div className="row justify-content-center mb-5">
                <div className="col-lg-9 col-md-10 col-sm-10">
                            <h1>Word Counter</h1>
                </div>
                <div className="col-lg-9 col-md-10 col-sm-10">
                    <div className="row manage-row">
                        <div className="col-lg-8 col-md-8 col-sm-12 mt-3">
                            <div className="word-write-area">
                                <div className="word-input-area">
                                    <textarea onChange={(event)=>setInputAllData((inputAllData)=> event.target.value)} value={inputAllData} className="w-100" rows={15} name="word_counter" id=""></textarea>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 mt-2">
                                <div className="action-event-btn manage-event">
                                    <div className="action-btn">
                                        <button onClick={()=>upperCase()}>UPPERCASE</button>
                                        <button onClick={()=>lowerCase()}>LOWERCASE</button>
                                        <button onClick={()=>sentenceCase()}>SENTENCE-CASE</button>
                                        <button onClick={()=>titleCase()}>TITLE</button>
                                    </div>
                                     <div className=" action-btn action-search-btn mt-2">
                                        <input type="text" onChange={(event)=> searchInputUniqueWord(event)} value={searchInputWord} name="searchInputWord" placeholder="search here"/>
                                        <button onClick={(event)=>searchInputUniqueWord(event)}>UPPERCASE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 mt-3 word-counter-col">
                            <div className="row justify-content-center">
                                <div className="col-11 bg-white border-top">
                                    <h3>Statistics</h3>
                                </div>
                                <div className="col-11 top-statistics">
                                    <div className="count-area d-flex mb-4">                                        
                                        <div className="w-1">
                                            <div className="uppercase text-xs">WORD</div>
                                            <span className="text-4xl font-bold text-black">{totalWord}</span>
                                        </div> 
                                        <div className="w-2">
                                            <div className="uppercase text-xs">CHARACTER</div> 
                                            <span className="text-4xl font-bold text-black">{totalChar}</span>
                                        </div>
                                    </div>
                                    <div className="count-area d-flex mb-4">                                        
                                        <div className="w-1">
                                            <div className="uppercase text-xs">SENTENCES</div>
                                            <span className="text-4xl font-bold text-black">{totalSentences}</span>
                                        </div> 
                                        <div className="w-2">
                                            <div className="uppercase text-xs">PARAGRAPH</div> 
                                            <span className="text-4xl font-bold text-black">{totalParagraph}</span>
                                        </div>
                                    </div>
                                    <div className="count-area d-flex mb-4">                                        
                                        <div className="w-1">
                                            <div className="uppercase text-xs">READING TIME</div>
                                            <span className="text-4xl font-bold text-black">{readingTime}</span>
                                            <sub>sec</sub>
                                        </div> 
                                        <div className="w-2">
                                            <div className="uppercase text-xs">SPEAKING TIME</div> 
                                            <span className="text-4xl font-bold text-black">{speakingTime}</span>
                                            <sub>sec</sub>
                                        </div>
                                    </div>
                                </div>
                                 <div className="col-11 bg-white mt-2 p-2">
                                    <h3 className="keyword-density">Keyword Density</h3>
                                </div>
                                <div className="col-11 bottom-statistics">
                                    <div className="word-density pb-3">
                                        <div className="">
                                            <ul className="density-value">
                                                {
                                                   wordDensity
                                                    
                                                }
                                            </ul>
                                        </div>
                                      
                                    </div>
                                </div>
                                <div className="col-11 bg-white p-2 download-load-copy">
                                    <div className="export-tech text-center">
                                            <div><strong>Export As</strong></div>
                                    </div>
                                    <div className="download-type">
                                            <button className="csv-type">&#x2B07; CSV</button>
                                            <button className="txt-type">&#x2B07; TXT</button>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}