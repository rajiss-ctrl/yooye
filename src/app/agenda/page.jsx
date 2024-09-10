import Comment from '@/components/Comment'
import React from 'react'

export default function Agenda() {
  return (
    <article className='py-12 px-4 md:px-16'>
      <div className="w-full md:max-w-3xl md:mx-auto px- py-5 md:p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">My Vision for Ira Ward</h1>
      <ul className="space-y-4 text-lg leading-relaxed">
        <li className="flex items-start space-x-3">
          <span className="text-blue-500 font-semibold">1.</span>
          <p>
            <strong>Empowering Youth with Technology and Skills Training:</strong> I am surrounded by tech-savvy individuals who are ready to teach our youth valuable technology skills, giving them access to opportunities in the tech industry. This will help curb the alarming number of young people engaging in cybercrime ("Yahoo Yahoo") by offering them a legitimate path to success in the digital economy.
          </p>
        </li>
        <li className="flex items-start space-x-3">
          <span className="text-blue-500 font-semibold">2.</span>
          <p>
            <strong>Transforming Agriculture into a Sustainable Business:</strong> As someone who believes in farming as a business, I will ensure farmers in our community receive access to modern agricultural tools, training, and resources. We will create cooperatives, improve access to markets, and introduce innovative farming techniques to increase productivity and profitability for all.
          </p>
        </li>
        <li className="flex items-start space-x-3">
          <span className="text-blue-500 font-semibold">3.</span>
          <p>
            <strong>Developing and Promoting Local Football Talent:</strong> I will support football development by encouraging sports programs that help identify and nurture young talents in our community. This includes improving football facilities, organizing local competitions, and connecting promising players to professional opportunities. Sports not only unite us but also provide pathways for youth to excel both locally and internationally.
          </p>
        </li>
        <li className="flex items-start space-x-3">
          <span className="text-blue-500 font-semibold">4.</span>
          <p>
            <strong>Attracting Development Projects and Investments:</strong> I will work to attract both public and private investments into our community to build infrastructure such as roads, clean water, and modern farming equipment. These projects will create jobs, improve living conditions, and foster economic growth for everyone.
          </p>
        </li>
        <li className="flex items-start space-x-3">
          <span className="text-blue-500 font-semibold">5.</span>
          <p>
            <strong>Community-driven Entrepreneurship:</strong> I will support and promote entrepreneurship by providing workshops, training, and funding opportunities for young entrepreneurs, farmers, and local businesses. My goal is to help everyone tap into their potential and contribute to our local economy through innovation and small business growth.
          </p>
        </li>
        <li className="flex items-start space-x-3">
          <span className="text-blue-500 font-semibold">6.</span>
          <p>
            <strong>Engaging Our Indigenes Living Outside the Community:</strong> For our brothers and sisters living outside the community, I will foster stronger ties by creating platforms where they can contribute to the development of our community through investments, mentorship, and collaboration. Together, we can pool resources to improve our hometown.
          </p>
        </li>
        <li className="flex items-start space-x-3">
          <span className="text-blue-500 font-semibold">7.</span>
          <p>
            <strong>Prioritizing Education and Vocational Training:</strong> I will advocate for the improvement of our schools and ensure that vocational training centers are established to equip our youth with practical skills. From farming to tech, our youth will have the tools they need to succeed in various industries.
          </p>
        </li>
        <li className="flex items-start space-x-3">
          <span className="text-blue-500 font-semibold">8.</span>
          <p>
            <strong>Promoting Unity and Inclusion:</strong> I am a friend to all and will work to bring the entire community together—youth, farmers, and indigenes—whether they live here or abroad. Together, we can create an inclusive environment where everyone’s voice is heard, and no one is left behind.
          </p>
        </li>
      </ul>
    </div>
      <Comment/>
    </article>
  )
}


