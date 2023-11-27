'use client'

import { HomeIcon, MailIcon, PhoneCall } from "lucide-react"


const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div>
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👏
            </div>
            <h1 className="h1 max-w-md mb-8">let's Work Together.</h1>
          </div>
        </div>
        {/* info text & form */}
        <div>info text & form</div>
      </div>
    </section>
  )
}

export default Contact