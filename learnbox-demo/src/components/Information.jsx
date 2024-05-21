import './Information.css'

import { SiOpenai } from "react-icons/si";
import { HiAcademicCap } from "react-icons/hi2";
import { IoChatbubblesSharp } from "react-icons/io5";
import { IoBook } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";


export default function Information() {
    return (
        <>
            <div className="information">
                <div className="wrapper">
                    <div className="text1">
                        <h1>Înaine să începem...</h1>
                        <h2 className='mt-1'>Acesta este un site menit să demonstreze funcționalități ale platformei LearnBox. Pentru sugestii și feedback, nu ezitați să ne contactați pe adresa de email <b>learnbox_project@gmail.com!</b></h2>
                    </div>

                    <div className="text2">
                        <h1>Cine suntem noi...</h1>
                        <h2 className='mt-1'>
                            Suntem o echipă formată din elevi de liceu care au profitat de oportunitatea de a crea o platformă cu rol educativ în scopul sprijinirii adolscenților motivați și doritori să învețe, combinând conceptul de social media cu experiența altor oameni, inclusiv cea a noii tehnologii de Inteligență Artificială.

                            {/* A small college team that took an opportunity of making an educational platform to support teenagers with learning difficulties and huge academic goals, by intertwining social media and the experience of others, including the new AI technology.*/} </h2>
                    </div>

                    <div className="text3-wrapper">
                        <div id="line"></div>
                        <div className="text3">
                            <SiOpenai size={50} />
                            <HiAcademicCap size={50} />
                            <IoChatbubblesSharp size={50} />
                            <IoBook size={50} />
                            <PiStudentFill size={50} />
                        </div>
                        <div id="line"></div>
                    </div>



                </div>
            </div>


        </>
    )
}