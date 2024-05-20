import './Information.css'

export default function Information() {
    return (
        <>
            <div className="information">
                <div className="wrapper">
                    <div className="text1">
                        <h1>Înaine să începem...</h1>
                        <h2 className='mt-1'>Acesta este un site menit să demonstreze funcționalități ale platformei LearnBox. Penntru sugestii și feedback, nu ezitați să ne contactați pe adresa de email <b>learnbox_project@gmail.com!</b></h2>
                        <input type="email" placeholder='name@email.com'/>
                    </div>
                    
                    <div className="text2">
                        <h1>Cine suntem noi...</h1>
                        <h2 className='mt-1'>
                            Suntem o echipă formată din elevi de liceu care au profitat de oportunitatea de a crea o platformă cu rol educativ în scopul sprijinirii adolscenților motivați și doritori să învețe, combinând conceptul de social media cu experiența altor oameni, inclusiv cea a noii tehnologii de Inteligență Artificială.

                            {/* A small college team that took an opportunity of making an educational platform to support teenagers with learning difficulties and huge academic goals, by intertwining social media and the experience of others, including the new AI technology.*/ } </h2>
                    </div>

                </div>
            </div>


        </>
    )
}