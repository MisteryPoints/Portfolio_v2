import React from 'react'

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
      <div>
        <h3 className='capitalize font-bold text-2xl'>{position} &nbsp; <a href={companyLink} target='_blank' className='text-primary capitalize'>@{company}</a></h3>
        <span className='capitalize font-medium text-dark/75'>
          {time} | {address}
        </span>
        <p className='font-medium w-full'>
          {work}
        </p>
      </div>
    </li>
  )
}

const Experience = () => {
  return (
    <div className='my-56'>
      <h2 className='font-bold text-8xl w-full mb-32 text-center'>Experience</h2>
      <div className='w-[75%] mx-auto relative'>
        <ul>
          <Details
            position={'Data Analyst'} 
            company={'Claro'} 
            companyLink={'https://www.claro.com.do/'}
            time={'2018-Present'} 
            address={'Santo Domingo, DN'}
            work={"Worked on a team responsible on Avery analysis, Provisioning analysis, developing solutions for Claro Dom Provisioning System and Number Inventory Management, including the Phone Numbers Data analysis for availability, improving sales results by dealer and consultant locations."}
          />
          <Details
            position={'Software Developer'} 
            company={'Quickarr'} 
            companyLink={'https://zaubee.com/biz/quickarr-repuestos-y-servicios-automotriz-cu275oah'}
            time={'2017-2018'} 
            address={'Santo Domingo, DN'}
            work={"Worked as a Principal Developer of the private Customer Billing System in the Automotive Business, selling and mantaining the Software with the SaaS model."}
          />
          <Details
            position={'Software Developer (Freelancer)'} 
            company={'DevPoint'} 
            companyLink={'https://devpoint.vercel.app/'}
            time={'2017-Present'} 
            address={'Santo Domingo, DN'}
            work={"Worked as a Freelance Developer, Design, build, test, and deploy software applications and features, selling them as a SaaS. Carry software products through the SDLC 'Software Development Life Cycle', Troubleshoot and debug software, Work with business analysts to define software requirements."}
          /> 
          <Details
            position={'IT Manager Intern'} 
            company={'Rowe Labs'} 
            companyLink={'https://laboratoriosrowe.com/'}
            time={'2017-2017'} 
            address={'Los Alcarrizos, Santo Domingo Norte'}
            work={"Worked as a Principal Developer of the private Customer Billing System in the Automotive Business, selling and mantaining the Software with the SAAS model."}
          />
        </ul>
      </div> 
    </div>
  )
}

export default Experience