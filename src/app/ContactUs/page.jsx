import React from 'react'
import Form from './Form'

const Contactus = () => {
    return (
        <section>
            <div className='grid grid-cols-2'>
                <div className="pt-[15vh] px-[10%] pb-[10vh] font-normal leading-10 capitalize mt-20 mb-10">
                    <p className="mb-4 text-6xl opacity-50">Let Us Know What You Think!</p>
                    <p className="text-4xl">Your suggestion is worth a consideration</p>
                </div>

                <div>
                    <Form/>
                </div>
            </div>
        </section>
    )
}

export default Contactus