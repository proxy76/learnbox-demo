import './Sections.css'

import Dropdown_section from './Dropdown_section'

export default function Sections() {
    return (
        <>
            <div className="sec">
                <div className="wrapper">
                    <div className="text">
                        <h1>
                            {/* The power of Artificial Intelligence */}
                            Organizarea structurată și eficientă

                        </h1>
                        <h2 className='mt-1'>
                            {/* As previously said, an integration of an AI will be used in order to help students. The website provides a demonstration of how it will look like. */}
                            Pentru o eficiență cât mai sporită, ne trebuie un sistem organizat pentru ca membrii platformei să poată găsi informațiile în cel mai scurt timp posibil...
                        </h2>

                        <Dropdown_section />

                    </div>
                </div>
            </div>
        </>
    )
}