import UserCard from "@/components/UserCard"

const Page = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT  */}
      <div className="w-full lg:w-2/3">
        {/* USER CARDS  */}
        <div className="flex gap-3 justify-between">
          {[
            { noinci: 115, description:'Total Incidents' },
            { noinci: 90, description:'Incidents Resolved' },
            { noinci: 200, description:'Notification Sent' },
            { noinci: 25, description:'Active Incidents' },
          ].map((data, index) => (
            <UserCard key={index} noinci={data.noinci} description={data.description} />
          ))}
        </div>
      </div>
      {/* RIGHT  */}
      <div className="w-full lg:w1/3"></div>
    </div>
  )
}

export default Page