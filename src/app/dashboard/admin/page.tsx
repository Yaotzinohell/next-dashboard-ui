import UserCard from "@/components/UserCard"

const Page = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT  */}
      <div className="w-full lg:w-2/3">
        {/* USER CARDS  */}
        <div className="">
          <UserCard type="Total Incidents"/>
          <UserCard type="Incidents Resolved"/>
          <UserCard type="Notifications Sent"/>
          <UserCard type="Active Incidents"/>
           
        </div>
      </div>
      {/* RIGHT  */}
      <div className="w-full lg:w1/3">r</div>
    </div>
  )
}

export default Page