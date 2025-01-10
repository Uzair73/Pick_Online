import React from 'react'

const SupprtMenu = ({classname}) => {
  return (
    <>
    <menu>
        <section>
            <div className={classname}>
                <div className="box flex flex-col justify-center text-center items-center gap-2">
                    <div className="container bg-[#C1C0C1] rounded-[50%] py-4 px-4 w-20">
                    <img src="/icon-delivery.svg" alt="delivery-img" className='h-12 mx-auto bg-black rounded-[50%] px-1'/>
                    </div>
                    <h2 className='text-xl font-bold uppercase'>Free and Fast Delivery</h2>
                    <p>Free delivery for all orders over $140</p>
                </div>
                <div className="box flex flex-col justify-center text-center items-center gap-2">
                    <div className="container bg-[#C1C0C1] rounded-[50%] py-4 px-4 w-20">
                    <img src="/icon-Customer service.svg" alt="delivery-img" className='h-12 mx-auto bg-black rounded-[50%] px-1'/>
                    </div>
                    <h2 className='text-xl font-bold uppercase'>24/7 Customer Service</h2>
                    <p>Friendly 24/7 customer support</p>
                </div>
                <div className="box flex flex-col justify-center text-center items-center gap-2">
                    <div className="container bg-[#C1C0C1] rounded-[50%] py-4 px-4 w-20">
                    <img src="/icon-secure.svg" alt="delivery-img" className='h-12 mx-auto bg-black rounded-[50%] px-1'/>
                    </div>
                    <h2 className='text-xl font-bold uppercase'>Money Back Guarantee</h2>
                    <p className='captilized'>We return money within 30 days</p>
                </div>
            </div>
        </section>
    </menu>
    </>
  )
}

export default SupprtMenu